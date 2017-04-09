// index.ios.js
import React from 'react';
import ReactNative, { Alert, AppState, AppRegistry, TabBarIOS, Linking, NavigatorIOS, Keyboard } from 'react-native';
import HomeTab from './app/Tabs/HomeTab';
import VideoTab from './app/Tabs/VideoTab';
import AboutTab from './app/Tabs/About/AboutTab';
import Notes from './app/Tabs/Notes';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

const barTintColor = 'gray';

export default class TheTable extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      selectedTab: 'homeTab',
      selectedNav: null,
      text: '',
      subject: '',
      reload: false,
    };
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  
  onTextChange(e) {
    this.setState({ text: e });
  }

  onSubjectChange(e) {
    this.setState({ subject: e });
  }

  handleNavigationRequest() {
    Linking.canOpenURL(`mailto:?subject=${this.state.subject}&body=${this.state.text}`).then((supported) => {
      if (supported) {
        Linking.openURL(`mailto:?subject=${this.state.subject}&body=${this.state.text}`);
      } else {
        Alert.alert('Error', 'Don\'t know how to open URI: ');
      }
    });
    Keyboard.dismiss;
  }

  handleAppStateChange(state) {
    if (state === 'active') {
      console.log(state);
      // this.setState({ reload: true });
    }
  }
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="black"
        tintColor="white"
        barTintColor="gray"
      >
        <Icon.TabBarItemIOS
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home-outline"
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.state.selectedNav.popToTop(0);
            this.setState({ selectedTab: 'homeTab' });
          }}
          renderAsOriginal
        >
          <NavigatorIOS
            ref={(nav) => {
              this.state.selectedNav = nav;
            }}
            initialRoute={{
              component: HomeTab,
              title: 'Home',
              passProps: { reload: this.state.reload },
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
            titleTextColor="white"
          />

        </Icon.TabBarItemIOS>
        <Icon2.TabBarItemIOS
          title="Videos"
          iconName="social-youtube"
          selectedIconName="social-youtube"
          selected={this.state.selectedTab === 'videoTab'}
          onPress={() => {
            this.setState({ selectedTab: 'videoTab' });
          }}
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
        </Icon2.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Notes"
          iconName="ios-clipboard-outline"
          selectedIconName="ios-clipboard-outline"
          selected={this.state.selectedTab === 'Notes'}
          onPress={() => {
            this.setState({
              selectedTab: 'Notes',
            });
          }}
          renderAsOriginal
        >
          <NavigatorIOS
            initialRoute={{
              component: Notes,
              title: 'Notes',
              rightButtonTitle: 'Share',
              onRightButtonPress: () => this.handleNavigationRequest(),
              passProps: { onChangeText: this.onTextChange, onSubjectChange: this.onSubjectChange },
            }}
            style={{ flex: 1 }}
            barTintColor={barTintColor}
            titleTextColor="white"
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="About"
          iconName="ios-information-circle-outline"
          selectedIconName="ios-information-circle-outline"
          selected={this.state.selectedTab === 'aboutTab'}
          onPress={() => {
            this.state.selectedNav.popToTop(0);
            this.setState({
              selectedTab: 'aboutTab',
            });
          }}
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
        </Icon.TabBarItemIOS>

      </TabBarIOS>

      //  </View>
    );
  }
}

AppRegistry.registerComponent('TheTable', () => TheTable);
