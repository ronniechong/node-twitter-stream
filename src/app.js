import Twitter from'twitter';
import Dotenv from 'dotenv';
 
Dotenv.config();

let filterString = 'some string';

let client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

let stream = client.stream(
  'statuses/filter', 
  {track: filterString}
);

stream.on('data', (event) => {
	//receives event
  console.log(event);
  //Listens for media upload
  console.log(event.entities.media[0]);
  console.log(event.extended_entities.media[0]);
});

stream.on('error', (error) => {
  throw error;
});
