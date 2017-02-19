import React from 'react';
import { View, Text } from 'react-native';

export default function Times(props) {
  return (
    <View style={{ flex: 1, paddingTop: 100, paddingHorizontal: 10 }}>
      <Text>
        EACH WEEK WE SPEND TIME IN COMMUNITY AND DISCUSS A PASSAGE OF THE BIBLE. ON THE LAST TUESDAY OF EVERY MONTH WE EAT A FULL MEAL TOGETHER. 
      </Text>
      <Text>{'\n'}Times </Text>
      <Text>{'\n'}Weekly: Tuesdays, 7PM - 9PM </Text>
      <Text>{'\n'}Monthly Meal (last Tuesday of the month): 7PM - 9PM </Text>
    </View>
  );
}
