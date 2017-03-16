import React from 'react';
import {Menu, MainButton, ChildButton} from 'react-mfb';

export default class NavMenu extends React.Component {
  render() {
    return(
      <Menu effect="slidein-spring" method="click" position="tr">
        <MainButton iconResting="ion-drag" iconActive="ion-close-round" />

        <ChildButton
          icon="ion-ios-home"
          label="Home"
          onClick = {(e) => {}}
          href="/"
        />

        <ChildButton
          icon="ion-android-laptop"
          label="Work"
          onClick = {(e) => {}}
          href="/work"
        />

        <ChildButton
          icon="ion-android-person"
          label="About"
          onClick = {(e) => {}}
          href="/about"
        />

        <ChildButton
          icon="ion-email"
          label="Contact"
          onClick = {(e) => {}}
          href="/contact"
        />
      </Menu>
    )
  }
}
