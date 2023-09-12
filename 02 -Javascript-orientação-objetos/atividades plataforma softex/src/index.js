const express = require('express');
const app = express();
var porta = 3000;

app.listen(porta);

app.get('projects', (req, res) => {
  console.log('ok server');
  return response.send('hellou word');
});