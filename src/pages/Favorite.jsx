import * as React from "react";

import { Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFavorite } from "../contexts/FavoriteContextProvider";

const Favorite = () => {
  const { favorite, getFavorite, deleteProdInFavorite } = useFavorite();

  React.useEffect(() => {
    getFavorite();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {favorite?.products.length > 0 ? (
        <>
          {favorite.products.map((elem) => (
            <div style={{ margin: "20px", textAlign: "center" }}>
              <div>
                <div>
                  <img src={elem.item.img} width="240" height="350" alt="" />
                </div>
                <div>
                  <h4>{elem.item.title}</h4>
                  <p>{elem.item.author}</p>
                  <IconButton
                    style={{ fontSize: "16px" }}
                    onClick={() => deleteProdInFavorite(elem.item.id)}
                  >
                    <DeleteIcon /> Удалить из избранного
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default Favorite;
