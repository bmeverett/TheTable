// index.ios.js
import React from 'react';
import ReactNative, { AppRegistry, TabBarIOS, StyleSheet, Text, View, Platform, NavigatorIOS } from 'react-native';
import HomeTab from './app/Tabs/HomeTab';
import VideoTab from './app/Tabs/VideoTab';
import AboutTab from './app/Tabs/AboutTab';

export default class TheTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'homeTab',
    };
  }
  render() {
    return (
      // <View style={styles.container}>
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="black"
      >
        <TabBarIOS.Item

          title="Home"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({ selectedTab: 'homeTab' });
          }}
        >
          <NavigatorIOS
            initialRoute={{
              component: HomeTab,
              title: 'The Table',
            }}
            style={{ flex: 1 }}
            barTintColor="black"
            titleTextColor="white"
          />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Videos"
          selected={this.state.selectedTab === 'videoTab'}
          onPress={() => {
            this.setState({ selectedTab: 'videoTab' });
          }}
        >
          <VideoTab />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="About"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.setState({ selectedTab: 'aboutTab' });
          }}
        >
          <AboutTab />
        </TabBarIOS.Item>

      </TabBarIOS>

      //  </View>
    );
  }
}

AppRegistry.registerComponent('TheTable', () => TheTable);
