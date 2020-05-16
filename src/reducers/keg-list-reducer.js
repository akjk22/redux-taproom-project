export default (state = {}, action) => {
  const { id, name, brand, price, alcohol, count } = action;
  switch (action.type) {
  case 'ADD_KEG':
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
    case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
    case 'DECREMENT_COUNT':
    let newPintState = { ... state };
    // newPintState = {
    //   newPintState.id: id,
    //   name: name,
    //   brand: brand,
    //   price: price,
    //   alcohol: alcohol,
    //   count: count - 1
    // }
    newPintState.id = id;
    newPintState.name = name;
    newPintState.brand = brand;
    newPintState.price = price;
    newPintState.alcohol = alcohol;
    newPintState.count = count - 1;

    return newPintState;
  default:
    return state;
  }
};