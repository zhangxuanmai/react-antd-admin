import React from 'react'
import { Switch } from 'react-router-dom'
import { BackTop, Spin, Layout } from 'antd'
import { createBasicRoutes } from '../../router'
import style from './index.module.css'

const { Content } = Layout

function ContentComponent({ routes }) {
  const loading = (
    <div className={style.loading}>
      <Spin tip="Loading..." />
    </div>
  )

  return (
    <Content className={style.content}>
      <React.Suspense fallback={loading}>
        <Switch>
          {createBasicRoutes(routes)}
        </Switch>
      </React.Suspense>
      <BackTop />
    </Content>
  )
}

export default ContentComponent
