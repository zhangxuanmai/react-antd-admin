import React, { useMemo } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { createBasicRoutes } from '../../router'
// import style from './index.module.css'

const { Content } = Layout


function ContentComponent(props) {
  const { routes, location } = props

  const key = useMemo(() => {
    return location.pathname
  }, [location])

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
