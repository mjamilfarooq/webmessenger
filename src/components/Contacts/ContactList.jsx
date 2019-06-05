import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Contact from "./Contact";

export default class ContactList extends Component {
  render() {
    const list = [
      { name: "john doe", lastmsg: "I am your's", lastseen: "23:35" },
      { name: "peter parker", lastmsg: "Uncle is dead", lastseen: "23:35" },
      { name: "John whick", lastmsg: "hello buddy", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" },
      { name: "lena headley", lastmsg: "you win or die", lastseen: "23:35" }
    ];
    return (
      <div>
        <select variant="flush" as="ul" multiple>
          {list.map(contact => (
            <Contact contact={contact} />
          ))}
        </select>
      </div>
    );
  }
}
