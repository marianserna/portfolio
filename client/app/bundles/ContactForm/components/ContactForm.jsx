import React, { PropTypes } from 'react';

export default class ContactForm extends React.Component {
  static propTypes = {};

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      status: 'pending',
      username: ''
    };
  }

  sendInfo(e) {
    e.preventDefault();
    this.setState({
      status: 'sending',
      username: this.name.value
    });

    fetch('/contacts', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        'contact': {
          'name': this.name.value,
          'email': this.email.value,
          'message': this.message.value
        }
      })
    }).then(response => response.json()).then((data) => {
      this.setState({
        status: 'sent'
      });
    });
  }

  toggleLabel(e) {
    const targetValue = e.target.value;
    if (targetValue) {
      e.target.classList.add('input-field--filled');
    } else {
      e.target.classList.remove('input-field--filled');
    }
  }

  render() {
    return (
      <div id="contact">
        <h2>{this.state.status}</h2>
        <form onSubmit={(e) => {this.sendInfo(e)}} className="contact-form">

          <div className="input-row">
            <span className="input-wrapper">
              <input className="input-field" type="text" id="name" name="name" required ref = {(input) => this.name = input} onChange={(e) => this.toggleLabel(e)} />
              <label className="input-label" htmlFor="name">Name</label>
            </span>
          </div>

          <div className="input-row">
            <span className="input-wrapper">
              <input className="input-field" type="email" id="email" name="email" required ref = {(input) => this.email = input} onChange={(e) => this.toggleLabel(e)} />
              <label className="input-label" htmlFor="email">Email</label>
            </span>
          </div>

          <div className="input-row">
            <span className="input-wrapper">
              <textarea className="input-field" name="message" id="message" required ref = {(input) => this.message = input} onChange={(e) => this.toggleLabel(e)}></textarea>
              <label className="input-label" htmlFor="message">Message</label>
            </span>
          </div>

          <div className="input-container">
            <button type="submit">Say Hola!</button>
          </div>
        </form>
      </div>
    );
  }
}
