const express = require('express');
const getAllTrainsRouter = require('./routes/getAllTrains');
const getTrainDetailsRouter = require('./routes/getTrainDetails');
const cors = require('cors');


const app = express();
app.use(cors());

// all routes
app.use('/getAllTrains', getAllTrainsRouter);

app.use('/getTrainDetails', getTrainDetailsRouter);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
