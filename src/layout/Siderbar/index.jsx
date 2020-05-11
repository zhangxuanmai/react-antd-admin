import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from './index.module.css'

const { Sider } = Layout
const { SubMenu } = Menu

// menu-item
const createMenuItem = routes => {
  return routes.map(route => {
    const { icon, path, routes, redirect, title, hidden, linkPath } = route

    if (!path || redirect || hidden || linkPath) return null
    if (routes) {
      return (
        <SubMenu
          key={path}
          title={icon ? (
            <span>
              <route.icon />
              <span>{title}</span>
            </span>) : (<span>{title}</span>)
          }
        >
          {createMenuItem(routes)}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={path}>
        {icon ? <route.icon /> : null}
        <Link to={path}>{title}</Link>
      </Menu.Item>
    )
  })
}

// menu
function Siderbar(props) {
  const { routes, defaultOpenKeys, selectedKeys } = props
  const siderProps = {
    className: "layout-sider",
    breakpoint: "lg",
    collapsedWidth: "0",
    width: "256",
  }

  return (
    <Sider {...siderProps}>
      <div className={style.title}>
        <img className={style.logo} src={require('../../assets/logo.svg')} alt="logo" />
        <span>Deer Design Pro</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={selectedKeys}
      >
        {routes && createMenuItem(routes)}
      </Menu>
    </Sider>
  )
}

// propTypes
Siderbar.propTypes = {
  routes: PropTypes.array,
  defaultOpenKeys: PropTypes.array,
  selectedKeys: PropTypes.array,
};

// defaultProps
Siderbar.defaultProps = {
  routes: [],
  defaultOpenKeys: [],
  selectedKeys: [],
};

export default Siderbar
