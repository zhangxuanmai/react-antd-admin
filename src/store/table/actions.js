import * as constants from './constants'

export const initialValuesAction = (payload) => {
  return {
    type: constants['INITIAL_VALUES'],
    payload: payload
  }
}

export const currentAction = (payload) => {
  return {
    type: constants['CURRENT_PAGE'],
    payload: payload
  }
}