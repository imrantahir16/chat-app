function MessageForm({ message, messageSendHandler, messageChangeHandler }) {
  let messageInput;

  return (
    <div>
      <form onSubmit={messageSendHandler} className="message-form">
        <input
          type="text"
          value={message}
          ref={(input) => (messageInput = input)}
          onChange={messageChangeHandler}
          placeholder="Type your message here..."
          className="message-input"
        />
        <button type="submit" className="">
          submit
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
