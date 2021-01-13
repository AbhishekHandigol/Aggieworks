const express = require('express');
const app = express();

//creates a new array and a json object
let arr = [1, 2, 3, 4];
var j = '{"arr" : arr}';

//ROUTES

//posts it to the server
app.post('runningsum/', (req, res) => {
    //modifies the array
    var i;
    for (i = 1; i < arr.length; i++) {
        arr[i] += arr[i-1]; 
    }
    res.send(j);
});

//waits for server's response
app.listen(3000);




