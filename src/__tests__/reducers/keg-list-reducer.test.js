import kegListReducer from '../../reducers/keg-list-reducer';
import { v4 } from 'uuid';

describe('kegListReducer', () => {



  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });




  let action;
  const kegData = {
    id: v4(),
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcohol: '5%',
    count: 1,
  };

  test('Should successfully add new keg data to masterKegList', () => {
    const { id, name, brand, price, alcohol, count } = kegData;
    action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      count: count
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        id: id,
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        count: count
      }
    });
  });

});




