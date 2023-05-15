import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import OrderHistory from "./components/orderHistory/OrderHistory";
import MyPage from "./components/user/myPage/MyPage";
import Shop from "./components/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
      {
        path: "my-page",
        element: <MyPage />,
      },
    ]
  }
]);

export default router;
