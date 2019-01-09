/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const client = require('./google_api.js');
const config = require('./config.js');

//console.log(config);
//console.log(googleMapsClient);
const place_input = process.argv[2];

client.findPlace({input: process.argv[2], inputtype: 'textquery'}).asPromise()
  .then((response) => {
    //const {candidates}  = response.json;
    const placeid = candidates[0].place_id
    //console.log(place_id);

    client.place({placeid}).asPromise().then((response)) => {
        const {lat, lng} = response.json.result.gemoetry.location
        console.log(`${process.argv[2]} is located at coordinates ${lat}, ${lng}, at the address ${response.json.result.formatted_address}.`)
    }).catch(err => {
        console.log(err)
    })
  })
  .catch((err) => {
    console.log(err);
  });