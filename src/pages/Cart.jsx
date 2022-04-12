import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import "./Cart.css";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
      {cart?.products.length > 0 ? (
        <>
          <h1>Количество продуктов в корзине: {cart.products.length}</h1>
          <TableContainer component={Paper} style={{ marginTop: "50px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Название</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="center">
                    Жанр
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Обложка
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Цена
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Количество
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Итого
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Удалить
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.products.map((elem) => (
                  <TableRow
                    key={elem.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {elem.item.title}
                    </TableCell>
                    <TableCell align="center">{elem.item.type}</TableCell>
                    <TableCell align="right">
                      <img
                        width="40px"
                        src={elem.item.img}
                        alt={elem.item.title}
                      />
                    </TableCell>
                    <TableCell align="right">{elem.item.price}</TableCell>

                    <TableCell align="right">
                      <IconButton
                        onClick={() =>
                          changeProductCount(elem.count + 1, elem.item.id)
                        }
                      >
                        <AddIcon />
                      </IconButton>

                      {elem.count}

                      <IconButton
                        onClick={() =>
                          changeProductCount(elem.count - 1, elem.item.id)
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">{elem.subPrice}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => deleteProdInCart(elem.item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            className="cartBox"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h4" style={{ marginTop: 30 }}>
              Общая стоимость: ${cart.totalPrice}
            </Typography>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: 30 }}
              sx={{
                p: 2,
                marginBottom: 4,
                fontSize: "2rem",
                fontWeight: "900",
              }}
            >
              Купить товар
            </Button>
          </Box>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Ваша корзина пуста</h1>
          <img
            width="40%"
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F02%2F11%2FGettyImages-84909131-2000.jpg&q=60"
            alt=""
          />
          <br />
          <Button variant="contained" component={Link} to="/book">
            Посмотреть товар
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Cart;
