import React from "react";
import Profile from "./Profile/Profile";
import ContactList from "./Contacts/ContactList";
import FilterBox from "./FilterBox/FilterBox";
import "./index.css";

export default function SideBar() {
  return (
    <div class="side-bar">
      <Profile />
      <FilterBox />
      <ContactList />
    </div>
  );
}
