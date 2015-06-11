var cubeArray = [];
var sphereArray = [];
var particleArray = [];

function createCubes(num){

	    var side = 250;

        for ( var i = 0; i < num; i ++ ) {
        	var cubeGeo = new THREE.BoxGeometry( side, side, side );
          var cubeMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
          var cube = new THREE.Mesh( cubeGeo, cubeMaterial );
          
          cube.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
          cube.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
          cube.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );

          cube.rotation.x = Math.random() * Math.PI;
          cube.rotation.y = Math.random() * Math.PI;
          cube.rotation.z = Math.random() * Math.PI;

          // cube.matrixAutoUpdate = false;
          // cube.updateMatrix();
          cubeArray.push(cube);
          scene.add( cube );

        };

}

function createSpheres(num){

	    for ( var i = 0; i < num; i ++ ) {
	    var sphereGeo = new THREE.SphereGeometry( 100, 32, 32 );
      var sphereMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
       // var sphereMesh = [];
     
         sphere = new THREE.Mesh( sphereGeo, sphereMaterial );
         sphere.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
         sphere.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
         sphere.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );
         sphere.rotation.x = Math.random() * Math.PI;
         sphere.rotation.y = Math.random() * Math.PI;
         sphere.rotation.z = Math.random() * Math.PI;
         // sphere.matrixAutoUpdate = false;
         // sphere.updateMatrix();
         sphereArray.push(sphere)
         scene.add( sphere );
       };

}

function createParticles(num){

		  // for ( var i = 0; i < num; i ++ ) {

		  // var particleGeo = new THREE.Geometry();
		  // var particleMaterial = new THREE.ParticleBasicMaterial({
		  // 				color: 0xFFFFFF,
				// 			size: 20,
				// 			map: THREE.ImageUtils.loadTexture("particle.png"),
				// 			blending: THREE.AdditiveBlending,
				// 			transparent: true: 
		  // })
	   //  var sphereGeo = new THREE.SphereGeometry( 100, 32, 32 );
    //   var sphereMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    //    // var sphereMesh = [];
     
    //      sphere = new THREE.Mesh( sphereGeo, sphereMaterial );
    //      sphere.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
    //      sphere.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
    //      sphere.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );
    //      sphere.rotation.x = Math.random() * Math.PI;
    //      sphere.rotation.y = Math.random() * Math.PI;
    //      sphere.rotation.z = Math.random() * Math.PI;
    //      // sphere.matrixAutoUpdate = false;
    //      // sphere.updateMatrix();
    //      sphereArray.push(sphere)
    //      scene.add( sphere );
    //    };

}