import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import Search from "./Navbar/Search";
import Collection from "../views/Collection";

function Navbar() {
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      <Routes>
        <Route path="search" element={<Search />} />
        <Route path="collection" element={<Collection />} />
      </Routes>
      <Auth />
    </nav>
  );
}

export default Navbar;
