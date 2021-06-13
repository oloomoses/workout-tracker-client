import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  const token = useSelector((state) => state.signup.token);

  if (!token) {
    return null;
  }
  return (
    <div className="fixed-bottom footer-custom">
      <Container fluid>
        <div className="d-flex justify-content-between mt-2">
          <Link to="/workouts" className="d-flex flex-column align-items-center">

            <FontAwesomeIcon icon="chart-bar" size="2x" color="white" />
            <div className="footer-text">Workouts</div>

          </Link>

          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon="bolt" size="2x" color="white" />
            <>TrackIts</>
          </div>

          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon="chart-pie" color="white" size="2x" />
            <>Progress</>
          </div>

          <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon="ellipsis-h" color="white" size="2x" />
            <>More</>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
