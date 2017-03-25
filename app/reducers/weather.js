import { combineReducers } from 'redux';
import * as types from '../types';

const weatherReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return {
        ...action.data,
        ...state
      };
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
