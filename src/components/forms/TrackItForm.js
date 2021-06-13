import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { postTrackIt } from '../../redux/actions';

const TrackItForm = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState();
  const [calories, setCalories] = useState();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      calories,
      minutes_recorded: time,
    };
    dispatch(postTrackIt(id, formData));
  };

  return (
    <Container fluid>

      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Recorded Time in minutes</Form.Label>
              <Form.Control type="number" placeholder="Enter minutes recorded" name="username" required onChange={(e) => setTime(e.target.value)} />
              <small id="emailHelp" className="form-text text-muted">Time in minutes</small>
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Calories in kcals</Form.Label>
              <Form.Control type="number" placeholder="Enter kcals burned" required onChange={(e) => setCalories(e.target.value)} />
              <small id="emailHelp" className="form-text text-muted">Calories in kcals</small>
            </Form.Group>
          </div>
        </div>

        <Form.Group className="text-center">
          <Button variant="primary" type="submit" className="">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TrackItForm;
