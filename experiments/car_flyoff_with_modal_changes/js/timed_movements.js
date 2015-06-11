var movement = function(){
      update(clock.getDelta());
      render(clock.getDelta());

      var movementSpeed = 0.1;
      var startTimer = 0;

      var timer = clock.getElapsedTime();
      console.log(clock.getElapsedTime());
      //car movement
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

      if ((timer > (startTimer + 66)) && (timer < (startTimer + 95))) {
        meshCar.position.z += 0.8;
        meshCar.position.y += 0.8;
        // meshCar.rotation.z += 0.03;
      };

      // camera movement
      if ((timer > (startTimer + 1)) && (timer < (startTimer +  6.5))) {
        camera.position.x -= movementSpeed;
        camera.position.z += movementSpeed;
      };

      if ((timer > (startTimer + 6.5)) && (timer < (startTimer + 24))) {
        camera.position.x -= movementSpeed;
      };

      if ((timer > (startTimer + 23.9)) && (timer < (startTimer + 40))) {
        camera.position.z += movementSpeed;
      };

      if ((timer > (startTimer + 70)) && (timer < (startTimer + 85))) {
        camera.position.y += (movementSpeed*3);
      };


      // ceiling movement
      if ((timer > (startTimer + 43)) && (timer < (startTimer + 58))) {
        ceilingRoom2.position.x -= (movementSpeed*2);
      };

      if ((timer > (startTimer + 68)) && (timer < (startTimer + 95))) {
        ceilingRoom2.position.y += (movementSpeed*8);
      };

      if ((timer > (startTimer + 72)) && (timer < (startTimer + 95))) {
        ceilingRoom2.rotation.z += (movementSpeed*3);
        ceilingRoom2.rotation.x += (movementSpeed*3);
      };

      // start music
      if ((Math.floor(timer)) === (startTimer + 96)){
        source.start(0);
      };

      // platform 2 disappears
      if ((Math.floor(timer)) === (startTimer + 100)) {
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
                       ceilingRoom2,
                       floor,
                       meshdisk,
                       meshCar
                       );
      };
}