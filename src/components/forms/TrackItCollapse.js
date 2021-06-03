import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrackItForm from './TrackItForm';

const TrackItCollapse = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container fluid>
        <Button
          className="btn-rounded fixed-top ml-auto mt-4 mr-4"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <FontAwesomeIcon icon="plus" size="2x" />
        </Button>
      </Container>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <TrackItForm />
        </div>
      </Collapse>
    </div>
  );
};

export default TrackItCollapse;
