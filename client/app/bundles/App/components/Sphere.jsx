import React from 'react';
import SphereScene from './SphereScene';
import { TweenMax, TimelineLite } from 'gsap';
import './DrawSVGPlugin';
import SplitText from './SplitText';
import FontAwesome from 'react-fontawesome';
import { Howl } from 'howler';

export default class Sphere extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {};
    this.addSong();
  }

  componentDidMount() {
    this.sphere = new SphereScene(this.sphereContainer);

    TweenMax.fromTo(
      'h1',
      1,
      { css: { y: 125 } },
      {
        css: { y: 0 },
        delay: 0.4,
        ease: Power4.easeOut,
        onComplete: () => {
          document.querySelector('h3').classList.remove('hidden');

          const tl = new TimelineLite();
          const title = new SplitText('h3', { type: 'words,chars' });
          const chars = title.chars;

          tl.staggerFromTo(chars, 0.3, { opacity: 0 }, { opacity: 1 }, 0.05);
        }
      }
    );

    this.song.play();
  }

  addSong() {
    this.song = new Howl({
      src: ['magic.wav'],
      volume: 0.1
    });
  }

  render() {
    return (
      <div id="landingSphere">
        <div id="sphere" ref={div => (this.sphereContainer = div)} />
        <span className="name">
          <h1>Marian Serna</h1>
        </span>
        <h3 className="title hidden">Developer</h3>

        <div className="social">
          <a
            className="github"
            href="https://github.com/marianserna?tab=repositories"
            target="_blank"
          >
            <FontAwesome className="fa-icon" name="github" size="2x" />
            GITHUB
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/marian-serna-1762337b/"
            target="_blank"
          >
            <FontAwesome className="fa-icon" name="linkedin" size="2x" />
            LINKEDIN
          </a>
        </div>
      </div>
    );
  }
}
