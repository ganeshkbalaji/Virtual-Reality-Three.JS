var context;
var source, sourceJs;
var analyser;
var url = 'Intergalactic.mp3';
var array = new Array();
var boost = 0;

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

var request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "arraybuffer";

request.onload = function() {
  context.decodeAudioData(
    request.response,
    function(buffer) {
      sourceJs = context.createScriptProcessor(2048, 1, 1);
      sourceJs.buffer = buffer;
      sourceJs.connect(context.destination);
      analyser = context.createAnalyser();
      analyser.smoothingTimeConstant = 0.6;
      analyser.fftSize = 512;

      source = context.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      source.connect(analyser);
      analyser.connect(sourceJs);
      source.connect(context.destination);

      sourceJs.onaudioprocess = function(e) {
        array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        boost = 0;
        for (var i = 0; i < array.length; i++) {
                boost += array[i];
            }
            boost = boost / array.length;
            // console.log(boost);
      };

      // source.start(0);
    }
  );
  $('body').on('click',function(){
    source.start(0);
  });
};

request.send();
