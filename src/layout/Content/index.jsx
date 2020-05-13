import React, { useMemo } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { createBasicRoutes } from '../../router'
// import style from './index.module.css'

const { Content } = Layout

const findTitle = (routes, path) => {
  const arr = routes.map(item => {
    if (item.path === path) {
      return item
    }
    if (item.routes) {
      return findTitle(item.routes, path)
    }
  })
  return arr.find(i => i)
}



function ContentComponent(props) {
  const { routes, location } = props

  const key = useMemo(() => {
    return location.pathname
  }, [location])

  const breadcrumb = useMemo(() => {
    return findTitle(routes, location.pathname)
  }, [location.pathname, routes])

  return (
    <Content>
      <TransitionGroup>
        <CSSTransition
          key={key}
          classNames={{
            exit: "animate__animated animate__fadeOut",
            exitActive: "animate__animated animate__fadeOut",
            enter: "animate__animated animate__fadeIn",
            enterActive: "animate__animated animate__fadeIn",
          }}
          timeout={600}
        >
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, left: 0, margin: 24 }}>
              {/* {JSON.stringify(breadcrumb)} */}
              <Breadcrumb style={{ marginBottom: 24 }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">{breadcrumb.breadcrumbName}</a>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Switch location={location}>
                {createBasicRoutes(routes)}
              </Switch>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  )
}

export default withRouter(ContentComponent)
