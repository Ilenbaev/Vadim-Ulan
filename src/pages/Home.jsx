import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="homepage"
      component="div"
      variant="body1"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          p: 2,
          color: "Black",
          fontFamily: "Comic Sans MS",
          fontSize: "1.8rem",
          fontWeight: "700",
          alignSelf: "flex-start",
          margin: 2,
        }}
      >
        <div>Чтение — вот лучшее учение!</div>
        <div>Пушкин А. С.</div>
      </Box>
      <div class="shadow" style={{ alignSelf: "center" }}>
        <Button
          className="homebtn"
          variant="contained"
          size="large"
          component={Link}
          to="/book"
          sx={{
            color: "white",
            backgroundColor: "rgb(48, 48, 48)",
            p: 2.4,
            m: 1,
            borderRadius: 2,
            fontSize: "2rem",
            fontWeight: "900",
          }}
        >
          КУПИТЬ КНИГУ
        </Button>
      </div>
      ;
      <Box
        sx={{
          p: 2,
          color: "White",
          fontFamily: "Comic Sans MS",
          fontSize: "1.8rem",
          fontWeight: "700",
          alignSelf: "flex-end",
          margin: 2,
        }}
      >
        <div>
          Тому, кто читает книги, <br /> никогда не скучно.
        </div>
        <div>Ирвин Уэлш "Кислотный дом".</div>
      </Box>
    </Box>
  );
};

export default Home;
