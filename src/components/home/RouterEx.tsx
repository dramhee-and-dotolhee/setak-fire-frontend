import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

const Bottom = () => {
  const location = useLocation()
  const { pathname } = location

  const tabs = [
    {
      key: '/home',
      title: '홈',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '내 근처',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '이용내역',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '마이페이지',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

const RouterEx: FC = () => {
  return (
    <div>
      <div>
        <NavBar>물몸 다람쥐</NavBar>
      </div>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/message' element={<Message />} />
          <Route path='/me' element={<PersonalCenter />} />
        </Routes>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  )
}

function Home() {
  return <div>홈</div>
}

function Todo() {
  return <div>待办</div>
}

function Message() {
  return <div>消息</div>
}

function PersonalCenter() {
  return <div>我的</div>
}

export default RouterEx;
