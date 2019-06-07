import React from "react";

function ContactImage({ src }) {
  return (
    <div class="contact-card-image">
      <img src={src} alt="" />
    </div>
  );
}

export default function Contact(props) {
  let { name, lastmsg, lastseen } = props.contact;

  return (
    <div class="contact-card">
      <ContactImage src="char.png" />
      <div class="contact-card-info">
        <div>
          <div class="contact-card-title">
            <span>{name}</span>
          </div>
          <div class="contact-card-lastseen">
            <text>{lastseen}</text>
          </div>
        </div>
        <div>
          <span>{lastmsg}</span>
        </div>
      </div>
    </div>
  );
}
