var http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io"),
  server;

(server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
})),
  (send404 = function(res) {
    res.writeHead(404);
    res.write("404");
    res.end();
  });

server.listen(8080);

// socket.io, I choose you
var io = io.listen(server);

io.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  socket.on("join", () => {
    console.log("joined private chat");
    // join the room
    socket.join("private");
    // send message to client (socket)
    socket.emit("private-welcome", "Welcome to Private Chat");
    // broadcast to entire room
    io.to("private").emit(
      "private-welcome",
      `user has joined the private chat`
    );
  });

  socket.on("leave", () => {
    console.log("left private chat");
    // leave the room
    socket.leave("private");
    // broadcast to entire room
    io.to("private").emit("private-exit", `user has left the private chat`);
  });

  socket.on("private-send", function(message) {
    console.log(`Recieved private message: ${message} - from client`);
    // broadcast to entire room
    io.to("private").emit("private-msg-sent", `private message sent`);
  });
});
