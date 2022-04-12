import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import pic3 from "./images/DSC_0111.jpeg";
import pic4 from "./images/DSC_0113-1.jpeg";
import pic5 from "./images/03.jpeg";
import pic6 from "./images/asiamall.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./Adress.css";

const Adress = () => {
  return (
    <div>
      <div className="adrCard">
        <h1>Ждем Вас в наших магазинах!</h1>
      </div>

      <Container sx={{ flexGrow: 1, marginTop: 16 }}>
        <Box
          className="adressCard"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Card className="cardAdress" sx={{ maxWidth: 550, marginTop: 5 }}>
            <CardActionArea
              className="cardAbout"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              <CardMedia src={pic3} component="img" height="300" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div style={{ fontSize: 18 }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                      href="https://www.google.com/maps?ll=42.876654,74.604942&z=17&t=m&hl=ru-RU&gl=US&mapclient=embed&cid=2549538919330353829"
                    >
                      Магазин на площади Ала-Тоо
                    </a>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className="cardAdress" sx={{ maxWidth: 550, marginTop: 5 }}>
            <CardActionArea
              className="cardAbout"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              <CardMedia src={pic4} component="img" height="300" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div style={{ fontSize: 18 }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                      href="https://www.google.com/maps?ll=42.876654,74.604942&z=17&t=m&hl=ru-RU&gl=US&mapclient=embed&cid=2549538919330353829"
                    >
                      Магазин пр. Чуй, 271
                    </a>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          className="adressCard"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Card
            className="cardAdress"
            sx={{ maxWidth: 550, marginTop: 5, marginBottom: 5 }}
          >
            <CardActionArea
              className="cardAbout"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              <CardMedia src={pic5} component="img" height="300" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div style={{ fontSize: 18 }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                      href="https://www.google.com/maps?ll=42.875578,74.614479&z=17&t=m&hl=ru-RU&gl=RU&mapclient=embed&cid=1639328157841744634"
                    >
                      Магазин в ГУМ "Чынар"
                    </a>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            className="cardAdress"
            sx={{ maxWidth: 550, marginTop: 5, marginBottom: 5 }}
          >
            <CardActionArea
              className="cardAbout"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              <CardMedia src={pic6} component="img" height="300" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <div style={{ fontSize: 18 }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      target="_blank"
                      href="https://www.google.com/maps/place/%D0%90%D0%B7%D0%B8%D1%8F+%D0%9C%D0%BE%D0%BB%D0%BB/@42.855705,74.585159,17z/data=!4m5!3m4!1s0x0:0xb6b7beaa1240556a!8m2!3d42.8557053!4d74.5851587?hl=ru"
                    >
                      Магазин в ТРЦ «Азия молл»
                    </a>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Adress;
