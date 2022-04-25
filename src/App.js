import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./books/HomePage";
import AddBook from "./books/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addBook" element={<AddBook />} />
    </Routes>
  );
}

export default App;
