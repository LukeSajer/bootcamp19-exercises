/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const gmc = require('./google_api.js');
const config = require('./config.js');

//console.log(config);
//console.log(googleMapsClient);
const place_input = process.argv[2];

gmc.findPlace({input: process.argv[2], inputtype: 'textquery'}).asPromise()
  .then((response) => {
    const {candidates}  = response.json;
    const place_id = candidates[0].place_id;
    console.log(place_id);

    gmc.place({ placeid: place_id, con}).asPromise().then((response)) => {
        console.log('got here');
        
      //googleMapsClient.place({placeid: place_id}).asPromise().then((response) =>
      //console.log(response.json)
    
  })
  .catch((err) => {
    console.log(err);
  });


//import connection object from googleapi