var camera, scene, renderer;
var effect, controls;
var element, container;
var meshCar;
var ceilingRoom2;
var ambient;

var loader = new THREE.JSONLoader();

var clock = 0;
var musicClock;

init();
animate();

var vrStart = false;

function startButton(){
  vrStart = true;
  clock = new THREE.Clock();
  $('#goButton').remove();
}

var dotsInterval = window.setInterval(function() {
  if($('#loading_dots').text().length < 3) {
    $('#loading_dots').text($('#loading_dots').text() + '.');
  }
  else {
    $('#loading_dots').text('');
  }
}, 500);


function init() {

  renderer = new THREE.WebGLRenderer();
  element = renderer.domElement;
  container = document.getElementById('example');
  container.appendChild(element);

  effect = new THREE.StereoEffect(renderer);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
      // camera.position.set( -90, 85, 155); // test camera postion
      camera.position.set( 0, 15, 0); //actual camera postion
      scene.add(camera);

      controls = new THREE.OrbitControls(camera, element);
      controls.rotateUp(Math.PI / 4);
      controls.target.set(
        camera.position.x + 0.1,
        camera.position.y,
        camera.position.z
        );
      controls.noZoom = true;
      controls.noPan = true;

      function setOrientationControls(e) {
        if (!e.alpha) {
          return;
        }

        controls = new THREE.DeviceOrientationControls(camera, true);
        controls.connect();
        controls.update();

        element.addEventListener('click', fullscreen, false);

        window.removeEventListener('deviceorientation', setOrientationControls, true);
      }
      window.addEventListener('deviceorientation', setOrientationControls, true);

    // Adding light to the scene
      var ambiLight1 = new THREE.AmbientLight( 0x404040 ); // soft white light

      scene.add(  light,
        ambiLight,
        directionalLight1,
        directionalLight2,
        directionalLight3,
        directionalLight4
        );

  // Adding objects to the scene
  scene.add(  marko,
   bao,
   ganesh,
   andrew,
   ganeshWallYW,
   andrewWallYE,
   baoWallNZ,
   markoWallZS,
   room1HallWallXW,
   room1HallWallXE,
   room1HallWallZS,
   room1HallWallZN,
   room2WallZS,
   room2WallZN,
   room2WallXW,
   room2WallXE,
   room2WallXEshort,
   room2HallWallXE,
   room2HallWallZN,
   room2HallWallZS,
   garageDoor,
   ceilingRoom2,
   floor,
   meshdisk
   );

    // Adding the car object
    loader.load('car.js', function (geometry, materials) {

      meshCar = new THREE.Mesh(
        geometry,
        customMaterial.carMaterial
        );

      meshCar.scale.x = 0.2;
      meshCar.scale.y = 0.2;
      meshCar.scale.z = 0.2;

      meshCar.position.set(-90,3,92)

      meshCar.receiveShadow = true;
      meshCar.castShadow = true;

      // scene.add(meshCar);
      render();
    });

    window.addEventListener('resize', resize, false);
    setTimeout(resize, 1);
  }

  function resize() {
   var width = container.offsetWidth;
   var height = container.offsetHeight;

   camera.aspect = width / height;
   camera.updateProjectionMatrix();

   renderer.setSize(width, height);
   effect.setSize(width, height);
 }

 function update(dt) {
   resize();

   camera.updateProjectionMatrix();

   controls.update(dt);
 }

 function render(dt) {
  effect.render(scene, camera);
}

function animate(t) {
  requestAnimationFrame(animate);


  if(vrStart === true){
    var movementSpeed = 0.1;
    var startTimer = 0;
    // var timer = clock.getElapsedTime();
    // var musicTimer;
    // console.log(clock.getElapsedTime());
    // movement(timer, movementSpeed, startTimer);
     // start music

     //==============================================
     //TRANSITION TO MUSIC
     //==============================================

    // var musicStart = false;

    //   if ( (musicStart === false) && ((Math.floor(timer)) === (startTimer + 5))) {
       

    //       camera.position.set(0, 200, 0);

    //       scene.fog = new THREE.Fog( 0x000000, 3500, 15000 );
    //       scene.fog.color.setHSL( 0.51, 0.4, 0.01);

    //       ambient = new THREE.AmbientLight( 0xffffff );
    //       ambient.color.setHSL( 0.5, 0.5, 0.2 );
    //       // scene.add( ambient );

    //       var dirLight = new THREE.DirectionalLight( 0xffffff, 0.05 );
    //       dirLight.position.set( -50, -20, 100 ).normalize();
    //       scene.add( dirLight );

    //       dirLight.color.setHSL( 0.1, 0.7, 0.5 );



    //       source.start(0);

    //       musicClock = new THREE.Clock();
    //       // debugger;
    //       // musicTimer = musicClock.getElapsedTime();

    //       musicStart = true;
    //       scene.remove(  marko,
    //                  bao,
    //                  ganesh,
    //                  andrew,
    //                  ganeshWallYW,
    //                  andrewWallYE,
    //                  baoWallNZ,
    //                  markoWallZS,
    //                  room1HallWallXW,
    //                  room1HallWallXE,
    //                  room1HallWallZS,
    //                  room1HallWallZN,
    //                  room2WallZS,
    //                  room2WallZN,
    //                  room2WallXW,
    //                  room2WallXE,
    //                  room2WallXEshort,
    //                  room2HallWallXE,
    //                  room2HallWallZN,
    //                  room2HallWallZS,
    //                  garageDoor,
    //                  ceilingRoom2,
    //                  floor,
    //                  meshdisk,
    //                  meshCar
    //                  );
    //       scene.remove(  light,
    //                   ambiLight,
    //                   directionalLight1,
    //                   directionalLight2,
    //                   directionalLight3,
    //                   directionalLight4
    //                   );
    //     };

    // //==============================================
    // // MUSIC ACTIONS
    // //===============================================
    
    // var frequency = Math.floor(boost);

    // if ((Math.floor(timer)) > (startTimer + 5)){
    //   // musicClock = new THREE.Clock();
          
    //   musicTimer = musicClock.getElapsedTime();
    //   visualizer(musicTimer,frequency);
    //   // debugger;
    // }

    //=========================================
    //RENDER
    //==========================================
    

    update(clock.getDelta());
    render(clock.getDelta());
  }

  function fullscreen() {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    }
  }
}
