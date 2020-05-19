import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('kegListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });



//for adding keg
  let action;
  const kegData = {
    id: 1,
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcohol: '5%',
    count: 124,
  };

  test('Should successfully add new keg data to masterKegList', () => {
    const { id, name, brand, price, alcohol, count } = kegData;
    action = {
      type: c.ADD_KEG,
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

//for deleting keg
const currentState = {
  1: { id: 1,
    name: 'Hefeweizen',
    brand: 'Widmer',
    price: '$140',
    alcohol: '5%',
    count: 124 },
  2: { id: 2,
    name: 'A Little Sumpin Sumpin',
    brand: 'Lagunitas',
    price: '$160',
    alcohol: '7.5%',
    count: 124 }
}

test('Should successfully delete a keg', () => {
  action = {
    type: c.DELETE_KEG,
    id: 1
  };
  expect(kegListReducer(currentState, action)).toEqual({
    2: {id: 2,
      name: 'A Little Sumpin Sumpin',
      brand: 'Lagunitas',
      price: '$160',
      alcohol: '7.5%',
      count: 124}
  });
});
// for decrementing pint
const currentPintState = {
  2: { id: 2,
    name: 'A Little Sumpin Sumpin',
    brand: 'Lagunitas',
    price: '$160',
    alcohol: '7.5%',
    count: 124 }
}
// test('Should successfully decrement pint', () => {
//   action = {
//     type: c.DECREMENT_COUNT,
//     id: 2,
//     name: 'A Little Sumpin Sumpin',
//     brand: 'Lagunitas',
//     price: '$160',
//     alcohol: '7.5%',
//     count: 124
//   };

//   expect(kegListReducer(currentPintState, action)).toEqual({
//     2: { 
//       id: 2,
//       name: 'A Little Sumpin Sumpin',
//       brand: 'Lagunitas',
//       price: '$160',
//       alcohol: '7.5%',
//       count: 123 }
//   });
// });



});




