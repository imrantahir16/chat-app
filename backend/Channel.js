const channels = [
  {
    id: 1,
    name: "General",
    users: [],
  },
  {
    id: 2,
    name: "test 1",
    users: [],
  },
  {
    id: 3,
    name: "test 2",
    users: [],
  },
];

const addUserToChannel = (channel, username) => {
  channels
    .filter((c) => c.name === channel)
    .map((c) => {
      c.users.push(username);

      return c;
    });
};

module.exports = { channels, addUserToChannel };
