import React from "react";
import Message from "./Message";
import {
  FaSearch,
  FaPaperclip,
  FaEllipsisV,
  FaSmile,
  FaMicrophoneAlt
} from "react-icons/fa";
import "./index.css";

function MessageArea() {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue dictum nunc consectetur suscipit eu quis nibh. Aliquam nec dictum odio, sed aliquet urna. Curabitur euismod arcu in justo lobortis, in congue mauris posuere. In mollis libero eu mi pulvinar sollicitudin. Mauris nec arcu et nisl tincidunt convallis sit amet et risus. Sed vel enim ut mi accumsan eleifend sed in ex. Duis lobortis lectus non convallis malesuada. Curabitur non vulputate mauris, vel tincidunt neque. Cras pellentesque ipsum vitae metus dictum, id ultrices justo consequat. ";

  let reference = "char.png";
  let title = "John Doe";
  let messages = [
    { text, reference, title, position: true },
    { text, title, position: false },
    { text, title, position: true },
    { text, reference, title, position: false }
  ];
  return (
    <div id="message-area">
      {messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  );
}

export default function Messages(props) {
  return (
    <div class="message-window">
      <header>
        <div class="image">
          <img src="char.png" alt="" />
        </div>
        <div class="info">
          <div>
            <span>
              <strong>KuMCS</strong>
            </span>
          </div>
          <div>
            <span>sdkfsdf s slkdsj lslkkd lsak lsk</span>
          </div>
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
        <div class="message-editor">
          <input type="text" placeholder="Write a message ..." />
        </div>
        <div>
          <FaMicrophoneAlt />
        </div>
      </footer>
      <MessageArea />
    </div>
  );
}
