const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:trainId', async (req, res) => {
  const trainId = req.params.trainId;

  try {
    // this is the get request to get the data from server provided you you
    const authResponse = await axios.post('http://104.211.219.98/train/auth', {
      CompanyName: 'Train Central',
      clientID: 'a8100fef-62f6-4902-b4d8-c1e3c5d8c192',
      ownerName: 'Mouzzam',
      ownerEmail: 'mouzzamdanishh@gmail.com',
      rollNo: 'R_20EJ079',
      clientSecret: 'eKKokJNwUaqKCBRx'
    });



    const { access_token } = authResponse.data;



    // this si anotgher get request to get the daa
    const trainResponse = await axios.get(`http://104.211.219.98/train/trains/${trainId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    // Send the response back to the client
    res.json(trainResponse.data);

  } catch (error) {
    res.status(500).json({ error: 'cannot find train' });
  }
});

module.exports = router;
