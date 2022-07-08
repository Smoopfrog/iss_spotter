const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API
  const requestedURL = 'https://api.ipify.org/?format=json';

  request(requestedURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const ip = JSON.stringify(data.ip);
      callback(null, ip);
    }
  });
};

fetchMyIP();

module.exports = { fetchMyIP };