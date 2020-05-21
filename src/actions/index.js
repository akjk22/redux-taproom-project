import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { id, name, brand, price, alcohol, count } = keg;
  return {
    type: c.ADD_KEG,
    id: id,
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    count: count
  }
}