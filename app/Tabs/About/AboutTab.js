import React from 'react';
import ReactNative, { View, ScrollView, SegmentedControlIOS, Image } from 'react-native';
import Who from './Who';
import Where from './Where';
import Times from './Times';


export default class AboutTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    var ctrl;
    if (this.state.selectedIndex === 0) {
      ctrl = <Who />;
    } else if (this.state.selectedIndex === 1) {
      ctrl = <Where />;
    } else {
      ctrl = <Times />;
    }
    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }} >
        <View style={{ alignItems: 'center', paddingBottom: 10 }} >
          <Image
            source={require('../../images/thetablesmall.png')}
          />
        </View>
        <SegmentedControlIOS
          values={['Who We Are', 'Where We Meet', 'Times We Meet']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
          }}
          style={{ padding: 10 }}
          tintColor='#E5D767'
        />
        {ctrl}
      </ScrollView>);
  }

}

