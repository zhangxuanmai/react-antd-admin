import React, { useMemo } from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import { Spin, Layout } from 'antd'
import { createBasicRoutes } from '../../router'
import style from './index.module.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const { Content } = Layout

const Red = () => (
  <div style={{ height: 400, background: 'red' }}>
    red
  </div>
);
const Yellow = () => (
  <div style={{ height: 400, background: 'yellow' }}>
    yellow
  </div>
);
const Green = () => (
  <div style={{ height: 400, background: 'green' }}>
    green
  </div>
);

function ContentComponent(props) {
  const { routes, location } = props
  const loading = (
    <div className={style.loading}>
      <Spin tip="Loading..." />
    </div>
  )

  return (
    <Content className={style.content}>
      <React.Suspense fallback={null}>

        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              {createBasicRoutes(routes)}
            </Switch>
          </CSSTransition>
        </TransitionGroup>

      </React.Suspense>
    </Content>
  )
}

export default withRouter(ContentComponent)
