import { Button } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { notify } from "../component/Toastify/Toastify";
import { Box } from "@mui/system";
import "./Bank.css";

const handle = () => {
  notify("success", "Благодарим за покупку");
};

const handleClick = () => {
  if (
    this.state.cvc.trim() !== "" &&
    this.state.name.trim() !== "" &&
    this.state.number.trim() !== "" &&
    this.state.expiry.trim() !== ""
  ) {
    alert("error");
    return;
  } else {
    alert("error");
  }
};

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="bankCard">
          <span>Пожалуйста заполните все данные</span>
        </div>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form style={{ textAlign: "center" }} onSubmit={handleClick}>
            <input
              style={{ margin: "5px 0" }}
              type="number"
              name="number"
              placeholder="Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              style={{ margin: "5px 0" }}
              type="name"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />

            <input
              style={{ margin: "5px 0" }}
              type="expiry"
              name="expiry"
              placeholder="Valid num"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              style={{ margin: "5px 0" }}
              type="cvc"
              name="cvc"
              placeholder="CvC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              component={Link}
              to="/"
              onClick={handle}
              sx={{ my: 1 }}
            >
              Оплатить
            </Button>
          </form>
        </div>
      </Box>
    );
  }
}
