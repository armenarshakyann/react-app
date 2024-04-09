import React, { useContext, useState } from "react";
import "./LoggedInPage.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Product from "./Pages/Product";
import Create from "./Pages/Create";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";
import About from "./Pages/About";
import WomenShoes from "./Pages/WomenShoes";
import MenShoes from "./Pages/MenShoes";
import KidsShoes from "./Pages/KidsShoes";
import FootballShoes from "./Pages/FootballShoes";

function LoggedInPage({ users, setUsers }) {
  return (
    <div className="big90">
      <Header />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route
          exact
          path="/basket"
          element={<Product users={users} setUsers={setUsers} />}
        />
        <Route
          exact
          path="/product"
          element={<Create users={users} setUsers={setUsers} />}
        />
        <Route
          exact
          path="/about"
          element={<About users={users} setUsers={setUsers}/>}
        />
        <Route
          exact
          path="/womenshoes"
          element={<WomenShoes users={users} setUsers={setUsers}/>}
        />
        <Route
          exact
          path="/menshoes"
          element={<MenShoes users={users} setUsers={setUsers}/>}
        />
        <Route
          exact
          path="/kidsshoes"
          element={<KidsShoes users={users} setUsers={setUsers}/>}
        />
        <Route
          exact
          path="/footballshoes"
          element={<FootballShoes users={users} setUsers={setUsers}/>}
        />
      </Routes>
    </div>
  );
}
export default LoggedInPage;
