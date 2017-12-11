import React from 'react';
import ItemShowcaseMore from './ItemShowcaseMore';

export default class CaseStudy extends React.Component {

  render() {
    const {case_study, more_case_studies} = this.props;

    return (
      <div className="case-study">
        <section className='slide slide0'>
          <div className="fullscreen-video">
            <video src={case_study.video_url} autoPlay loop muted></video>
          </div>

          <div className="img-background">
            <span className="case-study-name">
              <h1 className="case-study-heading">{case_study.title}</h1>
              <div className="technologies">
                {
                  case_study.technologies.split(',').map((tech) => tech.trim()).join(' · ')
                }
              </div>
              <div className="itemOptions case-study-button">
                <div className="linkButton caseStudy">
                  <a href={case_study.site_url} className="button" target="_blank">SITE</a>
                </div>
              </div>
            </span>

            <div className="scroll-down">
              <div className="mouse">
                <div className="scroller"></div>
              </div>
              <p className="scroll-text">Scroll</p>
            </div>
          </div>

        </section>

        <section className='slide slide1'>
          <div
            className="img-background"
            style={{backgroundImage:`url('${case_study.description_image_url}')`}}
          >
            <div className="overlay"></div>
            <div className="info">
              <p className="module-content">{case_study.description}</p>
            </div>
          </div>
        </section>

        <section className='slide slide3'>
          <div
            className="img-background"
            style={{backgroundImage:`url('${case_study.challenges_image_url}')`}}>
            <div className="overlay"></div>
            <div className="info">
              <p className="module-content">{case_study.challenges}</p>
            </div>
          </div>
        </section>

        <section className='slide slide4'>
          <ItemShowcaseMore case_studies={this.props.more_case_studies} />
        </section>
      </div>
    )
  }
}
