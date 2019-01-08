// TODO - create client object for Google API connection which can be exported


  // Create client with a Promise constructor
  const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo',
    Promise: Promise // 'Promise' is the native constructor.
  });

  module.exports = googleMapsClient;
