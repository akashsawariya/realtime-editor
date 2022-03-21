import React, { useState } from "react";
import CodeImage from "../images/codepen-seeklogo.com.svg";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room id and username required");
      return;
    }

    //redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="logoHeader">
          <img className="homePageLogo" src={CodeImage} alt="codeEdiitor" />
          Code Editor
        </div>
        <h4 className="mainLabel">Paste invitation Room Id</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Room Id"
            onKeyUp={handleEnter}
          />
          <input
            type="text"
            className="inputBox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
            onKeyUp={handleEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create&nbsp;{" "}
            <a onClick={createNewRoom} href="#" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Build with ❤️ by <a href="#">Akash</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
