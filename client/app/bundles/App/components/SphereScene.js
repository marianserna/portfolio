import * as THREE from 'three';
import {Howl} from 'howler';
import {TweenLite} from 'gsap';

window.THREE = THREE;
require('three/examples/js/controls/OrbitControls.js');

export default class SphereScene {
  constructor(container) {
    this.container = container;

    // currently touching the Icosahedron
    this.active = false;
    // time when the current activation has taken place
    this.activeDate = null;
    // has it been activated and then deactivated
    this.prevActivated = false;
    // multiplier that goes from 0 to 1 causing the animation to move at a normal speed
    this.activeRate = 0;

    this.init();
    this.addSong();
    this.addLights();
    this.addIco();
    this.addWireframe();
    this.addPoints();
    this.addSatelites();
    this.loop();

    window.addEventListener('resize', () => this.handleResize());
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e), false);
  }

  width() {
    return window.innerWidth - 25;
  }

  height() {
    return window.innerHeight - 25;
  }

  handleMouseMove(e) {
    const vector = new THREE.Vector3(e.clientX - this.width() / 2, -e.clientY + this.height() / 2, 0);
    if (Math.abs(vector.x) <= 120 && Math.abs(vector.y) <= 120) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  activate() {
    if (!this.active) {
      this.song.play();
      this.activeDate = new Date();
      TweenLite.fromTo(this, 0.5, {activeRate: 0}, {activeRate: 1});
    }
    this.active = true;
  }

  deactivate() {
    if (this.active) {
      this.song.pause();
      this.activeDate = null;
      this.prevActivated = true;
      TweenLite.fromTo(this, 0.5, {activeRate: 1}, {activeRate: 0});
    }
    this.active = false;
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, this.width() / this.height(), 0.1, 2000);
    this.camera.position.set(0, 0, 650);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this.renderer.setSize(this.width(), this.height());

    this.container.appendChild(this.renderer.domElement);

    const orbitControls = new THREE.OrbitControls(this.camera);
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;

    // Create clock to keep track of how many milisecons between each render
    this.clock = new THREE.Clock();

    this.distance = 0;
  }

  addSong() {
    this.song = new Howl({
      src: ['donotlook.mp3'],
      volume: 0.1
    });
  }

  addLights() {
    let light = new THREE.AmbientLight(0xB2EBF2, 0.7);
    this.scene.add(light);

    let light1 = new THREE.DirectionalLight(0x1DE9B6, 0.5);
    light1.position.set(0, 0, 1);
    light1.castShadow = true;
    light1.shadowDarkness = 0.5;
    light1.shadowCameraVisible = true;
    this.scene.add(light1);

    let light2 = new THREE.DirectionalLight(0xE040FB, 0.4);
    light2.position.set(1, 1, -3);
    light2.castShadow = true;
    light2.shadowDarkness = 0.5;
    light2.shadowCameraVisible = true;
    this.scene.add(light2);

    let light3 = new THREE.DirectionalLight(0xFF5722, 0.4);
    light3.position.set(3, -1, -2);
    this.scene.add(light3);

    let light4 = new THREE.DirectionalLight(0xE040FB, 0.2);
    light4.position.set(-4, 1, -1);
    this.scene.add(light4);

    let light5 = new THREE.DirectionalLight(0xE040FB, 0.1);
    light5.position.set(-10, -6, -4);
    this.scene.add(light5);
  }

  addPoints() {
    const pointLight = new THREE.PointLight( 0x9068BE, 0.7, 500);
    this.scene.add( pointLight );
    const geometry = new THREE.SphereBufferGeometry( 10, 16, 8 );
    const material = new THREE.MeshPhongMaterial( {color: 0x9068BE} );
    const sphere = new THREE.Mesh( geometry, material );
    pointLight.add( sphere );
  }

  addIco() {
    const geometry = new THREE.IcosahedronBufferGeometry(100, 0);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0.8,
      premultipliedAlpha: true,
      transparent: true
    });

    const ico = new THREE.Mesh( geometry, material );
    ico.castShadow = true;
    ico.receiveShadow = true;
    this.scene.add( ico );
  }

  addWireframe() {
    const geometry = new THREE.SphereBufferGeometry( 150, 8, 4 );
    const material = new THREE.MeshPhongMaterial({color: 0xC2DFEA, wireframe: true});
    this.wireframe = new THREE.Mesh( geometry, material );
    this.scene.add( this.wireframe );
  }

  addSatelites() {
    this.satelites = new THREE.Object3D();

    const geometry = new THREE.SphereBufferGeometry( 10, 16, 8 );

    const colours = [0xF40076];
    const materials = colours.map((colour) => {
      return new THREE.MeshPhongMaterial({
        color: colour
      });
    });

    for (let i = 0; i < 35; i++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const sphere = new THREE.Mesh(geometry, material);
      const randomScale = (Math.random() + 0.5) / 2;
      sphere.scale.set(randomScale, randomScale, randomScale);

      const [x, y, z] = this.randomSatelitePoint(0, 0, 0, 185);
      sphere.position.set(x, y, z);

      this.satelites.add(sphere);
    }

    this.scene.add(this.satelites);
  }

  randomSatelitePoint(x0, y0, z0, radius){
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    const z = z0 + (radius * Math.cos(phi));
    return [x, y, z];
  }

  canDance() {
    if (this.activeRate > 0) {
      return true;
    }

    if (!this.active) {
      return false;
    }

    const now = new Date();
    const timeDancing = now.getTime() - this.activeDate.getTime();
    return timeDancing > 500 || this.prevActivated;
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
    const delta = this.clock.getDelta() * this.activeRate;

    if (this.canDance()) {
      this.distance += delta * 10;

      const curve = Math.sin(this.distance) * 0.01;

      const scale = this.scene.scale.x + curve;
      this.scene.scale.set(scale, scale, scale);
      this.scene.rotation.x += delta;
      this.scene.rotation.y += delta;
      this.scene.rotation.z += delta / 10;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
