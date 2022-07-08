const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('50.92.37.19', (error, data) => {
  if (error) {
    console.log('Couldn\'t get coordinates.', error);
  } else {
    console.log('Your coordinates are:', data);
  }
});