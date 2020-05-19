import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({id: 1, name: 'Hefeweizen', brand: 'Widmer', price: '$140', alcohol: '5%', count: 124})).toEqual({
      type: 'ADD_KEG',
      id: 1,
      name: 'Hefeweizen',
      brand: 'Widmer',
      price: '$140',
      alcohol: '5%',
      count: 124
    });
  });
});