import React, { PropTypes } from 'react';
import {TweenMax, TimelineLite} from 'gsap';

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

    if (!this.form.checkValidity()) {
      return;
    }

    this.setState({
      status: 'sending',
      username: this.name.value
    });

    new TimelineLite({onComplete: () => {

      // Remove form and set up success div for animation
      this.form.style.display = 'none';
      this.successDiv.style.display = 'flex';

      TweenMax.fromTo('.success-msg', 2, {scaleX: 0, scaleY: 0}, {scaleX: 1, scaleY: 1, ease: Elastic.easeOut.config(1, 0.3)});

    }}).staggerFromTo('.input-row, .input-container', 0.5, {opacity: 1}, {opacity: 0}, 0.2);

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

        <div ref={(div) => this.successDiv = div} className="success-msg">
          <div className="message-content">
            <p>Hola <span className="username">{this.state.username}</span>! ✌️</p>
            <p>I hope you're having -or had- a great day.</p>
            <p>Thanks for writing, I'll be in touch soon!</p>
            <p className="myName">Marian 😜</p>
          </div>
        </div>

        <form ref={(form) => this.form = form} onSubmit={(e) => {this.sendInfo(e)}} className="contact-form">

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
            <button type="submit">SAY HOLA!</button>
          </div>
        </form>
      </div>
    );
  }
}
