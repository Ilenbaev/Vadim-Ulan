import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./component/Admin/Add/Add";
import List from "./component/Admin/List/List";
import Edit from "./component/Admin/Edit/Edit";
import MainLayouts from "./layouts/MainLayouts";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Adress from "./pages/Adress";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./component/Auth/RequireAuth";
import Detail from "./pages/Detail";
import Delivery from "./pages/Delivery";
import PaymentForm from "./pages/Bank";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/book/detail/:prodId" element={<Detail />} />
        <Route path="/book/delivery/:prodId" element={<Delivery />} />

        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
