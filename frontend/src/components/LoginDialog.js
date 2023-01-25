import styles from "./LoginDialog.module.css";

const LoginDialog = ({ usernameChange, usernameSubmit }) => {
  return (
    <div className={styles["login-container"]}>
      <div>
        <form className={styles["dialog-form"]} onSubmit={usernameSubmit}>
          <label className="username-label" htmlFor="username">
            Username
          </label>
          <input
            className={styles["text-input-field"]}
            id="username"
            type="text"
            onChange={usernameChange}
            name="username"
            placeholder="Enter you username to continue"
          />
          <button
            type="submit"
            className={styles["login-button"]}
            onClick={() => {
              console.log("clicked");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginDialog;
