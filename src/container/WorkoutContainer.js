import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { workouts } from '../redux/actions';
import Workouts from '../components/Workouts';

const WorkoutContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(workouts());
  }, []);

  return (
    <div>
      <Workouts />
    </div>
  );
};

export default WorkoutContainer;
