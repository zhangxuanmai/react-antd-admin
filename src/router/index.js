import React, { lazy } from 'react'
import { Route, Redirect } from "react-router-dom"
import TransitionLayout from '../layout/TransitionLayout'
import UserLayout from '../layout/UserLayout'
import BasicLayout from '../layout/BasicLayout'
import NotLayout from '../views/404'
import * as Icon from '@ant-design/icons'


const RouteWithSubRoutes = route => {
  if (route.redirect) {
    return <Redirect to={route.redirect} />
  }
  return (
    <Route
      path={route.path}
      render={props => {
        return (<route.component {...props} routes={route.routes} />)
      }}
    />
  )
}

const createBasicRoutes = (routes = []) => {
  return routes.map((route, i) => {
    let _ = route.routes
    if (!_) return (<RouteWithSubRoutes key={i} {...route} />);
    return createBasicRoutes(_)
  })
}

const routes = [
  {
    path: '/',
    exact: true,
    component: TransitionLayout,
  },
  {
    path: '/login',
    component: UserLayout,
  },
  {
    path: '/admin',
    component: BasicLayout,
    routes: [
      {
        path: '/admin',
        redirect: '/admin/home',
        exact: true,
      },
      {
        path: "/admin/home",
        title: "Dashboard",
        icon: Icon.DashboardOutlined,
        component: lazy(() => import('../components/Dashboard')),
      },
      {
        path: "/admin/examples",
        title: "Examples",
        icon: Icon.BarsOutlined,
        routes: [
          {
            path: "/admin/examples/table-list", // 路由路径
            exact: true, // 严格匹配路由
            title: "Table",
            component: lazy(() => import('../components/TableBasic')),
          },
          {
            path: "/admin/examples/table-details",
            linkPath: "/admin/examples/table-list", // 将该侧栏和父级侧栏关联
            hidden: true, // 隐藏该项侧栏
            title: "Descriptions", // 侧栏标题
            component: lazy(() => import('../components/Descriptions')), // 显示内容
          },
          {
            path: "/admin/examples/form",
            title: "Form",
            component: lazy(() => import('../components/FormBasic')),
          },
        ]
      },
      {
        component: NotLayout
      }
    ]
  },
  {
    component: NotLayout
  }
];

export {
  RouteWithSubRoutes,
  createBasicRoutes,
  routes
}