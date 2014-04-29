
var request = require('request');

module.exports = function(type, query, callback) {
  if (type !== 'artist' && type !== 'track' && type != 'album') {
    throw new Error('type must be one of: artist, track, album');
  }

  if (!query) {
    throw new Error('need a string query');
  }

  if (!callback) {
    throw new Error('need a callback');
  }

  var url = 'http://ws.spotify.com/search/1/'+ type +'.json?q=' + query.replace(' ', '+');
  request({url: url, json:true}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback(error, body);
    }
  });
};
