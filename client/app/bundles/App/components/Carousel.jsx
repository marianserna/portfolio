import React from 'react';
import Hammer from 'hammerjs';

export default class Carousel extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      currentItem: 3,
      offsetDeg: 0
    };
    this.isDragging = false;
    this.itemInfo = [
      {study: 'https://github.com/', github: 'https://github.com/', site: 'https://github.com/'},
      {study: 'https://github.com/', github: 'https://github.com/', site: 'https://github.com/'},
      {study: 'https://github.com/', github: 'https://github.com/', site: 'https://github.com/'},
      {study: 'https://github.com/', github: 'https://github.com/', site: 'https://github.com/'},
      {study: 'https://github.com/', github: 'https://github.com/', site: 'https://github.com/'}
    ]
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (this.isDragging) {
        return;
      }

      if (e.key === 'ArrowLeft' && this.state.currentItem > 1) {
        this.setState({currentItem: this.state.currentItem - 1});
      } else if (e.key === 'ArrowRight' && this.state.currentItem < 5) {
        this.setState({currentItem: this.state.currentItem + 1});
      }
    });
    this.captureDrag();
  }

  captureDrag() {
    const hammerTime = new Hammer(this.carousel, {direction: Hammer.DIRECTION_HORIZONTAL});
    hammerTime.on('pan', (e) => {
      const dragDeg = e.deltaX * -0.05;

      if (e.isFinal) {
        setTimeout(() => {
          let newItem = this.state.currentItem;
          if (dragDeg > 5 && this.state.currentItem < 5) {
            newItem++;
          } else if (dragDeg < 5 && this.state.currentItem > 1) {
            newItem--;
          }
          this.isDragging = false;
          this.setState({
            offsetDeg: 0,
            currentItem: newItem
          });
        }, 200);
      } else {
        this.isDragging = true;
        this.setState({
          offsetDeg: dragDeg
        });
      }
    });
  }

  transitionTo(item) {
    if (this.isDragging) {
      return;
    }
    this.setState({
      currentItem: item
    });
  }

  calcTransform(item) {
    const diff = this.state.currentItem - item;
    const deg = (diff * 45) - 315 + this.state.offsetDeg;
    return {
      transform: `translateZ(840px) rotateY(315deg) rotateY(${deg}deg) translateZ(-840px)`
    };
  }

  render() {
    return(
      <div>
        <div className="carousel-container">
          <div className="carousel" ref={(div) => this.carousel = div}>

            <figure className="itemShowcase libelula" style={this.calcTransform(1)} onClick={(e) => this.transitionTo(1)}>
              <div className="bigLetters">
                <h3>Lego</h3>
              </div>

              <img src="libelula.svg" className="imacToLeft" alt="mackBook image"/>
              <img src="blueToPurple.svg" className="circleToLeft" alt="circle"/>
              <img src="dragonfly.png" className="dragonfly" alt="mackBook image"/>

              <div className="floatInfoLeft">
                <p>Cinema4D</p>
                <p>HTML5</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>

              <div className="floatInfoRight">
                <p>Initial approach to 3D and interactivity</p>
              </div>
            </figure>

            <figure className="itemShowcase music" style={this.calcTransform(2)} onClick={(e) => this.transitionTo(2)}>
              <div className="bigLetters">
                <h3>MusicMap</h3>
              </div>

              <img src="musica.svg" className="imacToRight" alt="mackBook image"/>
              <img src="blueToPurple.svg" className="circleToRight" alt="circle"/>

              <div className="floatInfoLeft">
                <p>React on Rails</p>
                <p>Amazon Rekognition API</p>
                <p>Speech Synthesis</p>
                <p>Speech Recognition</p>
              </div>

              <div className="floatInfoRight">
                <p>An app concept for the visually impared</p>
              </div>
            </figure>


            <figure className="itemShowcase particles" style={this.calcTransform(3)} onClick={(e) => this.transitionTo(3)}>
              <div className="bigLetters">
                <h3>inFront</h3>
              </div>

              <img src="inFront.svg" alt="iphone image"/>
              <img src="blueToPurple.svg" className="floatPhoneTopLeft" alt="circle"/>

              <div className="floatInfoLeft">
                <p>React on Rails</p>
                <p>Amazon Rekognition API</p>
                <p>Speech Synthesis</p>
                <p>Speech Recognition</p>
              </div>

              <div className="floatInfoRight">
                <p>An app concept for the visually impared</p>
              </div>
            </figure>

            <figure className="itemShowcase llama" style={this.calcTransform(4)} onClick={(e) => this.transitionTo(4)}>
              <div className="bigLetters">
                <h3>Llama Campus</h3>
              </div>

              <img src="llama.svg" className="imacToRight" alt="mackBook image"/>
              <img src="blueToPurple.svg" className="circleToLeft" alt="circle"/>

              <div className="floatInfoLeft">
                <p>React on Rails</p>
                <p>Amazon Rekognition API</p>
                <p>Speech Synthesis</p>
                <p>Speech Recognition</p>
              </div>

              <div className="floatInfoRight">
                <p>An app concept for the visually impared</p>
              </div>
            </figure>

            <figure className="itemShowcase octocat" style={this.calcTransform(5)} onClick={(e) => this.transitionTo(5)}>
              <div className="bigLetters">
                <h3>GitLog</h3>
              </div>

              <img src="gitlog.svg" className="imacToLeft" alt="mackBook image"/>
              <img src="blueToPurple.svg" className="circleToRight" alt="circle"/>

              <div className="floatInfoLeft">
                <p>React on Rails</p>
                <p>Amazon Rekognition API</p>
                <p>Speech Synthesis</p>
                <p>Speech Recognition</p>
              </div>

              <div className="floatInfoRight">
                <p>An app concept for the visually impared</p>
              </div>
            </figure>
          </div>
        </div>

        <div className="itemOptions">
          <div className="linkButton">
            <a href={this.itemInfo[this.state.currentItem - 1].study}>CASE STUDY</a>
          </div>
          <div className="linkButton">
            <a href={this.itemInfo[this.state.currentItem - 1].github}>GITHUB</a>
          </div>
          <div className="linkButton">
            <a href={this.itemInfo[this.state.currentItem - 1].site}>SITE</a>
          </div>  
        </div>
      </div>
    );
  }
}
