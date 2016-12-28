'use strict';

var _twitter = require('twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var filterString = 'some string';

var client = new _twitter2.default({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var stream = client.stream('statuses/filter', { track: filterString });

stream.on('data', function (event) {
  //receives event
  console.log(event);
  //Listens for media upload
  console.log(event.entities.media[0]);
  console.log(event.extended_entities.media[0]);
});

stream.on('error', function (error) {
  throw error;
});