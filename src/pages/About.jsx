import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import pic1 from "./images/DSC_0005.jpeg";
import pic2 from "./images/DSC_0119.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Card sx={{ maxWidth: 1370, marginTop: 5 }}>
        <CardActionArea
          className="cardAbout"
          style={{ display: "flex", cursor: "default" }}
        >
          <CardMedia src={pic1} component="img" height="250" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "red" }}>Фирма «Раритет»</span> была
                основана в марте 1992 года. В настоящее время это динамично
                развивающееся книготорговое и издательское предприятие. Книжные
                магазины фирмы находятся в центральной части столицы Кыргызстана
                – городе Бишкек. Просторные светлые залы, оригинальное торговое
                оборудование, свободная выкладка книг, интерьер, выполненный в
                кыргызском национальном стиле, радушие продавцов – визитная
                карточка фирмы. <br /> В магазине, расположенном на площади
                Ала-Тоо, гости также могут бесплатно посетить музей – постоянно
                действующую выставку прикладного искусства кыргызского народа
                или купить сувенир в лавке, стилизованной под традиционную
                кыргызскую юрту.
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 1370, marginTop: 5 }}>
        <CardActionArea
          className="cardAbout"
          style={{ display: "flex", cursor: "default" }}
        >
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div style={{ fontSize: 18 }}>
                <span style={{ color: "red" }}>Ассортимент</span> предлагаемой
                магазинами литературы удовлетворит любые вкусы и потребности
                любителей книги. Постоянным ассортиментом магазина являются
                культурно-исторические издания, фотоальбомы о природе, истории и
                этнографии Кыргызстана, а также туристские карты и открытки с
                видами красивейших мест Кыргызстана.
                <br />
                <span style={{ color: "red" }}>Кроме</span> розничной книжной
                торговли Фирма выполняет заказы организаций и учебных заведений
                по комплектованию своих библиотек.
              </div>
            </Typography>
          </CardContent>
          <CardMedia src={pic2} component="img" height="250" />
        </CardActionArea>
      </Card>

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}
      >
        <Button
          variant="contained"
          color="error"
          component={Link}
          to="/adress"
          style={{
            marginTop: 40,
          }}
          sx={{
            p: 1,
            borderRadius: 2,
            fontSize: "1.2rem",
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Ждем Вас в наших магазинах!
        </Button>
      </div>
    </Container>
  );
};

export default About;
