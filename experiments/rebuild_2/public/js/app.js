var camera, scene, renderer;
var effect, controls;
var element, container;
var meshCar;
var ceilingRoom2;
var exceleration = 0;
var musicStart = false;
var loader = new THREE.JSONLoader();

var clock = new THREE.Clock(false);
// clock.start();
// clock.stop();

init();
animate();

var dotsInterval = window.setInterval(function() {
   console.log("dots");
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
      camera.position.set( -0, 315, 0); 
      // first room start position
      // camera.position.set( 0, 15, 0);
      // TEST Camera position
      // camera.position.set(0,315,0);

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
      dbcWallXW
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
  
    // console.log(clock.getElapsedTime());


    var movementSpeed = 0.1;
    var timer = clock.getElapsedTime();
    var beginWait = 4;
    var startTimer = 10;
    // var startTimer = 0;

      // car movement
      if ((timer > (startTimer + 24)) && (timer < (startTimer + 56))) {
       meshCar.rotation.y += 0.01;
      };      

      if ((timer > (startTimer + 57)) && (timer < (startTimer + 64))) {
       meshCar.position.y += 0.07;
      };      

      if ((timer > (startTimer + 64)) && (timer < (startTimer + 66))) {
       meshCar.position.y += 0.07;
       meshCar.rotation.x -= 0.003

      };      

      if ((timer > (startTimer + 66)) && (timer < (startTimer + 70))) {
       meshCar.position.z += 0.8;
       meshCar.position.y += 0.8;
        // meshCar.rotation.z += 0.03;
      };      


      // GRAVITY
      if ((timer > (beginWait + 1)) && (camera.position.y > 14) && (timer < (startTimer + 50))) {  //(timer < (beginWait +  2.84)
        camera.position.y -= (movementSpeed * exceleration);
        exceleration += 0.5;
      };

      // camera movement
      if ((timer > (startTimer + 1)) && (timer < (startTimer +  6.5))) {
       camera.position.x -= movementSpeed;
       camera.position.z += movementSpeed;
      };
      
      if ((timer > (startTimer + 6.5)) && (timer < (startTimer + 24))) {
      	camera.position.x -= movementSpeed;
        // camera.position.z += movementSpeed;
      };

      if ((timer > (startTimer + 23.9)) && (timer < (startTimer + 40))) {
        // camera.position.x -= movementSpeed;
        camera.position.z += movementSpeed;
      };

      if ((timer > (startTimer + 66)) && (timer < (startTimer + 76))) {
        // camera.position.x -= movementSpeed;
        camera.position.y += (movementSpeed * 8);
      };


      // ceiling movement
      if ((timer > (startTimer + 43)) && (timer < (startTimer + 64))) {
        // camera.position.x -= movementSpeed;
        // camera.position.z += movementSpeed;
        ceilingRoom2.position.x -= movementSpeed;
      };



      if ((!musicStart) && (timer > (startTimer + 75))){
        musicStart = true;
        // console.log
        console.log("removing : " + musicStart);
            scene.remove(  marko, 
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
                        light
                        // ambiLight,
                        // directionalLight1,
                        // directionalLight2,
                        // directionalLight3,
                        // directionalLight4
                      );
          camera.position.set(0, 200, 0);

        
      }

      var frequency = Math.floor(boost);

      console.log(frequency);

      squareUpper = 130; //space odditty 45
      squareLower = 100; //space odditty 46
      sphereUpper = 80; //space odditty 60
      sphereLower = 50; //space odditty 70

      if ((frequency > squareLower) && (frequency < squareUpper) && (timer > (startTimer + 75))){
        createCubes(1);
        console.log("CUBE!");
      }

      if ((frequency > sphereLower) && (frequency < sphereUpper) && (timer > (startTimer + 75))){
        createSpheres(1);
        console.log("SPHERE");
      }




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
