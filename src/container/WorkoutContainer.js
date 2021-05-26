import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { workouts } from '../redux/actions';

const WorkoutContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(workouts());
  }, []);

  return (
    <div>
      <h3>Workouts</h3>
    </div>
  );
};

export default WorkoutContainer;
