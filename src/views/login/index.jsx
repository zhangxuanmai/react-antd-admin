import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { actionCreators } from '../../store/login'
import logo from '../../assets/logo.svg'
import style from "./index.module.css"

function Login(props) {
  const { loginStatus } = props
  const [form] = Form.useForm()
  const [initialValues, setInitialValues] = useState({})

  const handleFormFinish = (values) => {
    const { remember } = values

    if (remember) {
      localStorage.setItem('deer-design-pro-loginInfomation', JSON.stringify(values))
    } else {
      localStorage.removeItem('deer-design-pro-loginInfomation')
    }

    // props.login(values)
    props.history.push({
      pathname: '/admin'
    })
  }

  useEffect(() => {
    const loginInfomation = localStorage.getItem('deer-design-pro-loginInfomation')
    loginInfomation && form && form.setFieldsValue(JSON.parse(loginInfomation))
  }, [form])

  const login = (
    <div className={style.loginWrapper} >
      <section className={style.main}>
        <div className={style.slogan}>
          <img className={style.logo} src={logo} alt="logo" />
          <span className="slogan-text">Deer Design Pro</span>
        </div>
        <Form
          form={form}
          className={style.form}
          name="basic"
          initialValues={initialValues}
          onFinish={handleFormFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Please enter your login account!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="login account" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your login password' }]}>
            <Input
              type="password"
              placeholder="login password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">Log in</Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  )

  const admin = (
    <Redirect to="/admin" />
  )

  // return loginStatus ? admin : login
  return login
}


export default connect((state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}, (dispatch) => {
  return {
    login: bindActionCreators(actionCreators.loginAction, dispatch)
  }
})(Login)
