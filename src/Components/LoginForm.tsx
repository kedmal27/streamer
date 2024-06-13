import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    // alert(`Email:${e.state.email} Password:${e.state.pwd}`);
  };

  return (
    <form className="loginForm" name="login" onSubmit={handleLogin}>
      <div className="formGroup">
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="formGroup">
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div className="rememberMe">
        <input type="checkbox" />
        <label>Remember me</label>
      </div>
      <button type="submit">LOG IN</button>
    </form>
  );
};
