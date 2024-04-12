const LoginPage = () => {
  return (
    <>
      <div>
        <div className="loginBox">
          <h1 className="lTitle">LOGIN</h1>
          <label className="userLabel" for="email">
            Email
          </label>
          <input
            className="userBox"
            type="text"
            id="email"
            name="email"
          ></input>
          <label className="userLabel" for="password">
            Password
          </label>
          <input
            className="userBox"
            type="text"
            id="password"
            name="password"
          ></input>
          <input className="click" type="submit" value="Login"></input>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
