import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import store from '../redux/store';

describe('Footer component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Footer /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
