import "./App.css";
import Login from "./Component/Login";
import SignIn from "./Component/SignIn";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route exact path="/success" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
