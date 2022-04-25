import React from "react";

import { IoAdd } from "react-icons/io5";

import "./BookItems.css";

function BookItem() {
  return (
    <>
      <div className="Item">
        <IoAdd />
      </div>
      <div className="Item">
        <IoAdd />
      </div>
      <div className="Item">
        <IoAdd />
      </div>
    </>
  );
}

export default BookItem;
