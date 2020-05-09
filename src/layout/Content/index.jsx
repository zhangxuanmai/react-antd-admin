import React, { useMemo } from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { Spin, Layout } from 'antd'
import { createBasicRoutes } from '../../router'
import style from './index.module.css'
import './transiton.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const { Content } = Layout

function ContentComponent(props) {
  const { routes } = props
  const loading = (
    <div className={style.loading}>
      <Spin tip="Loading..." />
    </div>
  )

  const key = useMemo((params) => {
    console.log(props.location.key);
    return props.location.key
  }, [props.location.key])

  return (
    <SwitchTransition>
      <CSSTransition
        key={key}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='fade'
      // classNames={{
      //   appear: 'animate__animated animate__fadeInLeft',
      //   appearActive: 'animate__animated animate__fadeInLeft',
      //   appearDone: 'animate__animated animate__fadeInLeft',
      // enter: 'animate__animated animate__fadeInLeft',
      // enterActive: 'animate__animated animate__fadeInLeft',
      //   enterDone: 'animate__animated animate__fadeInLeft',
      // exit: 'animate__animated animate__fadeOutRight',
      // exitActive: 'animate__animated animate__fadeOutRight',
      //   exitDone: 'animate__animated animate__fadeOutRight',
      // }}
      >
        <Content className={style.content}>
          <React.Suspense fallback={null}>
            <Switch>
              {createBasicRoutes(routes)}
            </Switch>
          </React.Suspense>
        </Content>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default withRouter(ContentComponent)
