import React from 'react';
import { WebView } from 'react-native';

export default class LiveView extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://thetable.churchonline.org' }}
      />
    );
  }
}
