import { useState } from "react";

function Channels({ username, channels, channel, setChannel }) {
  return (
    <aside className="sidebar left-sidebar">
      <div className="user-profile">
        <span className="username">@ {username}</span>
      </div>
      <div className="channels">
        <ul className="chat-channels">
          {channels.length ? (
            channels.map((c) => {
              return (
                <li
                  key={c.id}
                  onClick={() => setChannel(c.name)}
                  className={c.name === channel ? "active" : ""}
                >
                  <span className="channel-name">{c.name}</span>
                </li>
              );
            })
          ) : (
            <li>
              <span className="channel-name">No channels available</span>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
}

export default Channels;
