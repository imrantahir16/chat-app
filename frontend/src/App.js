import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import LoginDialog from "./components/LoginDialog";

function App() {
  const [username, setUsername] = useState("");
  const [loggeIn, setLoggedIn] = useState(false);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value.trim());
  };
  const usernameSubmitHandler = (e) => {
    e.preventDefault();
    if (!username.length) return;
    setLoggedIn(true);
  };

  useEffect(() => {
    console.log("render");
  }, [loggeIn]);

  return (
    <div className="App">
      {!loggeIn ? (
        <LoginDialog
          usernameChange={usernameChangeHandler}
          usernameSubmit={usernameSubmitHandler}
        />
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

export default App;
