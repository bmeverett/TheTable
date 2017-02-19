import React from 'react';
import ReactNative, { Text, View, ScrollView, StyleSheet, Button, Alert, TouchableHighlight, Image } from 'react-native';
import Who from './Who';
import Where from './Where';
import Times from './Times';

const style = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
export default class AboutTab extends React.Component {
  buttonPressed() {
    Alert.alert('Pressed');
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 63 }} >
        <View style={{ alignItems: 'center', backgroundColor: 'gray' }} >
           <Image 
            source={require('../../images/thetablesmall.png')}
          />
       
        </View>
        <View >
          <Button
            onPress={() => {
              this.props.navigator.push({
                component: Who,
                title: 'Who we Are',
              });
            }}
            title="Who we Are"
          />
          <Button
            onPress={() => {
              this.props.navigator.push({
                component: Where,
                title: 'Where we Meet',
              });
            }}
            title="Where we Meet"
          />
          <Button
            onPress={() => {
              this.props.navigator.push({
                component: Times,
                title: 'Times we Meet',
              });
            }}
            title="Times we Meet"
          />
        </View>
      </View>);
  }

}

