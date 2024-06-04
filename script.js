console.log("Welcome to Spotify...");

const wavPlayer = require('node-wav-player');
wavPlayer.play({
  path: '1.wav'}).then(() => {
  console.log('Audio played successfully');
}).catch(error => {
  console.error('Error playing audio:', error);
});



console.log("Welcome to Spotify...");

// const Speaker = require('speaker');
// const fs = require('fs');

// const speaker = new Speaker();
// const audioFileStream = fs.createReadStream('1.wav'); // Replace with the actual path to your audio file

// audioFileStream.pipe(speaker);




