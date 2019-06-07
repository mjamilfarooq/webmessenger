import React from "react";
import {
  FaEllipsisV,
  FaCircleNotch,
  FaCommentAlt
} from "react-icons/fa";
import "./index.css";

export default function Profile() {
  return (
    <header class="profile-section">
      <div>
        <img src="char.png" alt="" />
      </div>
      <div class="profile-options">
        <FaCircleNotch />
        <FaCommentAlt />
        <FaEllipsisV />
      </div>
    </header>
  );
}
