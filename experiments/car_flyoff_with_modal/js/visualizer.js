var visualizer = function(timer, frequency){
	// console.log("viz");
	// console.log(frequency);
	 if (timer < 100){
        light.intensity += 0.00001;
      }

      console.log(timer + ": " + frequency);

      // squareUpper = 45 //space odditty 45
      // squareLower = 46 //space odditty 46
      // sphereUpper = 60 //space odditty 60
      // sphereLower = 70 //space odditty 70

      squareUpper = 110; //space odditty 45
      squareLower = 100; //space odditty 46
      sphereUpper = 80; //space odditty 60
      sphereLower = 70; //space odditty 70

      if ((frequency > squareLower) && (frequency < squareUpper) && (timer < 100)){
        createCubes(1);
        console.log("CUBE!");
      }

      if ((frequency > sphereLower) && (frequency < sphereUpper) && (timer < 100)){
        createSpheres(1);
        console.log("SPHERE");
      }

      if (timer > 5){
        if (frequency < 33) {
          ambient.color.setHex(0x2DB4E0);
        } else if ((frequency > 40) && (frequency < 66)) {
          ambient.color.setHex(0xE8E51E);
        } else {
          ambient.color.setHex(0xE81E40);
        }
      }

      if ((frequency > 110) & (timer > 30)){
      	scene.add(ambient);
      }

      //bump cubes

      // for (var i = 0; i < cubeArray.length; i++) {
      //   var cube = cubeArray[i];
      //   var boostScale = boost/70;
      //   if ((frequency > 60) && (frequency < 80)) {
      //     ambient.color.setHex(0x2DB4E0);
      //     // cube.scale.x = boostScale;
      //     // cube.scale.y = boostScale;
      //     // cube.scale.z = boostScale;
      //   } else if (frequency > 60) {
      //     cube.scale.x = (boostScale +1);
      //     cube.scale.y = (boostScale +1);
      //     cube.scale.z = (boostScale +1);
      //     // light.intensity += 0
      //   }
      // };

      for (var i = 0; i < cubeArray.length; i++) {
        var cube = cubeArray[i];
        var boostScale = boost/70;
        if ((frequency > 60) && (frequency < 80)) {
          ambient.color.setHex(0x2DB4E0);
          // cube.scale.x = boostScale;
          // cube.scale.y = boostScale;
          // cube.scale.z = boostScale;
          // cube.rotation.x += 0.1;
        } else if (frequency > 60) {
          cube.scale.x = (boostScale +1);
          cube.scale.y = (boostScale +1);
          cube.scale.z = (boostScale +1);
          // light.intensity += 0
        }
      };


      for (var i = 0; i < cubeArray.length; i++) {
        var cube = cubeArray[i];
        if ((timer > 120) && (frequency > 70)) {
          // console.log(rotate);
          cube.rotation.x += 0.1;
        }
      };

      for (var i = 0; i < sphereArray.length; i++) {
        var sphere = sphereArray[i];
        if ((timer > 60) && (frequency > 80)) {
          // console.log("rotate");
          sphere.position.x += 10;
        }
        if ((timer > 100) && (frequency > 80)) {
          // console.log("rotate");
          sphere.position.x -= 10;
          sphere.position.y += 5;
        }
        if ((timer > 100) && (frequency > 90)){
          sphere.scale.x = (boostScale +1);
          sphere.scale.y = (boostScale +1);
          sphere.scale.z = (boostScale +1);
        }
      };

      // console.log(timer);

      camera.position.x -= 1;
      camera.position.y += 1;
}