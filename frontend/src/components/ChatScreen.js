// import ChatMessages from "./ChatMessages";
import { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import MessageForm from "./MessageForm";

function ChatScreen({
  channel,
  message,
  messages,
  messageSendHandler,
  messageChangeHandler,
}) {
  useEffect(() => {
    console.log("message rerender");
  }, [messages]);
  return (
    <section className="chat-screen">
      <header className="chat-header">
        <h3>#{channel}</h3>
      </header>
      <ChatMessages messages={messages} />
      <footer className="chat-footer">
        <MessageForm
          message={message}
          messageSendHandler={messageSendHandler}
          messageChangeHandler={messageChangeHandler}
        />
      </footer>
    </section>
  );
}

export default ChatScreen;
