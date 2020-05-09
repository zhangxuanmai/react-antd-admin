import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  loginStatus: JSON.parse(localStorage.getItem('deer-design-pro-loginStatus') || `false`),
})

export default (state = defaultState, action) => {
  const { type, payload } = action

  if (payload !== undefined) {
    localStorage.setItem('deer-design-pro-loginStatus', JSON.stringify(payload))
  }

  switch (type) {
    case constants.LOGIN:
      return state.merge({
        loginStatus: payload,
      })
    case constants.LOGOUT:
      return state.set('loginStatus', payload);
    default:
      return state
  }
}