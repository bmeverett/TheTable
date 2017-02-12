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
        unselectedTintColor="black"
        tintColor="white"
        barTintColor="gray"
      >
        <TabBarIOS.Item

          title="Home"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({ selectedTab: 'homeTab' });
          }}
          icon={require('./app/images/home-7.png')}
          renderAsOriginal
        >
          <NavigatorIOS
            initialRoute={{
              component: HomeTab,
              title: 'The Table',
            }}
            style={{ flex: 1 }}
            barTintColor="gray"
            titleTextColor="white"
          />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Videos"
          selected={this.state.selectedTab === 'videoTab'}
          onPress={() => {
            this.setState({ selectedTab: 'videoTab' });
          }}
          icon={require('./app/images/video-player-7.png')}
          renderAsOriginal
        >
          <NavigatorIOS
            initialRoute={{
              component: VideoTab,
              title: 'The Table',
            }}
            style={{ flex: 1 }}
            barTintColor="gray"
            titleTextColor="white"
          />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="About"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.setState({ selectedTab: 'aboutTab' });
          }}
          icon={require('./app/images/icon-25.png')}
          selectedIcon={require('./app/images/icon-25.png')}
          renderAsOriginal
          
        >
          <NavigatorIOS
            initialRoute={{
              component: AboutTab,
              title: 'The Table',
            }}
            style={{ flex: 1 }}
            barTintColor="gray"
            titleTextColor="white"
          />
        </TabBarIOS.Item>

      </TabBarIOS>

      //  </View>
    );
  }
}

AppRegistry.registerComponent('TheTable', () => TheTable);
