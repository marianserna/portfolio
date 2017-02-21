import React, { PropTypes } from 'react';
import Flying from './Flying';
import Particles from './Particles';

export default class Landing extends React.Component {
  static propTypes = {};

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.flying = new Flying(this.flyingContainer);
    this.particles = new Particles(this.particlesContainer);
  }

  render() {
    return (
      <div id="landing">
        <nav className="menu">
          <ul>
            <li className="menu-item"><a href="#">Work</a></li>
            <li className="menu-item"><a href="#">About</a></li>
            <li className="menu-item"><a href="#">Posts</a></li>
            <li className="menu-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="name">
          <h1>Marian Serna</h1>
          <hr/>
          <h3>Interactive Developer</h3>
        </div>
        <div className="flying" ref={(div) => this.flyingContainer = div}></div>
        <div className="particles" ref={(div) => this.particlesContainer = div}></div>
      </div>
    );
  }
}
