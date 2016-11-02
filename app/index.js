// app/index.js

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Platform
} = ReactNative;
import Tabs from 'react-native-tabs';

export default class TheTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'First'
    };
  }

  render() {
    const { page } = this.state;
     const tabbarStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);

    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={tabbarStyles}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="First">First</Text>
            <Text name="Second">Second</Text>
            <Text name="Third">Third</Text>
        </Tabs>

        <Text>The Table</Text>
        <Text>{page}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },
  androidTabbar: {
   top: 0,
   borderBottomColor: 'red',
   borderBottomWidth: 2,
   borderTopColor: 0
 }
});
