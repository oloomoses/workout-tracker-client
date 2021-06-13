import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TrackItCollapse from '../components/forms/TrackItCollapse';
import TrackIts from '../components/TrackIts';
import { trackIts } from '../redux/actions';

const TrackitContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(trackIts(id));
  }, []);

  return (
    <div>
      <TrackItCollapse />
      <TrackIts />
    </div>
  );
};

export default TrackitContainer;
