var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

// -----KEYS----------------------
// applying Spotify Keys to test if I can get data
var spotify = new Spotify({
  id: '962d1669ccfe4f4ab271267b002b1204',
  secret: '28bfb9340385421da81bc8e72deda425'
});

// applying Twitter Keys to test if I can get data
var client = new Twitter({
  consumer_key: 'TbYl6HmNVpBMblsXKju0qXYEg',
  consumer_secret: 'toQ8jQIwdEAGCzIxKu5bxJ6R8ZtXbNjVIf9OzkdTtRiPP9MVge',
  access_token_key: '91914520-7C4Y6oM4FCRlSBELM6rNmiVVPRBwBaY5EyymBJE6f',
  access_token_secret: 'dXf68GStWcT3Cx5EYwdhJqwx7OtH7Oh6jm2AQ2zioXBHZ'
});

// CODE FOR TWITTER
// Variable for parameters to pull 4 tweets from my account by my screen name
var params = {
    screen_name: 'Daries2001',
    count: 4,
    
    };

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //   for (var i =0; i <tweets.length; i++){
        // if(tweets.text)

// console log the results
          console.log(tweets.text)
      }
  }
)

// CODE FOR SPOTIFY

// var sparam {
//     type:
// }
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
  
//   console.log(data); 
//   });

spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx').then(function(data) {
    console.log('Song Name : ' + data.name); 
    console.log('Artist Name : ' + data.artist); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

  