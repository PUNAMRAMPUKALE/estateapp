import React from 'react'
 import Chat from "../../components/chatbox/Chatbox";
import ListView from "../../components/listview/ListView";
import "./userprofile.scss";


function UserProfile() {

  return (
    <div className="profilePage-main-container">
      <div className="details-container">
        <div className="wrapper-section">
          <div className="title-container">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info-section">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title-container">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <ListView />
          <div className="title-container">
            <h1>Saved List</h1>
          </div>
          <ListView />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}


export default UserProfile;
