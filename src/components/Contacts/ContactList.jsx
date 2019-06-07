import React, { Component } from "react";
import Contact from "./Contact";
import "./index.css";

export default class ContactList extends Component {
  render() {
    const list = [
      { name: "john doe", lastmsg: "I am your's", lastseen: "23:35" },
      { name: "peter parker", lastmsg: "Uncle is dead", lastseen: "23:35" },
      { name: "John whick", lastmsg: "hello buddy", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },

      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" }
    ];
    return (
      <div class="contact-list">
        {list.map(contact => (
          <Contact contact={contact} />
        ))}
      </div>
    );
  }
}
