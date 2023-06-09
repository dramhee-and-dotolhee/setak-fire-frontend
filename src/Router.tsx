import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home/Home";
import OrderHistory from "./components/orderHistory/OrderHistory";
import MyPage from "./components/user/myPage/MyPage";
import Shop from "./components/shop/Shop";
import Account from "./components/user/join/Account";
import CustomerInfo from "./components/user/join/CustomerInfo";
import PostCode from "./components/map/PostCode";
import PersonalMemo from "./components/user/join/PersonalMemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path:'0',
            element: <Account />
          },
          {
            path:'1',
            element: <CustomerInfo />
          },
          {
            path:'2',
            element: <PostCode />
          },
          {
            path:'3',
            element: <PersonalMemo />
          },
        ]
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
