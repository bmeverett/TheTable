// index.ios.js
import React from 'react';
import ReactNative, { Alert, AppRegistry, TabBarIOS, ActionSheetIOS, Text, View, Linking, NavigatorIOS } from 'react-native';
import HomeTab from './app/Tabs/HomeTab';
import VideoTab from './app/Tabs/VideoTab';
import AboutTab from './app/Tabs/About/AboutTab';
import Notes from './app/Tabs/Notes';

const barTintColor = 'gray';

export default class TheTable extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.state = {
      selectedTab: 'homeTab',
      selectedNav: null,
      text: '',
    };
  }

  onTextChange(e) {
    this.setState({ text: e });
  }

  handleNavigationRequest() {
    Linking.canOpenURL('mailto:info@thetableinbetween.org').then((supported) => {
      if (supported) {
        Linking.openURL('mailto:info@thetableinbetween.org');
      } else {
        Alert.alert('Error', 'Don\'t know how to open URI: ');
      }
    });
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
            this.state.selectedNav.popToTop(0);
            this.setState({ selectedTab: 'homeTab' });
          }}
          icon={require('./app/images/home-7.png')}
          renderAsOriginal
        >
          <NavigatorIOS
            ref={(nav) => {
              this.state.selectedNav = nav;
            }}
            initialRoute={{
              component: HomeTab,
              title: 'Home',
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
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
              title: 'Vidoes',
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
            titleTextColor="white"
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Notes"
          selected={this.state.selectedTab === 'notesTab'}
          onPress={() => {
            this.setState({ selectedTab: 'notesTab' });
          }}
          icon={require('./app/images/note3.png')}
          selectedIcon={require('./app/images/note3.png')}
          renderAsOriginal
        >
          <NavigatorIOS
            initialRoute={{
              component: Notes,
              title: 'Notes',
              rightButtonTitle: 'Share',
              onRightButtonPress: () => this.handleNavigationRequest(),
              passProps: { onChangeText: this.onTextChange },
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
            titleTextColor="white"
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="About"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.state.selectedNav.popToTop(0);
            this.setState({ selectedTab: 'aboutTab' });
          }}
          icon={require('./app/images/icon-25.png')}
          selectedIcon={require('./app/images/icon-25.png')}
          renderAsOriginal

        >
          <NavigatorIOS
            ref={(nav) => {
              this.state.selectedNav = nav;
            }}
            initialRoute={{
              component: AboutTab,
              title: 'About',
             
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
            titleTextColor="white"
          />
        </TabBarIOS.Item>

      </TabBarIOS>

      //  </View>
    );
  }
}

AppRegistry.registerComponent('TheTable', () => TheTable);
