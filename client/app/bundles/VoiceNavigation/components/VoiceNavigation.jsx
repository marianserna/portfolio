import React from 'react';
import annyang from 'annyang';

export default class VoiceNavigation extends React.Component {
  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    annyang.debug(true);
    annyang.addCommands({
      'work': () => {window.location = '/work'},
      '*anything work': () => {window.location = '/work'},
      'contact': () => {window.location = '/contact'},
      '*anything contact': () => {window.location = '/contact'}
    });

    annyang.start();
  }

  render() {
    return null;
  }
}
