import * as THREE from 'three';

export default class Butterfly extends THREE.Group {
  constructor() {
    super();

    this.cycle = 0;
    this.width = Math.random() * 5 + 20;
    this.height = this.width * 2;

    const rWingMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/wing-right.png'),
      transparent: true,
      // opacity: 0.8,
      side: THREE.DoubleSide
    });

    const rWingGeometry = new THREE.PlaneGeometry(this.width, this.height, 1);
    const rWingMesh = new THREE.Mesh(rWingGeometry, rWingMaterial);
    rWingMesh.position.x += this.width / 2;
    this.rWingJoint = new THREE.Object3D();
    this.rWingJoint.add(rWingMesh);
    this.add(this.rWingJoint);


    const lWingMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('/wing-left.png'),
      transparent: true,
      // opacity: 0.8,
      side: THREE.DoubleSide
    });

    const lWingGeometry = new THREE.PlaneGeometry(this.width, this.height, 1);
    const lWingMesh = new THREE.Mesh(lWingGeometry, lWingMaterial);
    lWingMesh.position.x -= this.width / 2;
    this.lWingJoint = new THREE.Object3D();
    this.lWingJoint.add(lWingMesh);
    this.add(this.lWingJoint);

    this.rotation.x -= 1;
  }

  flap(delta) {
    // Make it flap faster
    this.cycle += delta * 6;
    // Stop number from getting to big
    // this.cycle = this.cycle % (Math.PI * 2);

    this.lWingJoint.rotation.y = Math.sin(this.cycle);
    this.rWingJoint.rotation.y = - Math.sin(this.cycle);
  }
}
