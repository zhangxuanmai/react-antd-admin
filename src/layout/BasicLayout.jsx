import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect, } from 'react-router-dom'
import { Layout } from 'antd'
import { actionCreators } from '../store/login'
import Siderbar from './Siderbar/Siderbar'
import Headerbar from './Headerbar/Headerbar'
import ContentComponent from './Content'
import FooterComponent from './Footer'

const createAllPathArr = (routes) => {
  let _ = []
  function findLinkPath(routes) {
    routes.forEach(route => {
      let path = route.path
      let linkPath = route.linkPath
      let routes = route.routes
      if (routes) {
        findLinkPath(routes)
      }
      _.push({ path, linkPath })
    })
    return _
  }
  return findLinkPath(routes)
}

function BasicLayout({ loginStatus, routes, logout, location }) {
  const pathAll = useMemo(() => {
    return createAllPathArr(routes)
  }, [routes])

  const selectedKeys = useMemo(() => {
    const i = pathAll.find(item => location.pathname === item.path)
    return i ? [i.linkPath || i.path] : ['']
  }, [location.pathname, pathAll])

  const defaultOpenKeys = useMemo(() => {
    return [selectedKeys[0].split('/').slice(0, -1).join('/')]
  }, [selectedKeys])

  const handleLogout = () => { logout() }

  if (loginStatus) {
    return (
      <Layout>
        <Siderbar routes={routes} defaultOpenKeys={defaultOpenKeys} selectedKeys={selectedKeys} />
        <Layout style={{ minHeight: '100vh' }}>
          <Headerbar handleLogout={handleLogout} />
          <ContentComponent routes={routes} />
          <FooterComponent />
        </Layout>
      </Layout>
    )
  }
  return <Redirect to="/login" />
}

function mapStateToProps(state) {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(actionCreators.logoutAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout)
