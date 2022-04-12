import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "./Admin.css";

const Admin = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Container maxWidth="lg">
        <div className="admin">
          <h1>Добро пожаловать {currentUser.user}</h1>
        </div>
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
