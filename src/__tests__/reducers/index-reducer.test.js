import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';
import selectedKegReducer from '../../reducers/keg-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      id: 1,
      name: 'Hefeweizen',
      brand: 'Widmer',
      price: '$140',
      alcohol: '5%',
      count: 124,
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
// new

  test('Check that initial state of editKegReducer matches root reducer', () => {
    const action = {
      type: c.EDIT_KEG
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editKegReducer(undefined, action));
  });


});

