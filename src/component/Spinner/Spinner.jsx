import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress /> <br />
      <h3>Пусто</h3>
      <h3>Вы хотите добавить продукт ?</h3>
      <Link to="/admin/add">
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
