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
import { useParams } from "react-router-dom";

export default function Delivery() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { prodId } = useParams();

  const { getOneProduct, forEditVal } = useProductContext();

  React.useEffect(() => {
    getOneProduct(prodId);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{ flexGrow: 1 }}
      maxWidth="lg"
      style={{ textAlign: "center" }}
    >
      {forEditVal ? (
        <>
          <Container
            sx={{ display: { lg: "flex", md: "flex" }, margin: "30px 0" }}
          >
            <Card
              sx={{
                maxWidth: 250,
                m: 2,
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
                maxWidth: 250,
                m: 2,
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
                maxWidth: 250,
                m: 2,
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
                maxWidth: 250,
                m: 2,
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
          </Container>

          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="error"
            style={{ marginTop: 30 }}
            sx={{
              p: 1,
              marginBottom: 4,
              fontSize: "1.5rem",
              fontWeight: "900",
            }}
          >
            Оформить доставку
          </Button>

          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              <p>Форма заказа</p>
            </DialogTitle>
            <div style={{ display: "flex" }}>
              <div>
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Имя"
                  variant="outlined"
                />
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Фамилия"
                  variant="outlined"
                />
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Адрес"
                  variant="outlined"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Способ оплаты
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    label="Жанр"
                    sx={{ m: 1 }}
                  >
                    <MenuItem value={"dollar"}>$</MenuItem>
                    <MenuItem value={"som"}>сом</MenuItem>
                    <MenuItem value={"rubl"}>рубль</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Имя"
                  variant="outlined"
                />
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Фамилия"
                  variant="outlined"
                />
                <TextField
                  sx={{ m: 1 }}
                  id="outlined-basic"
                  label="Адрес"
                  variant="outlined"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Способ оплаты
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    label="Жанр"
                    sx={{ m: 1 }}
                  >
                    <MenuItem value={"dollar"}>$</MenuItem>
                    <MenuItem value={"som"}>сом</MenuItem>
                    <MenuItem value={"rubl"}>рубль</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </Dialog>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}
