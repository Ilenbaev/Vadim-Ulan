import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "./img/raritet.png";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.css";
import LiveSearch from "../LiveSearch/LiveSearch";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import FaceIcon from "@mui/icons-material/Face";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { currentUser, logOutUser } = useAuth();

  const { getCartLength, cartLength } = useCart();

  React.useEffect(() => {
    getCartLength();
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}
      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Выйти
        </MenuItem>
      )}
      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink
            className="mobile-link"
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Регистрация
          </NavLink>
        </MenuItem>
      )}
      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink
            className="mobile-link"
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Войти
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <IconButton
            style={{ color: "black" }}
            size="large"
            aria-label="show 4 new mails"
          >
            <HomeIcon />
          </IconButton>
          <span style={{ color: "black" }}>Главная</span>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/adress" style={{ textDecoration: "none" }}>
          <IconButton
            style={{ color: "black" }}
            size="large"
            aria-label="show 4 new mails"
          >
            <LocationOnIcon />
          </IconButton>
          <span style={{ color: "black" }}>Mагазины</span>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/book" style={{ textDecoration: "none" }}>
          <IconButton
            style={{ color: "black" }}
            size="large"
            aria-label="show 4 new mails"
          >
            <MenuBookIcon />
          </IconButton>
          <span style={{ color: "black" }}>Книги</span>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <IconButton
            style={{ color: "black" }}
            size="large"
            aria-label="show 4 new mails"
          >
            <InfoIcon />
          </IconButton>
          <span style={{ color: "black" }}>О нас</span>
        </NavLink>
      </MenuItem>
      {currentUser?.isAdmin && (
        <MenuItem>
          <NavLink to="/admin" style={{ textDecoration: "none" }}>
            <IconButton
              style={{ color: "black" }}
              size="large"
              aria-label="show 4 new mails"
            >
              <SettingsIcon />
            </IconButton>
            <span style={{ color: "black" }}>Admin</span>
          </NavLink>
        </MenuItem>
      )}
      {currentUser?.user && (
        <MenuItem>
          <NavLink
            to="/cart"
            style={{ color: "white", textDecoration: "none" }}
          >
            <IconButton
              style={{ color: "black" }}
              size="large"
              aria-label="show 4 new mails"
            >
              <Badge badgeContent={+cartLength} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            <span style={{ color: "black" }}>Корзина</span>
          </NavLink>
        </MenuItem>
      )}

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          {currentUser?.isLogged ? <FaceIcon /> : <AccountCircle />}
        </IconButton>
        {currentUser.user === null ? <p>Profile</p> : <p>{currentUser.user}</p>}
      </MenuItem>
      <hr />
      <LiveSearch />
    </Menu>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 3,
      }}
    >
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "#303030",
          }}
        >
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              <img src={logo} width="200px" alt="" />
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/"
            >
              Главная
            </Button>
            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/adress"
            >
              Mагазины
            </Button>

            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/book"
            >
              Книги
            </Button>

            <Button
              sx={{
                mx: 1,
                color: "white",
                display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/about"
            >
              О нас
            </Button>

            {currentUser?.isAdmin && (
              <Button
                sx={{
                  mx: 1,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                }}
                component={NavLink}
                to="/admin"
              >
                Admin
              </Button>
            )}

            <LiveSearch />

            {currentUser?.user && (
              <Link to="/cart" style={{ color: "white" }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Badge badgeContent={+cartLength} color="error">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
              </Link>
            )}

            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
