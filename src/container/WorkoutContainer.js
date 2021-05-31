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
      <div className="text-center">
        Date :
        {date.toString()}
      </div>
      <Workouts />
    </div>
  );
};

export default WorkoutContainer;
