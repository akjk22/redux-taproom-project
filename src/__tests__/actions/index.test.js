import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });
  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({id: 1, name: 'Hefeweizen', brand: 'Widmer', price: '$140', alcohol: '5%', count: 124})).toEqual({
      type: c.ADD_KEG,
      id: 1,
      name: 'Hefeweizen',
      brand: 'Widmer',
      price: '$140',
      alcohol: '5%',
      count: 124
    });
  });
});