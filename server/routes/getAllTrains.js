const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {




    // this is the post request to access the token for making another post request
    const authResponse = await axios.post("http://104.211.219.98/train/auth", {
      CompanyName: "Train Central",
      clientID: "a8100fef-62f6-4902-b4d8-c1e3c5d8c192",
      ownerName: "Mouzzam",
      ownerEmail: "mouzzamdanishh@gmail.com",
      rollNo: "R_20EJ079",
      clientSecret: "eKKokJNwUaqKCBRx",
    });





    const { access_token } = authResponse.data;

    // this is the get request to access all the trains from the provided server by you
    const trainsResponse = await axios.get(
      "http://104.211.219.98/train/trains",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );




    //filter the response data here
    const currentTime = new Date();
    const twelveHoursFromNow = new Date();
    twelveHoursFromNow.setHours(currentTime.getHours() + 12);

    const filteredTrains = trainsResponse.data.filter((train) => {
      const departureTime = new Date();


      departureTime.setHours(train.departureTime.Hours);
      departureTime.setMinutes(train.departureTime.Minutes);
      departureTime.setSeconds(train.departureTime.Seconds);

      //here we are making the difference of time 

      const timeDifference = departureTime.getTime() - currentTime.getTime();
      const isWithinNext12Hours =
        timeDifference <= twelveHoursFromNow && timeDifference > 0;
      const isNotWithinNext30Minutes = timeDifference > 30 * 60 * 1000;

      return isWithinNext12Hours && isNotWithinNext30Minutes;
    });

    // sending the response to the client 
    res.json(filteredTrains);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "something somewhere is internal error" });
  }
});

module.exports = router;
