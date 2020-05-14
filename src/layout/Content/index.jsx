import React, { useMemo } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { createBasicRoutes } from '../../router'
import style from './index.module.css'

const { Content } = Layout

function paths(routes, path) {
  let rts = []

  const findPath = (routes, path) => {
    let route = routes.find(item => {
      if (item.path === path) {
        return item.path === path
      } else {
        return findPath(item.routes || [], path)
      }
    })
    rts.push(route)
    return route
  }

  findPath(routes, path)
  return rts.reverse()
}

function ContentComponent(props) {
  const { routes, location } = props

  const key = useMemo(() => {
    return location.pathname
  }, [location])

  const breadcrumbs = useMemo(() => {
    return paths(routes, location.pathname)
  }, [location.pathname, routes])

  return (
    <Content className={style.content}>
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
          <div className={style.relative}>
            <div className={style.absolute}>
              <Breadcrumb style={{ marginBottom: 24 }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                {
                  breadcrumbs.map((item, i) => {
                    return (
                      <Breadcrumb.Item key={i}>
                        {item && item.breadcrumbName}
                      </Breadcrumb.Item>
                    )
                  })
                }
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

