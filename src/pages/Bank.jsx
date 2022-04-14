import { Button } from "@mui/material";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../component/Toastify/Toastify";
import { Box } from "@mui/system";
import "./Bank.css";
const PaymentForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleClick = () => {
    if (
      state.cvc.trim() !== "" &&
      state.expiry.trim() !== "" &&
      state.focus.trim() !== "" &&
      state.name.trim() !== "" &&
      state.number.trim() !== ""
    ) {
      notify("success", "Оплата прошла успешно!");
      navigate("/");
    } else {
      notify("error", "Заполните поля!");
      return;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="bankCard">
        <span>Пожалуйста заполните все данные</span>
      </div>
      <div id="PaymentForm">
        <Cards
          cvc={state.cvc}
          expiry={state.expiry}
          focused={state.focus}
          name={state.name}
          number={state.number}
        />
        <form style={{ textAlign: "center" }}>
          <input
            style={{ margin: "5px 0" }}
            type="text"
            name="number"
            placeholder="Number"
            onChange={(e) => handleInputChange(e)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <br />
          <input
            style={{ margin: "5px 0" }}
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <br />

          <input
            style={{ margin: "5px 0" }}
            type="expiry"
            name="expiry"
            placeholder="Valid num"
            onChange={(e) => handleInputChange(e)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <br />
          <input
            style={{ margin: "5px 0" }}
            type="cvc"
            name="cvc"
            placeholder="CvC"
            onChange={(e) => handleInputChange(e)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <br />
          <Button
            variant="contained"
            onClick={() => handleClick()}
            sx={{ my: 1 }}
          >
            Оплатить
          </Button>
        </form>
      </div>
    </Box>
  );
};
export default PaymentForm;

// Erbol Nurmanbetov, [14.04.2022 13:36]
// import { Button, IconButton } from "@mui/material";
// import { render } from "@testing-library/react";
// // import { render } from "@testing-library/react";
// import React, { useState } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
// // import PaymentsIcon from "@mui/icons-material/Payments";
// import { Navigate, NavLink, useNavigate } from "react-router-dom";
// // import Toastify from "../components/Toastify/Toastify";
// import { notify } from "../components/Toastify/Toastify";

// const Credit = () => {
//   const [state, setState] = useState({
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   });
//   const navigate = useNavigate();

//   const handleInputFocus = (e) => {
//     setState({ ...state, focus: e.target.name });
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setState({ ...state, [name]: value });
//   };

//   const handleClick = () => {
//     if (
//       state.cvc.trim() !== "" &&
//       state.expiry.trim() !== "" &&
//       state.focus.trim() !== "" &&
//       state.name.trim() !== "" &&
//       state.number.trim() !== ""
//     ) {
//       notify("success", "Оплата прошла успешно!");
//       navigate("/");
//     } else {
//       notify("error", "Заполните поля!");
//     }
//   };
//   return (
//     <div id="PaymentForm" className="credit-card credit-img">
//       <Cards
//         cvc={state.cvc}
//         expiry={state.expiry}
//         focused={state.focus}
//         name={state.name}
//         number={state.number}
//       />
//       <form>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Card Number"
//           onChange={(e) => handleInputChange(e)}
//           onFocus={(e) => handleInputFocus(e)}
//           className="card-inp"
//         />

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           onChange={(e) => handleInputChange(e)}
//           onFocus={(e) => handleInputFocus(e)}
//           className="card-inp"
//         />

//         <input
//           type="tel"
//           name="expiry"
//           placeholder="MM/YY EXPIRY"
//           onChange={(e) => handleInputChange(e)}
//           onFocus={(e) => handleInputFocus(e)}
//           className="card-inp"
//         />
//         <input
//           type="tel"
//           name="cvc"
//           placeholder="CVC"
//           onChange={(e) => handleInputChange(e)}
//           onFocus={(e) => handleInputFocus(e)}
//           className="card-inp"
//         />
//         {/* <IconButton style={{ color: "green", fontSize: "20px" }}>
//               Pay
//             </IconButton> */}
//         <input
//           type="text"
//           placeholder="Delivery address"
//           className="card-inp"
//         />
//         <input type="tel" placeholder="Phone number" className="card-inp" />
//       </form>

//       {/* <NavLink to="/" style={{ textDecoration: "none" }}> */}
//       <Button
//         style={{
//           backgroundColor: "green",
//           color: "white",
//           fontSize: "100%",
//         }}
//         onClick={() => handleClick()}
//       >
//         Pay & Order
//       </Button>
//       {/* </NavLink> */}
//     </div>
//   );
// };

// export default Credit;
