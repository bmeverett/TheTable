import React from 'react';
import { Text, View, TouchableHighlight, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    
  },
});

export default function Where(props) {
  return (
    <View style={{ flex: 1, paddingTop: 100, paddingHorizontal: 10 }} >
      <Text style={{ fontWeight: 'bold' }} >Address </Text>
      <Text>Riverside Community Church - Parkside Campus</Text>
      <Text>{'\n'}800 3rd Street </Text>
      <Text>{'\n'}Oakmont, PA 15139 </Text>
      <Text>{'\n\n'}Contact</Text>
      <Text style={{ fontWeight: 'bold' }}>{'\n'}Email: </Text>
      <TouchableHighlight
        onPress={() => {
          Linking.canOpenURL('mailto:info@thetableinbetween.org').then((supported) => {
            if (supported) {
              Linking.openURL('mailto:info@thetableinbetween.org');
            } else {
              console.log(`Don't know how to open URI`);
            }
          });
        }}
        style={styles.button}
        underlayColor='white'
      >
        <Text style={{ color: 'blue' }} >info@thetableinbetween.org</Text>
      </TouchableHighlight>
      <Text style={{ fontWeight: 'bold' }}>{'\n'}Phone:</Text>
      <TouchableHighlight
        onPress={() => {
          Linking.canOpenURL('tel:4128282488').then((supported) => {
            if (supported) {
              Linking.openURL('tel:4128282488');
            } else {
              console.log(`Don't know how to open URI`);
            }
          });
        }}
        style={styles.button}
        underlayColor='white'
      >
        <Text style={{ color: 'blue' }} >412.828.2488</Text>
      </TouchableHighlight>
    </View>
  );
}
