import React, { useMemo } from "react";
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import classNames from 'classnames';
import style from "./index.module.css";

const { Header, Content, Footer, Sider } = Layout;

const Red = () => <div className={classNames(style.red)}>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
  <p>red</p>
</div>;
const Green = () => <div className={classNames(style.green)}>green</div>;
const Pink = () => <div className={classNames(style.pink)}>pink</div>;
const Blue = () => <div className={classNames(style.blue)}>blue</div>;

const Admin = ({ location }) => {
  const key = useMemo(() => {
    return location.pathname
  }, [location])

  const siderProps = {
    className: "layout-sider",
    breakpoint: "lg",
    collapsedWidth: "0",
    width: 260
  }

  return (
    <Layout>
      <Sider
        {...siderProps}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/admin/red">red</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/blue">blue</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/green">green</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/admin/pink">pink</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{
          background: '#fff',
          boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)'
        }} >123123</Header>
        <Content style={{
          position: "relative",
        }}>
          <TransitionGroup>
            <CSSTransition key={key} classNames={{
              exit: "animate__animated animate__fadeOutLeft",
              exitActive: "animate__animated animate__fadeOutLeft",
              enter: "animate__animated animate__fadeInRight",
              enterActive: "animate__animated animate__fadeInRight",
            }} timeout={800}>
              <div style={{
                // position: 'absolute',
                // left: 0,
                // right: 0,
                // top: 0,
                // bottom: 0,
                // margin: 24,
              }}>
                <Switch location={location}>
                  <Route path="/admin/red" component={Red} />
                  <Route path="/admin/green" component={Green} />
                  <Route path="/admin/blue" component={Blue} />
                  <Route path="/admin/pink" component={Pink} />
                  <Route render={() => <div className={classNames(style.content)}>Not Found</div>} />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin



