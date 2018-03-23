import React from 'react';
import ReactNative, { View, ScrollView, SegmentedControlIOS, Image } from 'react-native';
import Who from './Who';
import Where from './Where';
import Times from './Times';


export default class AboutTab extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }} >
        <View style={{ alignItems: 'center', paddingBottom: 10 }} >
          <Image
            source={require('../../images/thetablesmall.png')}
          />
        </View>
        <Who style={{ flex: 1 }} />
        <Where />
        <Times />
      </ScrollView>);
  }

}

