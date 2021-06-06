import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import WorkoutContainer from '../container/WorkoutContainer';
import store from '../redux/store';

describe('WorkoutContainer component', () => {
  it('Matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><WorkoutContainer /></Provider>).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
