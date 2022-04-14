import "./App.css";
import Toastify from "./component/Toastify/Toastify";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import Comment from "./contexts/Comment";
import FavoriteContextProvider from "./contexts/FavoriteContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <Comment>
      <AuthContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <Toastify />
              <MyRoutes />
            </ProductContextProvider>
          </CartContextProvider>
        </FavoriteContextProvider>
      </AuthContextProvider>
    </Comment>
  );
}

export default App;
