var cors = require('cors');
const socketio = require('socket.io');
const path = require('path');
const express = require('express');
const http = require('http');
const chatUsers = require('./chatUsers');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const moment = require('moment');
const mongoose = require("mongoose");
const chatHistory = require('./models/ChatHistory');
const socketEvent = require('./models/SocketEvent');

const connectionString = "mongodb://localhost:27017/chat";
mongoose.connect(connectionString, { useNewUrlParser: true } ).then(() => { 
    console.log("Mongoose connected successfully "); 
},error => { console.log("Mongoose could not connected to database: " + error); 
});

let saveEvent = (socketEvent) => {
	socketEvent.save().then((socketEvent) => {
          console.log(`Event saved: ${socketEvent}`);
      }).catch((err) => {
          console.log(`Error saving event: ${err}`);
      });
}

let saveChatHistory = (chat) => {
	chat.save().then((chat) => {
          console.log(`Chat saved: ${chat}`);
      }).catch((err) => {
          console.log(`Error saving chat: ${err}`);
      });
}

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/chathistory', (req, res) => {
	if (req.query.room) {
		chatHistory.find({"chatRoom": req.query.room}, (error, documents) => {
			if (error) console.log(`Error occurred on chatHistory.find(): ${error}`);
			else {
				const data = documents.map(x => x.item);
				res.send(documents);
			}
		  });    
	} else {
		chatHistory.find((error, documents) => {
			if (error) console.log(`Error occurred on chatHistory.find(): ${error}`);
			else {
				const data = documents.map(x => x.item);
				res.send(documents);
			}
		  });    
	}
});

app.get('/socketevents', (req, res) => {
    socketEvent.find((error, documents) => {
        if (error) console.log(`Error occurred on chatHistory.find(): ${error}`);
        else {
            const data = documents.map(x => x.item);
            res.send(documents);
        }
      });    
});

let setMessage = (username, message) => {
	return {
		username,
		message,
		time: moment().format('YYYY-MM-DD HH:mm')
	};
}

// Config socketio
io.on('connection', socket => {
	console.log(`New connection: ${socket.id}`);
	let newEvent = new socketEvent({
		eventName: "Socket-Connect", 
		eventDescription: "New socket connected", 
		eventDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
		eventOwner: "Server", 
		socketId: socket.id
	});

	saveEvent(newEvent);
	socket.on('join-room', ({ username, room }) => {
		const user = chatUsers.addUser(socket.id, username, room);
		socket.join(user.room);
  
		// Welcome current user
		socket.emit('update-message', setMessage('Chat', 'Welcome to GBC Chat!'));
  
		// Broadcast when a user connects
	  	socket.broadcast
			.to(user.room)
			.emit(
			'update-message',
			setMessage('Chat', `${user.username} joined the chat`)
		);
  
	// Send users and room info
    io.to(user.room).emit('update-room-info', {
		room: user.room,
		users: chatUsers.getUsersByRoom(user.room)
	  });

	console.log(`User ${username} joined the Room ${room}`);
	});

	// Listen for chatMessage
	socket.on('new-message', (msg) => {			
		const user = chatUsers.getUserById(socket.id);
		if (socket && user && msg) {
			io.to(user.room).emit('update-message', setMessage(user.username, msg.message));
			console.log(`New message - ${msg.message}`);
			let newChat = new chatHistory({
				chatUsername: user.username, 
				chatMessage: msg.message, 
				chatRoom: user.room, 
				chatDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
				socketId: socket.id
			});
			saveChatHistory(newChat);
		}
	});

	// Change username
	socket.on('change_username', (data) => {
		let user = chatUsers.getUserById(socket.id);
		// Update chat room
		io.to(user.room).emit('update-message', setMessage('Chat', `User ${user.username} changed his/her name to ${data.username}`));
		let newChat = new chatHistory({
			chatUsername: 'Chat', 
			chatMessage: `User ${user.username} changed his/her name to ${data.username}`, 
			chatRoom: user.room, 
			chatDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
			socketId: socket.id
		});
		saveChatHistory(newChat);

		//Remove user from room
		user = chatUsers.removeUser(socket.id);

		//Join new room
		user = chatUsers.addUser(socket.id, data.username, data.room);
	  	socket.join(data.room);

		io.to(user.room).emit('update-room-info', {
			room: user.room,
			users: chatUsers.getUsersByRoom(user.room)
		  });
	});

	// Change room
	socket.on('change-room', (data) => {
		let user = chatUsers.getUserById(socket.id);
		// Update chat room
		io.to(user.room).emit('update-message', setMessage('Chat', `User ${user.username} left the room`));

		let newChat = new chatHistory({
			chatUsername: 'Chat', 
			chatMessage: `User ${user.username} left the room`, 
			chatRoom: user.room, 
			chatDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
			socketId: socket.id
		});
		saveChatHistory(newChat);

		//Remove user from room
		user = chatUsers.removeUser(socket.id);

		//Join new room
		user = chatUsers.addUser(socket.id, data.username, data.room);
	  	socket.join(data.room);

		// Send update to new room
		io.to(data.room).emit('update-message', setMessage('Chat', `User ${user.username} Joined the room`));

		newChat = new chatHistory({
			chatUsername: 'Chat', 
			chatMessage: `User ${user.username} Joined the room`, 
			chatRoom: data.room, 
			chatDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
			socketId: socket.id
		});

		io.to(user.room).emit('update-room-info', {
			room: user.room,
			users: chatUsers.getUsersByRoom(user.room)
		  });
	});

	socket.on('disconnect', () => {
		const user = chatUsers.removeUser(socket.id);
		if (user) {
			console.log(`User ${user.username} disconnected`);
			let newEvent = new socketEvent({
				eventName: "Socket-Disconnect", 
				eventDescription: `Socket connected - User ${user.username} disconnected`, 
				eventDateTime: moment().format('YYYY-MM-DD HH:mm Z'), 
				eventOwner: "Server", 
				socketId: socket.id
			});
			saveEvent(newEvent);
		
			if (user) {
			  io.to(user.room).emit(
				'update-message',
				setMessage('Chat', `${user.username} left the room`)
			  );
		
			  // Send users and room info
			  io.to(user.room).emit('update-room-info', {
				room: user.room,
				users: chatUsers.getUsersByRoom(user.room)
			  });
			}
		}
	  });
	
  });


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));