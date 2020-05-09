import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const TransitionLayout = (props) => {
  if (props.loginStatus) {
    return <Redirect to="/admin" />
  }
  return <Redirect to="/login" />
}

export default connect((state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}, null)(TransitionLayout)
