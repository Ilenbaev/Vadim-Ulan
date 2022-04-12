import React, { useEffect } from "react";
import { useProductContext } from "../../../contexts/ProductContextProvider";
import Spinner from "../../Spinner/Spinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const List = () => {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (prod) => {
    // let answer = confirm("Действительно ли вы хотите удалить данный продукт?");
    let answer = true;

    if (answer) deleteProduct(prod);
  };

  return (
    <div>
      <h2>Admin List</h2>
      {products && products.length > 0 ? (
        <TableContainer component={Paper} style={{ marginTop: "100px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Название</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Автор
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="center">
                  Жанр
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Картинка
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Цена
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Опции
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.author}</TableCell>
                  <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="right">
                    <img width="40px" src={item.img} alt={item.title} />
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleDelete(item)}>
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`edit/${item.id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <hr />
          <Link to="/admin/add">
            <IconButton>
              <AddIcon fontSize="large" />
            </IconButton>
          </Link>
          <h3 style={{ marginBottom: "50px" }}>Добавить еще продукции</h3>
        </TableContainer>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default List;
