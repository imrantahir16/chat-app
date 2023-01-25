import axios from "axios";
import io from "socket.io-client";

let socket;
const SOCKET_URL = "http://localhost:8080";

export const initiateSocket = (channel, username) => {
  socket = io(SOCKET_URL, {
    query: {
      channel,
      username,
    },
  });

  console.log("Connecting to Socket");
  if (socket && channel) {
    socket.emit("CHANNEL_JOIN", channel);
  }
};

// socket.once("connect", () => {
//   socket.on("online", (userId) => {
//     console.log(userId, "is online");
//   });

//   socket.on("offline", (userId) => {
//     console.log(userId, "is offline");
//   });
// });

export const switchChannel = (prevChannel, channel) => {
  if (socket) {
    socket.emit("CHANNEL_SWITCH", { prevChannel, channel });
  }
};

export const subscribeToMessages = (callback) => {
  if (!socket) return;

  socket.on("NEW_MESSAGE", (data) => {
    callback(null, data);
  });
};

export const sendMessage = (data) => {
  if (!socket) return;
  socket.emit("SEND_MESSAGE", data);
};

export const fetchChannels = async (channel) => {
  const response = await axios.get(`${SOCKET_URL}/channels`);

  return response.data.channels;
};

export const fetchChannelMessage = async (channel) => {
  const response = await axios.get(
    `${SOCKET_URL}/channnels/${channel}/messages`
  );

  return response.data.allMessages;
};
