const express = require('express');
const app = express();




app.get('/projeto', (req, res) => {
  console.log('ok server');
  return res.status(200).json({mensagem:"seu codigo chegou aqui"})
});

app.listen(3001,  () =>( "server on"));