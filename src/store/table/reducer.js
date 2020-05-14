import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  current: 1,
  initialValues: {},
})

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case constants['INITIAL_VALUES']:
      return state.merge({
        initialValues: fromJS(payload)
      })
    case constants['CURRENT_PAGE']:
      return state.merge({
        current: fromJS(payload)
      })
    default:
      return state
  }
}