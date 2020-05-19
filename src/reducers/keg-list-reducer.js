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
    case c.SELECT_KEG:
      const newState = { ...state };
      return newState[id];
    case c.EDIT_KEG:
      const newState = { ...state };
      return newState;
    // case c.DECREMENT_COUNT:
    // let newPintState = { ... state };
    // // newPintState = {
    // //   newPintState.id: id,
    // //   name: name,
    // //   brand: brand,
    // //   price: price,
    // //   alcohol: alcohol,
    // //   count: count - 1
    // // }
    // newPintState.id = id;
    // newPintState.name = name;
    // newPintState.brand = brand;
    // newPintState.price = price;
    // newPintState.alcohol = alcohol;
    // newPintState.count = count - 1;

    // return newPintState;
  default:
    return state;
  }
};