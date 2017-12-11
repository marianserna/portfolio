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
                    <a href={more.site_url} className="button">View</a>
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
