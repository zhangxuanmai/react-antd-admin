import React from 'react'
import { Route, Redirect } from "react-router-dom"
import * as Icon from '@ant-design/icons';
import LoginPage from '../views/login';
import AdminPage from '../layout/index';
import MboxPage from '../views/mobx';
import LifeCycelPage from '../views/lifecycel';
import NotMatchPage from '../views/404';

import Dashboard from '../components/Dashboard';
import TableBasic from '../components/TableBasic';
import FormBasic from '../components/FormBasic';
import Descriptions from '../components/Descriptions';

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => {
        // pass the sub-routes down to keep nesting
        if (route.redirect) return (<Redirect to={route.redirect} />)
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
    component: LoginPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/admin',
    component: AdminPage,
    routes: [
      {
        path: '/admin',
        redirect: '/admin/home',
        exact: true,
      },
      {
        path: "/admin/home",
        title: "Dashboard",
        breadcrumbName: 'Dashboard',
        icon: Icon.DashboardOutlined,
        component: Dashboard,
      },
      {
        path: "/admin/examples",
        title: "Examples",
        breadcrumbName: 'Examples',
        icon: Icon.BarsOutlined,
        routes: [
          {
            path: "/admin/examples/table-list", // 路由路径
            breadcrumbName: 'Table',
            title: "Table",
            component: TableBasic,
          },
          {
            path: "/admin/examples/table-details",
            linkPath: "/admin/examples/table-list", // 将该侧栏和父级侧栏关联
            hidden: true, // 隐藏该项侧栏
            title: "Descriptions", // 侧栏标题
            component: Descriptions, // 显示内容
          },
          {
            path: "/admin/examples/form",
            breadcrumbName: 'Form',
            title: "Form",
            component: FormBasic,
          },
          {
            path: "/admin/examples/mobx",
            breadcrumbName: 'Mbox',
            title: "Mbox",
            component: MboxPage,
          },
          {
            path: "/admin/examples/lifecycel",
            breadcrumbName: 'LifeCycel',
            title: "LifeCycel",
            component: LifeCycelPage,
          },
        ]
      },
      {
        component: NotMatchPage
      }
    ]
  },
  {
    component: NotMatchPage
  }
]

export {
  RouteWithSubRoutes,
  createBasicRoutes,
  routes
}