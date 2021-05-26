import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const WorkoutContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <div>
      <h3>Workouts</h3>
    </div>
  );
};

export default WorkoutContainer;
