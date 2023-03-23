
$(function(){
//make connection
const socket = io.connect('http://localhost:3001')
 const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  
 //buttons and inputs
 const message = $("#message")
 const send_message = $("#send_message")
 const change_username = $("#change_username")
 const chatroom = $("#chatroom")
 const feedback = $("#feedback")
 const roomName = document.getElementById('room-name');
 const userList = document.getElementById('users');
 const leave_room = $("#leave_room")
 const change_room = $("#change_room")
 const new_username = $("#new_username")
 const new_room = $("#room")

 //Emit message
 send_message.click(function(){
     socket.emit('new-message', {message : message.val()});
 });

 //Listen on new_message
 socket.on("update-message", (data) => {
     feedback.html('');
     message.val('');
     chatroom.append("<p class='message'>" + `${data.time} - ${data.username}: ` + data.message + "</p>")
 });

 function setRoomName(room) {
    roomName.innerText = room;
}

function setUsers(users) {
    userList.innerHTML = '';
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = user.username;
      userList.appendChild(li);
    });
  }

 // Get room and users
socket.on('update-room-info', ({ room, users }) => {
    setRoomName(room);
    setUsers(users);
  });

 //Change a username
 change_username.click(function(){
     if (new_username.val()) {
        socket.emit('change_username', {username : new_username.val(), room: roomName.innerText})
     } else {
         alert('Invalid username');
     }
     
 })

 //Leave room
 leave_room.click(function(){
    window.location.href = "http://localhost:3001";
})

//Change room
change_room.click(function(){
    socket.emit('change-room', {username : username, room: new_room.val()})    
})
 
//Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
 })

 // Join chatroom
socket.emit('join-room', { username, room });
});


