import React from "react";
import {
    FaSearch,
    FaPaperclip,
    FaEllipsisV,
    FaSmile,
    FaMicrophoneAlt
  } from "react-icons/fa";
import "./index.css";

export default function Messages(props) {
  return (
    <div class="message-window">
        <header>
            <div class="image">
                <img src="char.png" alt="" />
            </div>
            <div class="info">
                <div><span><strong>KuMCS</strong></span></div>
                <div><span>sdkfsdf s slkdsj lslkkd lsak lsk</span></div>
            </div>
            <div class="options">
                <FaSearch />
                <FaPaperclip />
                <FaEllipsisV />
            </div>

        </header>
        <footer>
            <div>
                <FaSmile />
            </div>
            <div class="message-editor"><input type="text" placeholder="Write a message ..."/></div>
            <div><FaMicrophoneAlt /></div>
        </footer>
        <textarea />
    </div>
  );
}