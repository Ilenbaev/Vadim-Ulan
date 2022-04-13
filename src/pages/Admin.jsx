import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "./Admin.css";

const Admin = () => {
  const { currentUser } = useAuth();

  return (
    <Container sx={{ flexGrow: 1 }} maxWidth="lg">
      <div className="admin">
        <h1>Добро пожаловать {currentUser.user}</h1>
      </div>
      <Outlet />
    </Container>
  );
};

export default Admin;
