import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Login from '../views/login'

const UserLayout = ({ loginStatus }) => {
  if (loginStatus) {
    return <Redirect to="/admin" />
  }
  return (<Login />)
}

export default connect((state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}, null)(UserLayout)
