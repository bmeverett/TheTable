import React from 'react';
import { Text, View } from 'react-native';

export default function Where(props) {
  return (
     <View style={{ flex: 1, paddingTop: 100, paddingHorizontal: 10 }} >
       <Text style={{ fontWeight: 'bold' }} >Address </Text>
       <Text>Riverside Community Church - Parkside Campus</Text>
       <Text>{'\n'}800 3rd Street </Text>
       <Text>{'\n'}Oakmont, PA 15139 </Text>
       <Text>{'\n\n'}Contact</Text>
       <Text style={{ fontWeight: 'bold' }}>{'\n'}Email: </Text>
       <Text>info@thetableinbetween.org</Text>
       <Text style={{ fontWeight: 'bold' }}>{'\n'}Phone:</Text>
       <Text>412.828.2488</Text>
     </View>
  );
}
