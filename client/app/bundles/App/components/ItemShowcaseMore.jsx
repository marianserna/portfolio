import React from 'react';

export default class ItemShowcaseMore extends React.Component {
  render() {
    return (
      <div className="itemShowcase-more">
        {
          this.props.case_studies.map((more) => {
            return (
              <div className="more-container" key={more.id}>
                <div
                  className="background-more"
                  style={{backgroundImage:`url('${more.image_url}')`}}>

                  <div className="bigLetters">
                    <h3>{more.title}</h3>
                    {/* <a href={`/work/${more.slug}`} className="button">View</a> */}
                    <a href={this.props.case_studies[this.state.currentItem - 1].site_url} className="button" target="_blank">SITE</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
