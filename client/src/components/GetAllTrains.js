import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function GetAllTrains() {
  const [trainList, setTrainList] = useState([]);

  useEffect(() => {

    // this is fetching data from my own server

    axios.get('http://localhost:8080/getAllTrains')
      .then(response => {
        setTrainList(response.data);
      })
      .catch(error => {
        console.error('Error is:', error);
      });


  }, []);

  return (


    <div className="container mt-4">

      <h1 className="mb-5">List of Trains arriving within 12 hours.</h1>

      <div className="row">
        {trainList.map(train => (
          <div key={train.trainNumber} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">{train.trainName}</h2>
                <p className="card-text">Train Number: {train.trainNumber}</p>
                <p className="card-text">
                  Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}
                </p>
                <p className="card-text">
                  Seats Available (Sleeper): {train.seatsAvailable.sleeper}
                </p>
                <p className="card-text">
                  Seats Available (AC): {train.seatsAvailable.AC}
                </p>
                <p className="card-text">Price (Sleeper): {train.price.sleeper}</p>
                <p className="card-text">Price (AC): {train.price.AC}</p>
                <p className="card-text">Delayed By: {train.delayedBy} minutes</p>
                <Link to={`./train/${train.trainNumber}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllTrains;
