import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function GetTrainDetails() {
  const { trainId } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    

    axios.get(`http://localhost:8080/getTrainDetails/${trainId}`)
      .then(response => {
        setTrainDetails(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });



  }, [trainId]);



  if (!trainDetails) {
    return <p className="card-text text-center mt-3">Loading train details...</p>;
  }



  return (
    <div className="container">

      <Link to="../../" className="btn btn-primary mb-3 mt-3">Go to Home</Link>


      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Train Details</h1>
          <h2>{trainDetails.trainName}</h2>
          <p>Train Number: {trainDetails.trainNumber}</p>
          <p>Departure Time: {trainDetails.departureTime.Hours}:{trainDetails.departureTime.Minutes}</p>
          <p>Seats Available (Sleeper): {trainDetails.seatsAvailable.sleeper}</p>
          <p>Seats Available (AC): {trainDetails.seatsAvailable.AC}</p>
          <p>Price (Sleeper): {trainDetails.price.sleeper}</p>
          <p>Price (AC): {trainDetails.price.AC}</p>
          <p>Delayed By: {trainDetails.delayedBy} minutes</p>
        </div>
      </div>

      
    </div>
  );
  


}

export default GetTrainDetails;
