import './login.css';

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get("password")!=data.get("repeatPassowrd"))alert("Passwords must match")
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      repeatPassword: data.get("repeatPassword")
    });
  };

  return (
    <div className="container">
    <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="txt_field">
                <input type="text" name="email" required></input>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type="password" name="password" required></input>
                <span></span>
                <label>Password</label>
            </div>
            <div className="txt_field">
                <input type="password" name="repeatPassword" required></input>
                <span></span>
                <label>Repeat Password</label>
            </div>
            <input name="submit" type="Submit" value="Login"></input>
            <div className="signup_link">
                Already have an account? <br></br><a href="/login">Sign in</a>
            </div>
        </form>
    </div>
    </div>
  );
};

export default Login;
