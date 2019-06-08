import React, { Component } from "react";
import ClampLines from "react-clamp-lines";

function Attachment({ src }) {
  if (src === undefined) return <div />;
  return (
    <div class="attachment">
      <img src={src} />
    </div>
  );
}

export default function Message({ message }) {
  let position = "right";
  if (message.position) position = "left";

  return (
    <div style={{ width: "100%" }}>
      <div class="message" style={{ float: position }}>
        <div class="header">
          <span>
            <strong>{message.title}</strong>
          </span>
        </div>

        <Attachment src={message.reference} />

        <ClampLines
          text={message.text}
          id="really-unique-id"
          lines={4}
          ellipsis="..."
          moreText="more"
          lessText="less"
          classNames="clamp-lines custom-class"
          innerElement="p"
        />
      </div>
    </div>
  );
}
