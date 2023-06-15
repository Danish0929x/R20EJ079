const express = require('express');
const getAllTrainsRouter = require('./routes/getAllTrains');
const getTrainDetailsRouter = require('./routes/getTrainDetails');

const app = express();

// Add middleware and other configurations

// Use the routes
app.use('/train/trains', getAllTrainsRouter);
app.use('/train/trains/:trainId', getTrainDetailsRouter);

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
