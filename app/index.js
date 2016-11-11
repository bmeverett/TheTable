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

var YouTube = require('react-native-youtube');
var HomeTab = require('./Tabs/HomeTab');
var VideoTab = require('./Tabs/VideoTab');
var AboutTab = require('./Tabs/AboutTab');


export default class TheTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'homeTab',
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    };
  }

  render() {
    const { page } = this.state;
     const tabbarStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);
    var tabInput;
    if(page === 'homeTab') {
      tabInput = <HomeTab />;
    }
    else if (page ==='videosTab'){
        tabInput = <VideoTab />;
    }
    else {
        tabInput = <AboutTab/>;
    }
    return (
      <View style={styles.container}>
        <Tabs
            selected={page}
            style={tabbarStyles}
            selectedStyle={{color:'blue'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="homeTab">Home</Text>
            <Text name="videosTab">Videos</Text>
            <Text name="aboutTab">About</Text>
        </Tabs>

          {tabInput}

      </View>
    );
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
