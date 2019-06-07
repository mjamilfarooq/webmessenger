import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FilterBox() {
  return (
    <div
      class="filter-section"
      style={{
        padding: "5px",
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
        display: "flex"
      }}
    >
      <button>
        <FaArrowRight />
      </button>
      <input type="text" style={{ width: "100%", display: "inline" }} />
    </div>
  );
}
