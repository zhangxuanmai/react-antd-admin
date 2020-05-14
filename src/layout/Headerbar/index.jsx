import React from 'react'
import { Layout, Menu, Dropdown, Avatar, Badge, } from 'antd'
import { PoweroffOutlined, UserOutlined, BellOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import style from './index.module.css'
import FullScreen from '../../components/FullScreen/index';

const { Header } = Layout

function Headerbar({ handleLogout }) {
  const menu = (
    <Menu style={{ width: 156 }}>
      <Menu.Item onClick={handleLogout}>
        <PoweroffOutlined />
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className={style.header}>
      <div className={style.block}>
        <FullScreen />
      </div>
      <div className={style.block}>
        <Badge dot>
          <BellOutlined />
        </Badge>
      </div>
      <Dropdown className={style.block} placement="bottomRight" overlay={menu}>
        <span>
          <Avatar style={{ marginRight: 8 }} size="small" icon={<UserOutlined />} />
          <span>Administrator</span>
        </span>
      </Dropdown>
    </Header>
  )
}

// propTypes
Headerbar.propTypes = {
  handleLogout: PropTypes.func,
};

// defaultProps
Headerbar.defaultProps = {
  handleLogout: () => console.log('log out'),
};

export default Headerbar
