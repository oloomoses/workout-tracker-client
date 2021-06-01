import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from './Spinner';

const Workouts = () => {
  const loading = useSelector((state) => state.workout.loading);
  const workouts = useSelector((state) => state.workout.workouts);
  if (loading) {
    return <Spinner />;
  }

  return (
    <Container fluid>
      <div className="workouts-wrapper">
        { workouts.map((workout) => (
          <Card key={workout.id} className="workout-card-layout">
            <a href={`/workouts/${workout.id}`}>
              <div className="d-flex justify-content-between">
                <div><FontAwesomeIcon icon={workout.icon} size="4x" /></div>

                <div>
                  <div>{workout.name}</div>
                  <div className="trackIt-count text-center">13</div>
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Workouts;
