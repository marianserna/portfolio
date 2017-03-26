import React from 'react';
import SphereScene from './SphereScene'
import {TweenMax, TimelineLite} from 'gsap';
import './DrawSVGPlugin';
import SplitText from './SplitText';
import FontAwesome from 'react-fontawesome';

export default class Sphere extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      detailsClass: 'inactive'
    };
  }

  componentDidMount() {
    this.sphere = new SphereScene(
      this.sphereContainer,
      // this.particles = new Particles(this.particlesContainer).bind(this),
      this.activateInfo.bind(this),
      this.deactivateInfo.bind(this)
    );

    TweenMax.fromTo('h1', 1,
      {css: {y: 125}},
      {css: {y: 0}, delay: 0.8, ease: Power4.easeOut, onComplete: () => {
        document.querySelector('h3').classList.remove('hidden');

        const tl = new TimelineLite();
        const title = new SplitText("h3", {type: "words,chars"});
        const chars = title.chars;

        tl.staggerFromTo(chars, 0.3, {opacity: 0}, {opacity: 1}, 0.05);
      }}
    );
  }

  activateInfo() {
    this.setState({
      detailsClass: 'active'
    });
    TweenMax.staggerFromTo("path.line", 2, {drawSVG: "0"}, {drawSVG: true}, 0.6);
    TweenMax.staggerFromTo(".lineContainer p", 2, {opacity: "0"}, {opacity: "1", delay: 1.2}, 0.6);
  }

  deactivateInfo() {
    this.setState({
      detailsClass: 'inactive'
    });
    TweenMax.fromTo("path.line", 2, {drawSVG: true}, {drawSVG: "0"});
  }

  render() {
    return(
      <div id="landingSphere">
        <div id="sphere" ref={(div) => this.sphereContainer = div}></div>
        <span className="name">
          <h1>Marian Serna</h1>
        </span>
        <h3 className="title hidden">Interactive Developer</h3>

        <div className="social">
          <a className="github" href="https://github.com/marianserna?tab=repositories" target="_blank">
            <FontAwesome
              className='fa-icon'
              name='github'
              size='2x'
            />
            GITHUB
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/marian-serna-1762337b/" target="_blank">
            <FontAwesome
              className='fa-icon'
              name='linkedin'
              size='2x'
            />
            LINKEDIN
          </a>
        </div>

        <div className={['details', this.state.detailsClass].join(' ')}>

          <div className="lineContainer topLeft">
            <p>Started in development as a way to challenge herself</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.25 33.66">
              <title>topLeft</title>
              <path id="topLeft" className="line" d="M165,33.38l-37-33H0"/>
            </svg>
          </div>

          <div className="lineContainer topRight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.25 33.66">
              <title>topRight</title>
              <path id="topRight" className="line" d="M.25,33.38l37-33h128"/>
            </svg>
            <p>Gets a version of "The Little Prince" from every country she visits</p>
          </div>

          <div className="lineContainer bottomRight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.25 33.66">
              <title>bottomRight</title>
              <path id="bottomRight" className="line" d="M.25.28l37,33h128"/>
            </svg>
            <p>Grew up on a coffee farm</p>
          </div>

          <div className="lineContainer bottomLeft">
            <p>Can't stop eating empanadas</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.25 33.66">
              <title>bottomLeft</title>
              <path id="bottomLeft" className="line" d="M165,.28l-37,33H0"/>
            </svg>
          </div>

        </div>

        <p className="instructions"><i>Hover Icosahedron</i></p>
      </div>

    )
  }
}
