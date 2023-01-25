const http = require("http");
const express = require("express");
const cors = require("cors");
const SocketIO = require("socket.io");
const app = express();

const { addUser, removeUser } = require("./Users");
const { addMessage, getChannelMessage } = require("./Messages");
const { channels, addUserToChannel } = require("./Channel");

app.use(cors());

const server = http.createServer(app);
const io = SocketIO(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 8080;

io.on("connection", (socket) => {
  const { username, channel } = socket.handshake.query;
  console.log(`${username} connected`);

  socket.join(channel);
  addUser(username, socket.id);
  addUserToChannel(channel, username);

  socket.on("disconnect", () => {
    console.log(`${username} is disconnected`);
    removeUser(username);
  });

  socket.on("CHANNEL_SWITCH", (data) => {
    const { prevChannel, channel } = data;
    if (prevChannel) {
      socket.leave(prevChannel);
    }

    if (channel) {
      socket.join(channel);
    }
  });

  socket.on("MESSAGE_SEND", (data) => {
    addMessage(data);
    const { channel } = data;
    socket.broadcast.to(channel).emit("NEW_MESSAGE", data);
  });
});

app.get("/channels/:channel/messages", (req, res) => {
  const allMessages = getChannelMessage(req.params.channel);

  res.json(allMessages);
});

app.get("/channels/", (req, res) => {
  return res.json({ channels });
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
