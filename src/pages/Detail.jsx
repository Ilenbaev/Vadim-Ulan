import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Detail.css";

const Detail = () => {
  const { prodId } = useParams();

  const { getOneProduct, forEditVal } = useProductContext();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  return (
    <>
      {forEditVal ? (
        <Container
          sx={{ flexGrow: 1 }}
          maxWidth="lg"
          style={{ margin: " 30px auto" }}
        >
          <Card
            sx={{
              maxWidth: 1200,
              display: { lg: "flex", md: "flex", sm: "flex" },
            }}
            style={{ border: "1px solid grey" }}
          >
            <CardContent>
              <img
                src={forEditVal.img}
                style={{ margin: "10px", maxHeight: "300px" }}
                alt="green iguana"
              />
              <p>
                Автор :
                <span style={{ fontWeight: "bold" }}> {forEditVal.author}</span>
                <br />
                Жанр :{" "}
                <span style={{ fontWeight: "bold" }}> {forEditVal.type}</span>
                <br />
                Цена :{" "}
                <span style={{ fontWeight: "bold" }}> {forEditVal.price}</span>$
                <br />В наличии : есть
              </p>
            </CardContent>
            <CardContent>
              <Typography
                gutterBottom
                color="text.secondary"
                variant="body"
                component="div"
              >
                Название:
              </Typography>
              <Typography variant="h6">{forEditVal.title}</Typography>

              <Typography
                gutterBottom
                color="text.secondary"
                variant="body"
                component="div"
              >
                О книге:
              </Typography>
              <Typography variant="h6">{forEditVal.description}</Typography>
            </CardContent>
          </Card>
          <div
            className="detailbtns"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              component={Link}
              to="/book"
              variant="contained"
              color="success"
              style={{ marginTop: 30 }}
              sx={{
                p: 2,
                marginBottom: 1,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              Вернуться к выбору книг
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: 30 }}
              sx={{
                p: 2,
                marginBottom: 1,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              Купить эту книгу
            </Button>
          </div>
        </Container>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Detail;
