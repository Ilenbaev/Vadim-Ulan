import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import imgone from "../component/Navbar/img/one.svg";
import imgtwo from "../component/Navbar/img/back.svg";
import imgеthree from "../component/Navbar/img/earth.svg";
import imgеfour from "../component/Navbar/img/four.svg";
import "./Delivery.css";
import { notify } from "../component/Toastify/Toastify";
import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useProductContext } from "../contexts/ProductContextProvider";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/system";

const initValues = {
  name: "",
  surname: "",
  adres: "",
  money: "",
};

export default function Delivery() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { prodId } = useParams();

  const { getOneProduct, forEditVal } = useProductContext();
  const [inpValues, setInpValues] = useState(initValues);

  React.useEffect(() => {
    getOneProduct(prodId);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloser = () => {
    setOpen(false);
  };

  const hand = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handle = (e) => {
    e.preventDefault();
    if (
      !inpValues.name.trim() ||
      !inpValues.surname.trim() ||
      !inpValues.adres.trim() ||
      !inpValues.money.trim()
    ) {
      console.log(inpValues.money);
      notify("error", "Заполните все поля");
      return;
    }
    setOpen(false);
    notify("success", `Вы успешно оформили доставку на "${forEditVal.title}"`);
    setInpValues("");
  };

  return (
    <Container
      sx={{ flexGrow: 1 }}
      maxWidth="lg"
      style={{ textAlign: "center" }}
    >
      {forEditVal ? (
        <>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Card
              sx={{
                width: 250,
                m: 1,
                border: "1px solid black",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <img
                  src={imgone}
                  style={{ margin: "10px", maxHeight: "300px" }}
                />
              </CardContent>
              <br />
              <CardContent>
                <Typography variant="h5">Безопасная оплата</Typography>
                <br />
                <Typography variant="body">
                  Банк зарезервирует деньги на вашей карте. Продавец получит их,
                  когда вы проверите и примете посылку.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                width: 250,
                m: 1,
                border: "1px solid black",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <img
                  src={imgtwo}
                  style={{ margin: "10px", maxHeight: "300px" }}
                />
              </CardContent>
              <br />
              <CardContent>
                <Typography variant="h5">Бесплатный возврат</Typography>
                <br />
                <Typography variant="body">
                  Вы сможете проверить товар при получении. Если он не подойдёт,
                  вам вернутся деньги даже за доставку.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                width: 250,
                m: 1,
                border: "1px solid black",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <img
                  src={imgеthree}
                  style={{ margin: "10px", maxHeight: "300px" }}
                />
              </CardContent>
              <br />
              <CardContent>
                <Typography variant="h5">Больше предложений</Typography>
                <br />
                <Typography variant="body">
                  Выбирайте книги со всего КГ и заказывайте то, чего не продают
                  в вашем городе.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                width: 250,
                m: 1,
                border: "1px solid black",
              }}
            >
              <CardContent style={{ textAlign: "center" }}>
                <img
                  src={imgеfour}
                  style={{ margin: "10px", maxHeight: "300px" }}
                />
              </CardContent>
              <br />
              <CardContent>
                <Typography variant="h5">Курьеры и пункты выдачи</Typography>
                <br />
                <Typography variant="body">
                  Заказывайте товары удобным способом и любимыми службами.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              component={Link}
              to="/book"
              variant="contained"
              color="success"
              style={{ marginTop: 30 }}
              sx={{
                p: 2,
                marginBottom: 4,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              Вернуться к выбору книг
            </Button>

            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="error"
              style={{ marginTop: 30 }}
              sx={{
                p: 2,
                marginBottom: 4,
                fontSize: "1.5rem",
                fontWeight: "900",
              }}
            >
              Оформить доставку
            </Button>
          </Box>

          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Box className="modal">
              <DialogTitle
                id="responsive-dialog-title"
                sx={{ textAlign: "center" }}
              >
                <p>Форма заказа</p>
              </DialogTitle>
              <div style={{ display: "flex" }}>
                <div style={{ width: "800px" }}>
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    variant="outlined"
                    label="Название книги"
                    value={forEditVal.title}
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Цена"
                    value={forEditVal.price}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Имя"
                    variant="outlined"
                    name="name"
                    value={inpValues.name}
                    onChange={(e) => hand(e)}
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Фамилия"
                    variant="outlined"
                    name="surname"
                    value={inpValues.surname}
                    onChange={(e) => hand(e)}
                  />
                  <TextField
                    sx={{ m: 1 }}
                    id="outlined-basic"
                    label="Адрес"
                    variant="outlined"
                    name="adres"
                    value={inpValues.adres}
                    onChange={(e) => hand(e)}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Способ оплаты
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Жанр"
                      name="money"
                      value={inpValues.money}
                      sx={{ m: 1 }}
                      onChange={(e) => hand(e)}
                    >
                      <MenuItem value={"dollar"}>$</MenuItem>
                      <MenuItem value={"som"}>сом</MenuItem>
                      <MenuItem value={"rubl"}>рубль</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                  sx={{ my: 3 }}
                  autoFocus
                  onClick={handleClose}
                  variant="contained"
                >
                  Закрыть
                </Button>
                <Button
                  sx={{ my: 3 }}
                  onClick={(e) => handle(e)}
                  variant="contained"
                  autoFocus
                >
                  Заказать
                </Button>
              </div>
            </Box>
          </Dialog>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}
