import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./pages/Transaction";
import UserPost from "./pages/UserPost";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/userposts" element={<UserPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
