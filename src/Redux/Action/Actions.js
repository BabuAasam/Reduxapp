import {ADD_ITEM, REMOVE_ITEM} from '../ActionTypes';

export const addItemtoCart = data => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeItemfromCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});
