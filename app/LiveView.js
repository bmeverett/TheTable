import React from 'react';
import { WebView, View, Text } from 'react-native';

export default class LiveView extends React.Component {
  render() {
    const today = new Date();
    let ctrl = '';
    if (today.getDay() === 2) {
      // Tuesday show live stream
      ctrl = <WebView style={{ flex: 1 }} source={{ uri: 'https://thetable.churchonline.org' }} />;
    } else {
      ctrl = <Text style={{ fontSize: 24, textAlign: 'center' }} > The Table will be streamed live on Tuesday's at 7:30 PM! </Text>;
    }
    return (
      <View style={{ flex: 1 }} >
        {ctrl}
      </View>
    );
  }
}
