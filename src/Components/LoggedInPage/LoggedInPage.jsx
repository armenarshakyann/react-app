import React, { useContext, useState } from "react";
import "./LoggedInPage.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Product from "./Pages/Product";
import Create from "./Pages/Create";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";

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
      </Routes>
    </div>
  );
}
export default LoggedInPage;
