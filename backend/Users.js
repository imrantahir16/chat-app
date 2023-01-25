const users = {};

const addUser = (username, socketId) => {
  users[username] = socketId;
};

const removeUser = (nickname) => {
  if (users.hasOwnProperty(username)) {
    delete users[username];
  }
};

module.exports = { addUser, removeUser };
