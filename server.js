'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');

const app         = express();
let bcrypt = require('bcrypt');

fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get("/", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, 12, (err, hash) => {
    console.log(hash);
    //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res); //true
    });
});


//END_ASYNC

//START_SYNC



//END_SYNC


// app.get("/", function (request, response) {
//     response.sendFile(__dirname + '/views/index.html');
// });
// let port = 3000;
// app.listen(port, () => {
//     console.log(`Your app is listening on port ${port}`);
// });
//
//
//
app.listen(process.env.PORT || 3000, () => {});

























app.listen(process.env.PORT || 3000, () => {});
