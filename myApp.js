
const express = require('express');
const app = express();

function parseDate(parameter) {
  let response
  if (parameter === undefined) {
    const now = new Date()
    response = { unix: now.getTime(), utc: now.toUTCString() }
  } else {
    const unixTimestamp = Number.parseInt(parameter)
    if (unixTimestamp == parameter) {
      parameter = unixTimestamp
    }
    const now = new Date(parameter)
    if (now === 'Invalid Date') {
      response = { unix: null, utc: 'Invalid Date' }
    } else {
      response = { unix: now.getTime(), utc: now.toUTCString() }
    }
  }
  return response
}

app.get('/api/timestamp/:date_string?', (req, res) =>
  res.json(parseDate(req.params.date_string))
)

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
