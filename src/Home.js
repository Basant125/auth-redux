import React from "react";
import "./Home.css";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const Navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const handleAuth = () => {
    if (email) {
      auth.signOut();
      Navigate("/");
      toast.success("Logout successfully");
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <h1>Logged In</h1>
        <span>
          user is - <span className="email">{email}</span>
        </span>
        <button onClick={handleAuth}>Log Out</button>
      </div>
    </div>
  );
};

export default Home;
