const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 




app.use(bodyParser.json());

app.post('train/register', (req, res) => {

    const { name, email, password } = req.body;

    const response = {
      message: 'User registered successfully',
      user: {
        name,
        email,
      },
    };
  
    res.json(response);
  });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});