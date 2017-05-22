import {UNKNOWN_SUBSTANCE, DEFAULT_STEP, DEFAULT_TEMP} from '../Constants';

let nextSubstanceId = 1;

/*
 * Actions
 */
export const ADD_SUBSTANCE = 'ADD_SUBSTANCE';
export const INCREASE_TEMP = 'INCREASE_TEMP';
export const CHANGE_STEP = 'CHANGE_STEP';
export const DECREASE_TEMP = 'DECREASE_TEMP';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * Other Constants
 */
export const VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SOLID: 'SHOW_SOLID',
  SHOW_LIQUID: 'SHOW_LIQUID',
  SHOW_GAS: 'SHOW_GAS'
};

/*
 * Action Creators
 */
export const addSubstance = (name = UNKNOWN_SUBSTANCE, currentTemp = DEFAULT_TEMP, step = DEFAULT_STEP) => {
  return {
    type: ADD_SUBSTANCE,
    name,
    currentTemp,
    step,
    id: nextSubstanceId++
  }
}

export const incTemp = (id, increment = DEFAULT_STEP) => {
  return {
    type: INCREASE_TEMP,
    increment: isNaN(increment)
      ? DEFAULT_STEP
      : increment,
    id
  }
}

export const decTemp = (id, decrement = DEFAULT_STEP) => {
  return {
    type: DECREASE_TEMP,
    decrement: isNaN(decrement)
      ? DEFAULT_STEP
      : decrement,
    id
  }
}

export const setVisibilityFilter = (filter = VISIBILITY_FILTERS.SHOW_ALL) => {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export const changeStep = (id, step = DEFAULT_STEP) => {
  return {type: CHANGE_STEP, id, step}
}
