import React, { PropTypes } from 'react';
import Flying from './Flying';

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
  }

  render() {
    return (
      <div id="flying" ref={(div) => this.flyingContainer = div}>
      </div>
    );
  }
}
