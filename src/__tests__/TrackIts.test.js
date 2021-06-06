import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TrackIts from '../components/TrackIts';
import store from '../redux/store';

describe('TrackIts component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><TrackIts /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
