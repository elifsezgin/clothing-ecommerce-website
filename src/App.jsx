import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkCurrentUser } from "./store/user/userActions";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkCurrentUser());
}, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop /> } />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
