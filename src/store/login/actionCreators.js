import * as constants from './constants'
import request from '../../utils/request'

export const logoutAction = () => ({
  type: constants.LOGOUT,
  payload: false
})

export const loginAction = (params) => {
  request.post('/login').then(res => {
    console.log('mock login:', res)
  })
  request.get('/api/login.json').then(res => {
    console.log('json login:', res)
  })
  return (dispatch) => {
    const action = {
      type: constants.LOGIN,
      payload: true
    }
    dispatch(action)
  }
}