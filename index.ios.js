// index.ios.js

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Platform
} = ReactNative;

var HomeTab = require('./app/Tabs/HomeTab');
var VideoTab = require('./app/Tabs/VideoTab');
var AboutTab = require('./app/Tabs/AboutTab');
//var Tab = require('./app/Tab')
export default class TheTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'homeTab'
    };
  }
  _renderContent = (color: string, pageText: string, num?: number) => {
      return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
          <Text style={styles.tabText}>{pageText}</Text>
          <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        </View>
      );
    };
  render() {
    return (
      //<View style={styles.container}>

        <TabBarIOS  unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
          <TabBarIOS.Item
             
              title="Home"
              selected={this.state.selectedTab === 'homeTab'}
              onPress={() => {
            this.setState({selectedTab: 'homeTab'});
          }}
          >
            <HomeTab/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title="Videos"
              selected={this.state.selectedTab === 'videoTab'}
              onPress={() => {
            this.setState({selectedTab: 'videoTab'});
          }}
          >
            <VideoTab/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title="About"
              selected={this.state.selectedTab === 'aboutTab'}
              onPress={() => {
            this.setState({selectedTab: 'aboutTab'});
          }}
          >
            <AboutTab/>
          </TabBarIOS.Item>

        </TabBarIOS>
    //  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },

});

AppRegistry.registerComponent('TheTable', () => TheTable);
