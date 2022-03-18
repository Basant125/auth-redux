import React from "react";
import "./Login.css";
import { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        Navigate("/success");
        toast.success("Login successfully");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">E-Mail</label>
            <input
              type="email"
              id="name"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Password</label>
            <input
              type="password"
              id="company"
              name="company"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type={"submit"}
              value="Login"
              className="submit-btn"
              onClick={handleLogin}
            />
          </div>
          <span>
            if you haven't account then <Link to="/signin">Signin</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
