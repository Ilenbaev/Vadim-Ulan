import { Box, Container, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Detail.css";
import { useUserContext } from "../contexts/Comment";
import { useAuth } from "../contexts/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { notify } from "../component/Toastify/Toastify";

const Detail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const { addCommit, products, getCommit, deleteCommit } = useUserContext();

  const { currentUser } = useAuth();

  useEffect(() => {
    getCommit(prodId);
  }, []);

  const [inpValues, setInpValues] = useState({
    commit: "",
    user: "",
    prodId: prodId,
  });

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  useEffect(() => {
    setInpValues({
      ...inpValues,
      user: currentUser.user,
    });
  }, [currentUser]);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };

    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inpValues.commit.trim()) {
      notify("error", "Заполните все поля");
      return;
    }
    let obj = {
      ...inpValues,
    };
    addCommit(obj);
    setInpValues({
      ...inpValues,
      commit: "",
    });
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

          {/* ------------------------------------------------------ */}

          <h1>Комменты</h1>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px 0",
            }}
          >
            <Card
              sx={{
                maxWidth: 800,
                border: "1px solid grey",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e)}>
                  {products.map((item) => (
                    <Box
                      key={item.id}
                      style={{
                        borderBottom: "1px solid black",
                        display: "flex",
                        justifyContent: "center",
                        maxWidth: "750px",
                        minWidth: "500px",
                      }}
                    >
                      <div>
                        <img
                          src="https://images.vexels.com/media/users/3/157838/isolated/lists/79bda32b1cc2787ec7d2a8df05279bad-bald-head-avatar.png"
                          width="100px"
                          alt=""
                        />
                      </div>
                      <div>
                        <p style={{ fontWeight: "bold" }}>{item.user}</p>
                        <p style={{ opacity: "0.6" }}>
                          {new Date().toLocaleString()}
                        </p>
                        <p>{item.commit}</p>
                        {item.user === currentUser.user ? (
                          <IconButton onClick={() => deleteCommit(item)}>
                            <DeleteIcon />
                          </IconButton>
                        ) : (
                          ""
                        )}
                      </div>
                    </Box>
                  ))}
                  <TextField
                    name="commit"
                    id="outlined-basic"
                    label="Коммент"
                    variant="outlined"
                    multiline
                    rows={2}
                    onChange={(e) => handleChange(e)}
                    sx={{ my: 1, maxWidth: "350px" }}
                  />

                  <br />
                  <Button type="submit" variant="contained">
                    Добавить комент
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>
          {/* ----------------------------------------------------------- */}
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
