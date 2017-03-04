import React from 'react';
import ReactNative, { Text, View, ScrollView, StyleSheet, Button, Alert, TouchableHighlight, Image } from 'react-native';
import Who from './Who';
import Where from './Where';
import Times from './Times';

const style = StyleSheet.create({
  button: {
    borderWidth: 10,
    borderRadius: 15,
    borderColor: 'gray',
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default class AboutTab extends React.Component {
  buttonPressed() {
    Alert.alert('Pressed');
  }
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }} >
        <View style={{ alignItems: 'center' }} >
          <Image
             source={require('../../images/thetablesmall.png')}
          />
        </View>
        <View style={{ alignItems: 'center', padding: 10 }} >
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({
                component: Who,
                title: 'Who We Are',
              });
            }}
            style={style.button}
          >
            <Text style={style.buttonText}> Who We Are </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({
                component: Where,
                title: 'Where We Meet',
              });
            }}
            style={style.button}
          >
            <Text style={style.buttonText}> Where We Meet </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({
                component: Times,
                title: 'Times We Meet',
              });
            }}
            style={style.button}
          >
            <Text style={style.buttonText}> Times We Meet </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>);
  }

}

