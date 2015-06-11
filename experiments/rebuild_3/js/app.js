var camera, scene, renderer;
var effect, controls;
var element, container;
var meshCar;
var ceilingRoom2;
var rotatingCube;
var exceleration = 0;
var carExceleration = 0;
var musicStart = false;
var loader = new THREE.JSONLoader();
var ambient;
var endGame = false;
var firstCubes = false;

var clock = new THREE.Clock(false);
// clock.start();
// clock.stop();

init();
animate();

var dotsInterval = window.setInterval(function() {
   // console.log("dots");
  if($('#loading_dots').text().length < 3) {
    $('#loading_dots').text($('#loading_dots').text() + '.');
  }
  else {
    $('#loading_dots').text('');
  }
}, 500);

function startButton(){
  // vrStart = true;
  // source.start(0);
  clock.start();
  source.start(0);
  // source.noteOn(0);
  // source.start(1000);
  // setTimeout(function(){source.start(0)},15000);
  $('#goButton').remove();
}


function init() {

	renderer = new THREE.WebGLRenderer();
	element = renderer.domElement;
	container = document.getElementById('example');
	container.appendChild(element);

	effect = new THREE.StereoEffect(renderer);
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(90, 1, 0.001, 15000);
  // launch pad start position
  camera.position.set( 0, 315, 0);
  // first room start position
  // camera.position.set( 0, 15, 0);
  // TEST Camera position
  // camera.position.set(-100,15,100);

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

  scene.add(
    light,
    ambiLight,
    directionalLight1,
    directionalLight2,
    directionalLight3,
    directionalLight4
  );

 	// Adding objects to the scene
  scene.add(marko,
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
            ceilingRoom1,
            ceilingRoom2,
            floor,
            meshdisk,
            dbcHole,
            launchPadFloor,
            launchPadCeiling,
            launchPadWallZN,
            launchPadWallZS,
            launchPadWallXE,
            launchPadWallXW,
            dbcWallZN,
            dbcWallZS,
            dbcWallXE,
            dbcWallXW,
            rotatingCube,
            markoframe,
            baoframe,
            ganeshframe,
            andrewframe,
            allSealions,
            allSealionsframe
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

    scene.add(meshCar);
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

  update(clock.getDelta());
  render(clock.getDelta());

  rotatingCube.rotation.x += 0.005;
  rotatingCube.rotation.y += 0.01;

  var movementSpeed = 0.1;
  var timer = clock.getElapsedTime();
  var beginWait = 10;
  var startTimer = (20 + beginWait);

  // car movement
  if ((timer > (startTimer + 24)) && (timer < (startTimer + 56))) {
    meshCar.rotation.y += 0.01;
  };

  if ((timer > (startTimer + 57)) && (timer < (startTimer + 64))) {
    meshCar.position.y += 0.07;
  };

  if ((timer > (startTimer + 64)) && (timer < (startTimer + 66.5))) {
    meshCar.position.y += 0.07;
    meshCar.rotation.x -= 0.003
  };

  if ((timer > (startTimer + 66)) && (timer < (startTimer + 73))) {
    meshCar.position.z += (carExceleration * 1);
    meshCar.position.y += (carExceleration * 1);
    carExceleration += 0.2;
  };

  // GRAVITY
  if ((timer > (beginWait)) && (camera.position.y > 14) && (timer < (startTimer + 50))) {  //(timer < (beginWait +  2.84)
    camera.position.y -= (movementSpeed * exceleration);
    exceleration += 0.5;
  };

  // camera movement
  if ((timer > (startTimer + 1)) && (timer < (startTimer +  6.5))) {
    camera.position.x -= movementSpeed;
    camera.position.z += movementSpeed;
    exceleration = 0;
  };

  if ((timer > (startTimer + 6.5)) && (timer < (startTimer + 24))) {
  	camera.position.x -= movementSpeed;
  };

  if ((timer > (startTimer + 23.9)) && (timer < (startTimer + 40))) {
    camera.position.z += movementSpeed;
  };

  if ((timer > (startTimer + 70)) && (timer < (startTimer + 74))) {
    camera.position.y += (movementSpeed * exceleration);
    exceleration += 0.5;
  };

  // ceiling movement
  if ((timer > (startTimer + 43)) && (timer < (startTimer + 64))) {
    ceilingRoom2.position.x -= movementSpeed;
  };



  if ((!musicStart) && (timer > (startTimer + 75))){
    musicStart = true;
    // console.log
    console.log("removing : " + musicStart);
    scene.remove( marko,
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
                  ceilingRoom1,
                  ceilingRoom2,
                  floor,
                  meshdisk,
                  dbcHole,
                  launchPadFloor,
                  launchPadCeiling,
                  launchPadWallZN,
                  launchPadWallZS,
                  launchPadWallXE,
                  launchPadWallXW,
                  dbcWallZN,
                  dbcWallZS,
                  dbcWallXE,
                  dbcWallXW,
                  meshCar,
                  rotatingCube,
                  light,
                  markoframe,
                  baoframe,
                  ganeshframe,
                  andrewframe
                // ambiLight,
                // directionalLight1,
                // directionalLight2,
                // directionalLight3,
                // directionalLight4
              );
    camera.position.set(0, 200, 0);

    ambient = new THREE.AmbientLight( 0xffffff );
    ambient.color.setHSL( 0.5, 0.5, 0.2 );
    scene.add( ambient );


  }

  var frequency = Math.floor(boost);

  console.log(timer + " : " + frequency);

  // squareUpper = 130; //space odditty 45
  // squareLower = 100; //space odditty 46
  // sphereUpper = 80;  //space odditty 60
  // sphereLower = 50;  //space odditty 70

  if ((firstCubes === false) && (frequency > 20) && (timer > (startTimer + 75))) {
    firstCubes = true;
    createCubes(10);
  }

  if ((frequency > 90) && (frequency < 110) && (timer > (startTimer + 75)) && (timer < (startTimer + 110))){
    createCubes(1);
    // console.log("CUBE!");
  }

  if (timer > (startTimer + 75)){
    camera.position.x -= 1;
    camera.position.y += 1;
  }

  if (timer > (startTimer + 93)){
    if (frequency < 80) {
      ambient.color.setHex(0x2DB4E0);
    } else if ((frequency > 80) && (frequency < 100)) {
      ambient.color.setHex(0xE8E51E);
    } else {
      ambient.color.setHex(0xE81E40);
    }
  }

  if (timer > (startTimer + 107)){
    console.log(boost);
    for (var i = 0; i < cubeArray.length; i++){
      var cube = cubeArray[i];
      var boostScale = boost/70;
      cube.scale.x = (boostScale +1);
      cube.scale.y = (boostScale +1);
      cube.scale.z = (boostScale +1);
    }
  };

  if ((timer > (startTimer + 117)) && (frequency > 100)){
    for (var i = 0; i < cubeArray.length; i++) {
      var cube = cubeArray[i];
      cube.rotation.x += 0.1;
    }
  };

  if ((timer > (startTimer + 145)) && (frequency > 60)){
      var cubeIndex = Math.floor(Math.random() * cubeArray.length)
      scene.remove(cubeArray[cubeIndex]);
      cubeArray.splice(cubeIndex, 1);
  }

  if ((endGame === false)  && (timer > (startTimer + 150))){
    endGame = true;
    $("#loadMsg").append("<h1>THANKS FOR PLAYING :)</h1><br><button onclick='endButton()' id='goButton'>PLAY AGAIN!</button>");
  }
}

function endButton(){
  location.reload();
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



