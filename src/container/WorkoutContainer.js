import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { workouts } from '../redux/actions';
import Workouts from '../components/Workouts';

const WorkoutContainer = () => {
  const dispatch = useDispatch();
  const date = new Date();

  useEffect(() => {
    dispatch(workouts());
  }, []);

  return (
    <div>
      <div className="text-center mt-3">
        <strong>{date.toDateString()}</strong>
      </div>
      <Workouts />
    </div>
  );
};

export default WorkoutContainer;
