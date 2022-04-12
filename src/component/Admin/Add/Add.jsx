import { IconButton } from "@mui/material";
import React from "react";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";

const Add = () => {
  const { addProduct } = useProductContext();
  return (
    <div>
      <h2 style={{ marginTop: "150px", textAlign: "center" }}>
        Добавить продукт
      </h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
