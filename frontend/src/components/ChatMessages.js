import { useEffect } from "react";

const ChatMessages = ({ messages }) => {
  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <ul>
      {messages.map((mes) => {
        return (
          <li key={mes.id}>
            <img src={mes.image} />
            {mes.body}
          </li>
        );
      })}
    </ul>
  );
};
export default ChatMessages;
