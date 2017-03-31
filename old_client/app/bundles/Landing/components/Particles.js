import Sketch from 'sketch-js';

class Particle {
  constructor(x, y, radius) {
    this.init(x, y, radius);
  }

  init(x, y, radius) {
    this.alive = true;
    this.radius = radius || 4;
    this.wander = 0.15;
    this.theta = random(TWO_PI);
    this.drag = 0.92;
    this.color = '#FFFFFF';
    this.x = x || 0.0;
    this.y = y || 0.0;
    this.vx = 0.0;
    this.vy = 0.0;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.theta += random(-0.5, 0.5) * this.wander;
    this.vx += sin(this.theta) * 0.1;
    this.vy += cos(this.theta) * 0.1;
    this.radius *= 0.96;
    this.alive = this.radius > 0.5;
  }

  draw(ctx) {
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default class Particles {
  constructor(container) {
    this.container = container;

    this.init();

    const particle = new Particle(0, 0);
  }

  init() {
    // particles currently alive
    this.particles = [];
    // available particles
    this.pool = [];
    this.max_particles = 100;
    this.colours = ['#1F2B40', '#9A9FB6', '#F2C640', '#1FDA9A', '#9068BE'];

    this.sketch = Sketch.create({
      container: this.container,
      retina: 'auto'
    });

    this.sketch.update = () => {
      for ( let i = this.particles.length - 1; i >= 0; i-- ) {
        const particle = this.particles[i];
        if ( particle.alive ) {
          particle.move();
        } else {
          this.pool.push( this.particles.splice( i, 1 )[0] );
        }
      }
    };

    this.sketch.draw = () => {
      this.sketch.globalCompositeOperation  = 'lighter';
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].draw(this.sketch);
        }
    };

    this.sketch.mousemove = () => {
      const n = this.sketch.touches.length;
      for (let i = 0; i < n; i++) {
        const touch = this.sketch.touches[i];
        const max = random( 1, 4 );
        for ( let j = 0; j < max; j++ ) {
          this.spawn( touch.x, touch.y );
        }
      }
    }
  }

  spawn(x, y) {
    if (this.particles.length >= this.max_particles)
      this.pool.push( this.particles.shift() );
    const particle = this.pool.length ? this.pool.pop() : new Particle();
    particle.init( x, y, random( 3, 8 ) );
    particle.wander = random( 0.5, 2.0 );
    particle.color = random( this.colours );
    particle.drag = random( 0.9, 0.99 );
    const theta = random( TWO_PI );
    const force = random( 2, 8 );
    particle.vx = sin( theta ) * force;
    particle.vy = cos( theta ) * force;
    this.particles.push( particle );
  }
}
