const messages = [];

const addMessage = (data) => {
  messages.push(data);

  return data;
};

const getChannelMessage = (channel) => {
  messages.filter((message) => message.channel === channel);
};

module.exports = { addMessage, getChannelMessage };
