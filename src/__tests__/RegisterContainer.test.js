import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RegisterContainer from '../container/RegisterContainer';
import store from '../redux/store';

describe('RegisterContainer component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><RegisterContainer /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
