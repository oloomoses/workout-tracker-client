import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import RPB from 'react-radial-progress-bar';
import Spinner from './Spinner';

const TrackIts = () => {
  const loading = useSelector((state) => state.trackIt.loading);
  const trackIts = useSelector((state) => state.trackIt.trackIts);
  if (loading) {
    return <Spinner />;
  }

  const toPercentage = (val, base) => {
    const toInt = parseInt(val, 10);
    const toP = (toInt / base) * 100;
    return toP.toString();
  };

  return (
    <div className="tracks-wrapper">
      { trackIts.map((track) => (
        <Card key={track.id} className="track-card-layout mt-3">
          <div className="d-flex justify-content-between align-items-center mx-3 my-2">
            <div className="d-flex align-items-center">

              <div className="mr-3">
                <RPB
                  size={70}
                  percentageCompleted={toPercentage(track.calories, 5000)}
                  fillColor="green"
                  backgroundColor="#d6dadc"
                />
              </div>

              <div>
                <div className="track-date">{ new Date(track.created_at).toDateString() }</div>
                <div className="track-calories">
                  Calories:
                  {' '}
                  {toPercentage(track.calories, 5000)}
                  .0%
                </div>
              </div>

            </div>
            <div>
              <div className="track-mins">
                {track.minutes_recorded}
                mins
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>

  );
};

export default TrackIts;
