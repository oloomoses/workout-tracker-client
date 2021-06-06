import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Workouts from '../components/Workouts';
import store from '../redux/store';

describe('Workouts component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Workouts /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
