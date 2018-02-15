const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send({antonio: 'montana'});
  res.end(JSON.stringify({antonio: 'montana'}));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server running on ', PORT);
});
