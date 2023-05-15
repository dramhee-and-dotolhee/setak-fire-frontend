import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {Button} from "antd";
import {Link} from "react-router-dom";

function NavBar () {
  return (
    <>
      <Link to = "home">
        <Button><AppOutline/></Button>
      </Link>

      <Link to = "shop">
      <Button>내 근처</Button>
      </Link>

      <Link to = "order-history">
        <Button>이용내역</Button>
      </Link>

      <Link to = "my-page">
        <Button>마이페이지</Button>
      </Link>
    </>
  )
}

export default NavBar;
