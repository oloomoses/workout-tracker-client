import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import LoginContainer from '../container/LoginContainer';
import store from '../redux/store';

describe('LoginContainer component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><LoginContainer /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
