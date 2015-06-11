      var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.3);
      var ambiLight = new THREE.AmbientLight( 0x404040 ); // soft white light
      var directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.2 );
      directionalLight1.position.set( -2.9, 0.9, 2.9 );

      var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.2 );
      directionalLight2.position.set( 2.9, 0.9, -2.9 );

      var directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.2 );
      directionalLight3.position.set( 2.9, 0.9, 2.9 );

      var directionalLight4 = new THREE.DirectionalLight( 0xffffff, 0.2 );
      directionalLight4.position.set( -2.9, 0.9, -2.9 );
      
