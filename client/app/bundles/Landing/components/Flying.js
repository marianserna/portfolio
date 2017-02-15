import * as THREE from 'three';
import Butterfly from './Butterfly';
import Boid from './Boid';

export default class Flying {
  constructor(container) {
    this.container = container;

    this.init();
    this.addLights();
    this.addButterfly();
    this.loop();

    window.addEventListener('resize', () => this.handleResize());
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e), false);
  }

  width() {
    return window.innerWidth;
  }

  height() {
    return window.innerHeight;
  }

  handleMouseMove(e) {
    const vector = new THREE.Vector3(e.clientX - this.width() / 2, -e.clientY + this.height() / 2, 0);
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].setGoal(vector);
    }
    this.lastMove = Date.now();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.width() / this.height(), 10, 10000);
    this.camera.position.set(0, 0, 450);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this.renderer.setSize(this.width(), this.height());

    this.container.appendChild(this.renderer.domElement);

    // Create clock to keep track of how many milisecons between each render
    this.clock = new THREE.Clock();
    this.lastMove = 0;
  }

  addLights() {
    const light = new THREE.AmbientLight(0xB2EBF2, 0.7);
    this.scene.add(light);
  }

  addButterfly() {
    this.butterflies = [];
    this.boids = [];

    for (let i = 0; i < 5; i++) {
      const butterfly = new Butterfly();
      this.scene.add(butterfly);
      this.butterflies.push(butterfly);

      const boid = new Boid();
      boid.position.x = Math.random() * 400 - 200;
      boid.position.y = Math.random() * 400 - 200;
      boid.position.z = Math.random() * 400 - 200;
      // boid.velocity.x = Math.random() * 2 - 1;
      // boid.velocity.y = Math.random() * 2 - 1;
      // boid.velocity.z = Math.random() * 2 - 1;
      boid.setAvoidWalls( true );
      boid.setWorldSize( this.width() / 2, 500, 200 );
      this.boids.push(boid);
    }
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
    // get delta: how long between renders
    const delta = this.clock.getDelta();
    for (let i = 0; i < this.butterflies.length; i++) {
      if (Date.now() - this.lastMove > 3000) {
        this.boids[i].setGoal(null);
      }
      this.boids[i].run(this.boids);
      this.butterflies[i].position.copy(this.boids[i].position);
      this.butterflies[i].flap(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
