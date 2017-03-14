import * as THREE from 'three';

class RightTriangle extends THREE.Geometry {
  constructor() {
    super();

    this.vertices.push(new THREE.Vector3(0, 0, 0));
    this.vertices.push(new THREE.Vector3(10, -3, 0));
    this.vertices.push(new THREE.Vector3(10, 3, 0));

    this.faces.push(new THREE.Face3(0, 1, 2));
  }
}

class LeftTriangle extends THREE.Geometry {
  constructor() {
    super();

    this.vertices.push(new THREE.Vector3(0, 0, 0));
    this.vertices.push(new THREE.Vector3(-10, 3, 0));
    this.vertices.push(new THREE.Vector3(-10, -3, 0));

    this.faces.push(new THREE.Face3(0, 1, 2));
  }
}

export default class Butterfly extends THREE.Group {
  constructor() {
    super();

    this.cycle = 0;
    this.width = Math.random() * 5 + 20;
    this.height = this.width * 2;
    this.buildRightWing();
    this.buildLeftWing();

    // const rWingMaterial = new THREE.MeshBasicMaterial({
    //   map: new THREE.TextureLoader().load('/wing-right.png'),
    //   transparent: true,
    //   // opacity: 0.8,
    //   side: THREE.DoubleSide
    // });

    // const rWingGeometry = new THREE.PlaneGeometry(this.width, this.height, 1);
    // const rWingMesh = new THREE.Mesh(rWingGeometry, rWingMaterial);
    // rWingMesh.position.x += this.width / 2;

    // this.rWingJoint.add(rWingMesh);

    // const lWingMaterial = new THREE.MeshPhongMaterial({
    //   map: new THREE.TextureLoader().load('/wing-left.png'),
    //   transparent: true,
    //   // opacity: 0.8,
    //   side: THREE.DoubleSide
    // });

    // const lWingGeometry = new THREE.PlaneGeometry(this.width, this.height, 1);
    // const lWingMesh = new THREE.Mesh(lWingGeometry, lWingMaterial);
    // lWingMesh.position.x -= this.width / 2;

    // this.lWingJoint.add(lWingMesh);

    this.rotation.x -= 1;
  }

  buildRightWing() {
    this.rWingJoint = new THREE.Object3D();
    this.add(this.rWingJoint);

    let triangle = new RightTriangle();
    let triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xF2C640});
    let triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    let point = new THREE.Object3D();
    point.add(triangleMesh);
    this.rWingJoint.add(point);

    triangle = new RightTriangle();
    triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xEFEEE9});
    triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    point = new THREE.Object3D();
    point.rotation.z += Math.PI / 4;
    point.add(triangleMesh);
    this.rWingJoint.add(point);

    triangle = new RightTriangle();
    triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xEFEEE9});
    triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    point = new THREE.Object3D();
    point.rotation.z -= Math.PI / 4;
    point.add(triangleMesh);
    this.rWingJoint.add(point);
  }

  buildLeftWing() {
    this.lWingJoint = new THREE.Object3D();
    this.add(this.lWingJoint);

    let triangle = new LeftTriangle();
    let triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xFB2A27});
    let triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    let point = new THREE.Object3D();
    point.add(triangleMesh);
    this.lWingJoint.add(point);

    triangle = new LeftTriangle();
    triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xE9E581});
    triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    point = new THREE.Object3D();
    point.rotation.z += Math.PI / 4;
    point.add(triangleMesh);
    this.lWingJoint.add(point);

    triangle = new LeftTriangle();
    triangleMaterial = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, color: 0xE9E581});
    triangleMesh = new THREE.Mesh(triangle, triangleMaterial);
    point = new THREE.Object3D();
    point.rotation.z -= Math.PI / 4;
    point.add(triangleMesh);
    this.lWingJoint.add(point);
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
