import * as THREE from 'three';

export default class Flying {
  constructor(container) {
    this.container = container;

    this.init();
    this.addLights();
    this.addSphere();
    this.loop();

    window.addEventListener('resize', () => this.handleResize());
  }

  width() {
    return window.innerWidth;
  }

  height() {
    return window.innerHeight;
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.width() / this.height(), 1, 2000);
    this.camera.position.set(0, 0, 50);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this.renderer.setSize(this.width(), this.height());

    this.container.appendChild(this.renderer.domElement);
  }

  addLights() {
    const light = new THREE.AmbientLight(0xB2EBF2, 0.7);
    this.scene.add(light);
  }

  addSphere() {
    const geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const sphere = new THREE.Mesh( geometry, material );
    this.scene.add( sphere );
  }

  handleResize() {
    this.renderer.setSize(this.width(), this.height());
    this.camera.aspect = this.width() / this.height();
    this.camera.updateProjectionMatrix();
  }

  loop() {
    this.render();
    requestAnimationFrame(() => {
      this.loop();
    });
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
