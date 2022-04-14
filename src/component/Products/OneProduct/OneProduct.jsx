import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContextProvider";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { notify } from "../../Toastify/Toastify";
import Delivery from "../../../pages/Delivery";
import { Box } from "@mui/system";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useFavorite } from "../../../contexts/FavoriteContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFavorite, isProdInFavorite } = useFavorite();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));
  const [inFavorite, setInFavorite] = React.useState(isProdInFavorite(item.id));
  const { currentUser } = useAuth();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ maxWidth: 400, textAlign: "center", border: "2px solid white" }}
      >
        <CardMedia
          component="img"
          height="350"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="#991199">
            ${item.price}
          </Typography>
          <Typography variant="body2">{item.author}</Typography>
          <Typography variant="body1">Жанр: {item.type}</Typography>
        </CardContent>

        <CardActions style={{ display: "flex", flexDirection: "column" }}>
          <Box>
            {currentUser.user === null ? (
              <IconButton
                title="Добавить в корзину"
                color="inherit"
                onClick={() => {
                  notify("error", "Пожалуйста зарегистрируйтесь");
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            ) : (
              <IconButton
                title="Добавить в корзину"
                color={inCart ? "secondary" : "inherit"}
                onClick={() => {
                  addDelToCart(item);
                  setInCart(isProdInCart(item.id));
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            )}
            {currentUser.user === null ? (
              <Button
                variant="outlined"
                size="small"
                style={{ color: "black" }}
                onClick={() => {
                  notify("error", "Пожалуйста зарегистрируйтесь");
                }}
              >
                Узнать больше..
              </Button>
            ) : (
              <Button
                variant="outlined"
                component={Link}
                to={`detail/${item.id}`}
                size="small"
                style={{ color: "black" }}
              >
                Узнать больше..
              </Button>
            )}
            {currentUser.user === null ? (
              <IconButton
                title="Добавить в избранное"
                color="inherit"
                onClick={() => {
                  notify("error", "Пожалуйста зарегистрируйтесь");
                }}
              >
                <BookmarkIcon />
              </IconButton>
            ) : (
              <IconButton
                title="Добавить в избранное"
                color={inFavorite ? "secondary" : "inherit"}
                onClick={() => {
                  addDelToFavorite(item);
                  setInFavorite(isProdInFavorite(item.id));
                }}
              >
                <BookmarkIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            <Button
              variant="outlined"
              component={Link}
              to={`delivery/${item.id}`}
              size="small"
              style={{ color: "black" }}
            >
              Оформить Доставку
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}
