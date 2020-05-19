export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { id, name, brand, price, alcohol, count } = keg;
  return {
    type: 'ADD_KEG',
    id: id,
    names: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    count: count
  }
}