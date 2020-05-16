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
  default:
    return state;
  }
};