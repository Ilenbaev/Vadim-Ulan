import { Container } from "@mui/material";
import React from "react";
import ProdList from "../component/Products/ProdList/ProdList";
import "./Book.css";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <div className="book">
        <h1>Издательство "РАРИТЕТ"</h1>
      </div>
      <ProdList />
    </Container>
  );
};

export default Products;
