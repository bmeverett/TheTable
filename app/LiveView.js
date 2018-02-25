import React from 'react';
import { WebView, View, Text, Image } from 'react-native';

export default class LiveView extends React.Component {
  render() {
    const today = new Date();
    let ctrl = '';
    if (today.getDay() === 2) {
      // Tuesday show live stream
      ctrl = <View style={{ flex: 1 }} ><WebView style={{ flex: 1 }} source={{ uri: 'https://thetable.churchonline.org' }} /></View>;
    } else {
      ctrl = (<View style={{ flex: 1, backgroundColor: '#8c8b8a', alignItems: 'center' }} >
        <Image style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} resizeMode="center" source={require('./images/tablelive.png')} />
      </View>);
    }
    return (
      <View style={{ flex: 1 }} >
        { ctrl }
      </View>
    );
  }
}
