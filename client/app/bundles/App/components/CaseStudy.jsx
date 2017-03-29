import React from 'react';
import {Fullpage, Slide, HorizontalSlider, changeFullpageSlide, changeHorizontalSlide} from 'fullpage-react';
import {TweenMax} from 'gsap';

export default class CaseStudy extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      activeSlide: 0,
      activeHorizontalSlide: 0
    };

    this.fullPageOptions = {
      onSlideChangeStart: (slider, info) => {
        if (slider === 'Fullpage') {
          this.sliderLeaving(info);
        }
      },
      onSlideChangeEnd: (slider, info) => {
        if (slider === 'Fullpage') {
          this.sliderAppearing(info);
        } else if (slider === 'code-highlights') {
          this.horizontalChange(info);
        }
      },
      hideScrollBars: true
    };
  }

  componentDidMount() {
    this.captureKeys();
  }

  sliderLeaving = (info) => {
    if (info.activeSlide === 1 || info.activeSlide === 3 || info.activeSlide === 4) {
      TweenMax.fromTo(`.slide${info.activeSlide} .overlay`, 0.25,
        {backgroundColor: 'rgba(0, 0, 0, 0.6)'},
        {backgroundColor: 'rgba(0, 0, 0, 0.0)', delay: 0.2});

      TweenMax.fromTo(`.slide${info.activeSlide} .info`, 0.25,
        {x: 0, color: '#FFFFFF', opacity: 1, delay: 0.2},
        {x: '100vw', color: '#E91E63', opacity: 0});
    }
  }

  sliderAppearing = (info) => {
    this.setState({
      activeSlide: info.activeSlide
    });

    if (info.activeSlide === 1 || info.activeSlide === 3 || info.activeSlide === 4) {
      const afterOverlay = () => {
        // document.querySelector('.slide1 .border').classList.add('active');
        TweenMax.fromTo(`.slide${info.activeSlide} .info`, 0.5,
          {x: '100vw', color: '#E91E63', opacity: 0},
          {x: 0, color: '#FFFFFF', opacity: 1, delay: 0.2});
      };

      TweenMax.fromTo(`.slide${info.activeSlide} .overlay`, 0.5,
        {backgroundColor: 'rgba(0, 0, 0, 0.0)'},
        {backgroundColor: 'rgba(0, 0, 0, 0.6)', delay: 0.2, onComplete: afterOverlay});
    }
  }

  horizontalChange = (info) => {
    this.setState({
      activeHorizontalSlide: info.activeSlide
    });
  }

  captureKeys() {
    document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowLeft') {
        changeHorizontalSlide('code-highlights', 'PREV');
      } else if (e.key === 'ArrowRight') {
        changeHorizontalSlide('code-highlights', 'NEXT');
      } else if (e.key === 'ArrowUp') {
        changeFullpageSlide('PREV');
      } else if (e.key === 'ArrowDown') {
        changeFullpageSlide('NEXT');
      }
    });
  }

  renderNav() {
    return (
      <div className="fullpage-nav">
        {
          [0, 1, 2, 3, 4, 5].map((page) => {
            return (
              <div
                key={page}
                className={this.state.activeSlide === page ? 'nav-droplet active' : 'nav-droplet'} onClick={(e) => changeFullpageSlide(page)} ></div>
            )
          })
        }
      </div>
    )
  }

  renderNextCode() {
    if (this.state.activeHorizontalSlide < this.props.code_highlights.length - 1) {
      return (
        <span className="arrow" alt="next arrow" onClick={() => changeHorizontalSlide('code-highlights', 'NEXT')}>⋙</span>
      )
    }
  }

  renderCodeHighlights() {
    return this.props.code_highlights.map((code_highlight) => {
      return (
        <Slide key={code_highlight.id}>
          <div
            className="img-background"
            style={{backgroundImage:`url('${code_highlight.image_url}')`}}>
            <div className="info code-highlight">
              <p className="highlight-content">{code_highlight.caption}</p>
            </div>
          </div>
        </Slide>
      )
    });
  }

  render() {
    const {case_study, more_case_studies} = this.props;

    return (
      <div className="case-study">
        <Fullpage {...this.fullPageOptions}>

          {this.renderNav()}
          {this.state.activeSlide === 2 ? this.renderNextCode() : null}

          <Slide className='slide0'>
            <div className="fullscreen-video">
              <video src={case_study.video_url} autoPlay loop muted></video>
            </div>

            <div className="img-background">
              <span className="case-study-name">
                <h2 className="case-study-heading">{case_study.title}</h2>
              </span>

              <div className="scroll-down">
                <div className="mouse">
                  <div className="scroller"></div>
                </div>
              </div>
            </div>

          </Slide>

          <Slide className='slide1'>
            <div
              className="img-background"     style={{backgroundImage:`url('${case_study.description_image_url}')`}}>
              <div className="overlay"></div>
              <div className="info">
                <p className="module-content">{case_study.description}</p>
              </div>
            </div>
          </Slide>

          <HorizontalSlider className='slide2' name="code-highlights" infinite={false}>
            {
              this.renderCodeHighlights()
            }
          </HorizontalSlider>

          <Slide className='slide3'>
            <div
              className="img-background"     style={{backgroundImage:`url('${case_study.technologies_image_url}')`}}>
              <div className="overlay"></div>
              <div className="info">
                <ul className="module-content">
                  {
                    case_study.technologies.split(',').map((tech) => {
                      return <li key={tech}>{tech}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </Slide>

          <Slide className='slide4'>
            <div
              className="img-background"
              style={{backgroundImage:`url('${case_study.challenges_image_url}')`}}>
              <div className="overlay"></div>
              <div className="info">
                <p className="module-content">{case_study.challenges}</p>
              </div>
            </div>
          </Slide>

          <Slide className='slide5'>
            <div className="itemShowcase-more">
              {
                more_case_studies.map((more) => {
                  return (
                    <div className="more-container" key={more.id}>
                      <div
                        className="background-more"
                        style={{backgroundImage:`url('${more.image_url}')`}}>

                        <div className="bigLetters">
                          <h3>{more.title}</h3>
                          <button>
                            <a href={`/work/${more.slug}`}>View</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Slide>
        </Fullpage>
      </div>
    )
  }
}
