const express = require('express');
const cors = require('cors');
const countries = require('./countries.js');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.json(' List of Countries I Wish to Visit! ')
} );
// GET ALL COUNTIRES
app.get('/api/countries', (req, res) => {
    res.json(countries)
});
// POST A COUNTRY
app.post('/api/countries', (req, res) => {
  const newCountry = req.body;

  // Validate if the required fields are present in the request body
  if (!newCountry || !newCountry.name) {
    return res.status(400).send('Invalid country data');
  }

  // Check if the country already exists in the array
  const existingCountry = countries.find(country => country.name === newCountry.name);
  if (existingCountry) {
    return res.status(400).send('Country already exists');
  }

  // Add the new country to the array
  countries.push(newCountry);

  // Send a response indicating the successful addition
  res.send(`Added country: ${newCountry.name}`);
});



app.listen(PORT, () => {
    console.log(`This PORT is Firing from http://localhost:${PORT}`)
});

