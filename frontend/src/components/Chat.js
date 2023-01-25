import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  initiateSocket,
  sendMessage,
  switchChannel,
  subscribeToMessages,
  fetchChannels,
  fetchChannelMessage,
} from "../helper/socket";
import Channels from "./Channels";
import ChatScreen from "./ChatScreen";
const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState("General");
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    sendMessage([]);
    fetchChannelMessage(channel).then((res) => {
      setMessages(res);
    });
  }, [channel]);

  useEffect(() => {
    fetchChannels().then((res) => {
      setChannels(res);
    });

    subscribeToMessages((error, data) => {
      setMessages((messages) => [...messages, data]);
    });
  });

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const messageSendHandler = (e) => {
    e.preventDefault();
    if (!message) return;
    const data = {
      id: uuid(),
      channel,
      user: username,
      body: message,
      time: Date.now(),
    };
    console.log(data);
    setMessages((messages) => [...messages, data]);
    console.log(messages);
    sendMessage(data);
    setMessage("");
  };

  return (
    <div>
      <Channels
        username={username}
        channel={channel}
        channels={channels}
        setChannel={setChannel}
      />
      <ChatScreen
        channel={channel}
        message={message}
        messages={messages}
        messageSendHandler={messageSendHandler}
        messageChangeHandler={messageChangeHandler}
      />
    </div>
  );
};
export default Chat;
