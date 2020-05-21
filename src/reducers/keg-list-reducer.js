import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, name, brand, price, alcohol, count } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        id: id,
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        count: count
      }
    });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  }
};