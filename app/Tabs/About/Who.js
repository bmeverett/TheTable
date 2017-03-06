import React from 'react';
import { View, Text } from 'react-native';

export default function Who(props) {
  return (
    <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>
      <Text>
         Officially launching on September 6, 2014, The Table is a ministry of Riverside Community Church geared towards young adults. 
         The Table is designed to offer an atmosphere where questions, doubt, and truth can be expressed in relation to one’s spiritual journey toward God. It’s a place of community where people can get invested in each other’s lives and grow in relationship with God in the process. Whether you find yourself in a classroom, office, or home during the week, non-believing, believing or indifferent, come to The Table to wrestle with life’s biggest questions while joining others of like mind and life stage. Our weekly meeting times will include coffee and discussion, and we will be eating a full meal together once a month.
      </Text>
      <Text style={{ fontWeight: 'bold' }}>{'\n'}Our Mission{'\n'}</Text>
      <Text>The Mission of The Table is to help young adults find and follow Jesus. </Text>
    </View>
  );
}
