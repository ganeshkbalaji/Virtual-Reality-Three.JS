var customMaterial = {

	wood: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/wood.jpg'),
	}),

	bricks: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/bricks.jpg'),
	}),

	woodFloor: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/woodfloor.jpg'),
	}),

	woodceiling: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/woodceiling.jpg'),
	}),

	space: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/space.jpg'),
	}),

	markopic: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/marko.jpg'),
	}),

	baopic: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/bao.jpg'),
	}),

	ganeshpic: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/ganesh.jpg'),
	}),

	andrewpic: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/andrew.jpg'),
	}),

	carMaterial: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/gtare.jpg'),   
		colorAmbient: [0.480000026226044, 0.480000026226044, 0.480000026226044],
		colorDiffuse: [0.480000026226044, 0.480000026226044, 0.480000026226044],
		colorSpecular: [0.8999999761581421, 0.8999999761581421, 0.8999999761581421]
	}),

  diskMaterial: new THREE.MeshBasicMaterial( { color: 0x141414, side: THREE.DoubleSide } ),

  black: new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } ),

	foggy: new THREE.MeshBasicMaterial( { color: '#BFEFFF', side: THREE.DoubleSide } ),

	garageDoor: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/garagedoor.jpg')
	}),
	
	officeCeiling: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/officeCeiling.png')
	}),

	officeCarpet: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/officeCarpet.jpg')
	}),

  dbcLogo: new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('images/dbcLogo.png')
  }),

	sealions: new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture('images/sealions.jpg')
	}),



}

var meshdisk = new THREE.Mesh( new THREE.RingGeometry( 0, 25, 30 ), 
	customMaterial.diskMaterial );
meshdisk.position.set(-92,3.5,92);
meshdisk.rotation.x = 300

var floor = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(250, 5, 250, 1, 1, 1),
  [ customMaterial.woodFloor ] );
floor.position.set(-85,0,80);

var garageDoor = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(.1, 23, 40, 1, 1, 1),
	[customMaterial.garageDoor] );
garageDoor.position.set(-42, 15, 100);

var room2HallWallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 20, 1, 1, 1),
	[ customMaterial.wood ] );
room2HallWallZS.position.set(-156, 5, 150);

var room2HallWallZN = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 20, 1, 1, 1),
	[ customMaterial.wood ] );
room2HallWallZN.position.set(-56, 5, 150);

var room2HallWallXE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(110, 50, 2, 1, 1, 1),
	[ customMaterial.wood ] );
room2HallWallXE.position.set(-75, 5, 161);

var marko = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(.1, 20, 20, 1, 1, 1),
	[ customMaterial.markopic] );
marko.position.set(-58, 15, -15);

var bao = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(.1, 23, 20, 1, 1, 1),
	[ customMaterial.baopic] );
bao.position.set(38, 15, -1);

var ganesh = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(10, 22, .1, 1, 1, 1),
	[ customMaterial.ganeshpic] );
ganesh.position.set(-05, 15, -38.5);

var andrew = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(20, 20, .1, 1, 1, 1),
	[ customMaterial.andrewpic] );
andrew.position.set(-05, 15, 38.5);

var ganeshWallYW = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 50, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
ganeshWallYW.position.set(-10, 5, -40);

var andrewWallYE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 50, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
andrewWallYE.position.set(-10, 5, 40);

var baoWallNZ = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 85, 1, 1, 1),
	[ customMaterial.wood ] );
baoWallNZ.position.set(40.5,5,0);

var markoWallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 60, 1, 1, 1),
	[ customMaterial.wood ] );
markoWallZS.position.set(-60, 5, -10);

var room1HallWallXW = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(85, 50, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
room1HallWallXW.position.set(-103.5, 5, 19);

var room1HallWallXE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(65, 50, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
room1HallWallXE.position.set(-92.5, 5, 40);

var room1HallWallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 65, 1, 1, 1),
	[ customMaterial.bricks ] );
room1HallWallZS.position.set(-148, 5, 8);

var room1HallWallZN = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 20, 1, 1, 1),
	[ customMaterial.wood ] );
room1HallWallZN.position.set(-124, 5, 51);

var ceilingRoom1 = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(192, 5, 100, 1, 1, 1),
	[ customMaterial.woodceiling ] );
ceilingRoom1.position.set(-55,32.5,-9.5);

var room2WallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 100, 1, 1, 1),
	[ customMaterial.wood ] );
room2WallZS.position.set(-148, 5, 90.5);

var room2WallZN = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 50, 100, 1, 1, 1),
	[ customMaterial.wood ] );
room2WallZN.position.set(-40, 5, 90);

var room2WallXW = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(82, 50, 2, 1, 1, 1),
	[ customMaterial.wood ] );
room2WallXW.position.set(-82, 5, 60);

var room2WallXE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(80, 50, 2, 1, 1, 1),
	[ customMaterial.wood ] );
room2WallXE.position.set(-115, 5, 141);

var room2WallXEshort = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(20, 50, 2, 1, 1, 1),
	[ customMaterial.wood ] );
room2WallXEshort.position.set(-45, 5, 141);

ceilingRoom2 = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(119, 5, 123, 1, 1, 1),
	[ customMaterial.woodceiling ] );
ceilingRoom2.position.set(-90,32.5,102); 

var launchPadFloor = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 5, 100, 1, 1, 1),
	[ customMaterial.officeCarpet ] );
launchPadFloor.position.set(0,300,0);

var launchPadCeiling = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(60, 5, 60, 1, 1, 1),
	[ customMaterial.officeCeiling ] );
launchPadCeiling.position.set(0,332,0);

var launchPadWallZN = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 32, 60, 1, 1, 1),
	[ customMaterial.bricks ] );
launchPadWallZN.position.set(30,316,0);

var launchPadWallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 32, 60, 1, 1, 1),
	[ customMaterial.bricks ] );
launchPadWallZS.position.set(-30,316,0);

var launchPadWallXE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(60, 32, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
launchPadWallXE.position.set(0,316,30);

var launchPadWallXW = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(60, 32, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
launchPadWallXW.position.set(0,316,-30);

var dbcHole = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 3, 100, 1, 1, 1),
	[ customMaterial.dbcLogo ] );
dbcHole.position.set(0,38,0);

var dbcWallZN = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 264, 100, 1, 1, 1),
	[ customMaterial.bricks ] );
dbcWallZN.position.set(50,167,0);

var dbcWallZS = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(2, 264, 100, 1, 1, 1),
	[ customMaterial.bricks ] );
dbcWallZS.position.set(-50,167,0);

var dbcWallXE = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 264, 2, 1, 1, 1),
	[ customMaterial.bricks ] );
dbcWallXE.position.set(0,167,50);

var dbcWallXW = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(100, 264, 2, 1, 1, 1),
  [ customMaterial.bricks ] );
dbcWallXW.position.set(0,167,-50);

var rotatingCube = THREE.SceneUtils.createMultiMaterialObject( new THREE.BoxGeometry(5, 5, 5, 1, 1, 1),
	[ customMaterial.sealions ] );
rotatingCube.position.set(0,312,10);



