import "./App.css";
import Toastify from "./component/Toastify/Toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <Toastify />
          <MyRoutes />
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
