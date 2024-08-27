import React from "react";

function WelcomeMsg({ onGetPostsClick }) {
  return (
    <div>
      <center>
        <h1>There are no posts</h1>
        <br />
        <button
          type="button"
          onClick={onGetPostsClick}
          className="btn btn-primary"
        >
          Get Post from Server
        </button>
      </center>
    </div>
  );
}

export default WelcomeMsg;
