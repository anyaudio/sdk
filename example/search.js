const AnyAudioSDK = require('../build');

const SDK = new AnyAudioSDK('https://api.anyaudio.in');
SDK.api.v1.search('lol').then(function (response) {
  console.log(response);
});
