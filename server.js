const express = require('express');
const cors = require('cors');
const countries = require('./countries.js');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.json(' List of Countries I Wish to go! ')
} );
// GET ALL COUNTIRES
app.get('/allCountries', (req, res) => {
    res.json(countries)
})

app.listen(PORT, () => {
    console.log(`This PORT is Firing from http://localhost:5050`)
});

