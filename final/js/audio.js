var context;
var source, sourceJs;
var analyser;
var url = 'intergalactic.mp3';
var array = new Array();
var boost = 0;

// Set up audio context

try {
  if(typeof webkitAudioContext === 'function' || 'webkitAudioContext' in window) {
    context = new webkitAudioContext();
  }
  else {
    context = new AudioContext();
  }
}
catch(e) {
  $('#info').text('Web Audio API is not supported in this browser');
}

// Load audio file

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "arraybuffer";

// Execute when Audio file has finished loading

request.onload = function() {

  console.log("onload");
  context.decodeAudioData(
    request.response,
    function(buffer) {

      if(!buffer) {
        $('#info').text('Error decoding file data');
        return;
      }

      //set up analyzer

      sourceJs = context.createScriptProcessor(2048, 1, 1);
      sourceJs.buffer = buffer;
      sourceJs.connect(context.destination);
      analyser = context.createAnalyser();
      analyser.smoothingTimeConstant = 0.6;
      analyser.fftSize = 512;

      source = context.createBufferSource();
      source.buffer = buffer;
      source.loop = false;

      source.connect(analyser);
      analyser.connect(sourceJs);
      source.connect(context.destination);

      // calculate and send frequency data for visualization

      sourceJs.onaudioprocess = function(e) {
        array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        boost = 0;
        for (var i = 0; i < array.length; i++) {
                boost += array[i];
            }
            boost = boost / array.length;
      };

      // clear loading text and display start button  

      clearInterval(dotsInterval);
      $("#loading_dots").remove();
      $("#loadText").remove();
      $("#loadMsg").append("<button onclick='startButton()' id='goButton'>START</button>")

    }
  );
};

request.send();



