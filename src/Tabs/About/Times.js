import React from 'react';
import {View, Text} from 'react-native';

export default function Times(props) {
  return (
    <View style={{flex: 1, paddingTop: 10, paddingHorizontal: 10}}>
      <Text style={{fontWeight: 'bold'}}>{'\n'}Times </Text>
      <Text>{'\n'}Weekly: Tuesdays, 7PM - 8:30PM </Text>
      <Text>{'\n'}Family Meal (last Tuesday of the month): 7PM - 8:30PM </Text>
    </View>
  );
}
