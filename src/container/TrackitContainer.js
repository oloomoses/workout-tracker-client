import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { trackIts } from '../redux/actions';

const TrackitContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(trackIts(id));
  }, []);

  return (
    <div>
      <h3>Tracked Items</h3>
    </div>
  );
};

export default TrackitContainer;
