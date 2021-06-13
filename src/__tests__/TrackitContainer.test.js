import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import TrackitContainer from '../container/TrackitContainer';
import store from '../redux/store';

describe('TrackitContainer component', () => {
  it('Containse TrackItCollapse', () => {
    const wrapper = shallow(<Provider store={store}><TrackitContainer /></Provider>);
    expect(wrapper.find('TrackItCollapse')).toBeTruthy();
  });

  it('Containse TrackIts', () => {
    const wrapper = shallow(<Provider store={store}><TrackitContainer /></Provider>);
    expect(wrapper.find('TrackIts')).toBeTruthy();
  });
});
