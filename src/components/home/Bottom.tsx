import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
import { useLocation, useNavigate} from "react-router-dom";
import { TabBar } from "antd-mobile";

function Bottom () {
  const navigate = useNavigate();
  const location = useLocation()
  const { pathname } = location

  const changePath = (path: string) => {
    navigate(path);
  }

  const tabs = [
    {
      key: '/home',
      title: '홈',
      icon: <AppOutline />,
    },
    {
      key: '/shop',
      title: '내 근처',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/order-history',
      title: '이용내역',
      icon: <MessageOutline />,
    },
    {
      key: '/my-page',
      title: '마이페이지',
      icon: <UserOutline />,
    },
  ]

  return (
    <>
      <TabBar
        activeKey={pathname}
        onChange={path => changePath(path)}
        style={{ position: "fixed", bottom: 0, width: "100%", borderTop: "1px solid black", height: "50px", paddingTop: "10px"
        }}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  )
}

export default Bottom;
