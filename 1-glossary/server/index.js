require("dotenv").config();
const express = require("express");
const path = require("path");
const { save, grabDictionary } = require('./db.js');

// const router = require('./routes.js');


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// app.use('/glossary', router)

app.post('/glossary', (req, res) => {
  // console.log(req.body);
  save(req.body)
  .then((result) => {
    res.send(result)
  })
  .catch((error) => {
    res.send(500, 'Error storing')
  })

})

app.get('/glossary', (req, res) => {
  grabDictionary()
  .then((result) => {
    res.send(result)
  })
  .catch((error) => {
    res.send(500, 'Could Not Grab')
  })
})

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
