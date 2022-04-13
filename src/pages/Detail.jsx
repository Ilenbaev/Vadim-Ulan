import { Box, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Detail.css";
import { useUserContext } from "../contexts/Comment";

const Detail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const { addCommit } = useUserContext();

  const initValues = {
    commit: "",
  };

  const [inpValues, setInpValues] = useState(initValues);

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      ...inpValues,
    };
    addCommit(obj);
  };

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
                Жанр :
                <span style={{ fontWeight: "bold" }}> {forEditVal.type}</span>
                <br />
                Цена :
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

          <Box>
            <Card
              sx={{
                maxWidth: 1200,
                display: { lg: "flex", md: "flex", sm: "flex" },
              }}
              style={{ border: "1px solid grey" }}
            >
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <TextField
                    name="commit"
                    id="outlined-basic"
                    label="Описание"
                    variant="outlined"
                    multiline
                    rows={3}
                    onChange={(e) => handleChange(e)}
                    sx={{ my: 1 }}
                  />
                  <br />
                  <Button type="submit" variant="contained">
                    Добавить комент
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="detailCard"
          >
            <Button
              component={Link}
              to="/book"
              variant="contained"
              color="success"
              style={{ marginTop: 30 }}
              sx={{
                p: 1,
                marginBottom: 2,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
              className="detailOne"
            >
              Вернуться к выбору книг
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: 30 }}
              component={Link}
              to="/paymentForm"
              sx={{
                p: 1,
                marginBottom: 2,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
              className="detailOne"
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
