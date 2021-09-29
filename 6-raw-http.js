const https = require('https');
const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=32169b2fd90037874dc5d0a0e97de9ad&query=40,-75&units=f`

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });
  //?NOTE the on method is an event listener for the response. When we listen for 'data' the callback will be called everything a new data chunk is loaded in. We then concatinate that data chunk as a string onto the rest of the earlier data chunks

  response.on('end', () => {
    // console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
  //?NOTE here we listen for the 'end' event listener on the response, and the callback function is called when all data chunks have been loaded. We parse through our json string and convert it into a tangible JSON object that we can access the properties off of.

});

request.on('error', (error) => {
  console.log('An error has occured: ', error);
});

request.end()
//?NOTE by calling end on the return information from our http request it will tell node that we are done setting up our request and it'll actually fire it off