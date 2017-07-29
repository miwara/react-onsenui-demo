'use strict';
let express = require('express');

let app = express();
app.use(express.static('.'));

let port = 3000;
app.listen(port, () => {
  console.log('run server!\nhttp://localhost:3000');
});
