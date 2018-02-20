import React from 'react';
import { Alert, Button, Keyboard, Linking } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import HomeTab from './Tabs/HomeTab';
import Notes from './Tabs/Notes';
import VideoTab from './Tabs/VideoTab';
import AboutTab from './Tabs/About/AboutTab';
import EntryDetail from './EntryDetail';
import LiveView from './LiveView';

const RootTabs = TabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarLabel: 'Home',
      title: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Videos: {
    screen: VideoTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Videos',
      title: 'Videos',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('LiveView')}
          title="Live"
        />
      ),
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon2
          name={focused ? 'social-youtube' : 'social-youtube'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }),
  },
  Notes: {
    screen: Notes,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Notes',
      title: 'Notes',
      headerRight: (
        <Button
          title="Share"
          onPress={() => {
            Linking.canOpenURL(`mailto:?subject=${navigation.state.params.subject}&body=${navigation.state.params.text}`).then((supported) => {
              if (supported) {
                Linking.openURL(`mailto:?subject=${navigation.state.params.subject}&body=${navigation.state.params.text}`);
              } else {
                Alert.alert('Error', 'Don\'t know how to open URI: ');
              }
            });
            Keyboard.dismiss();
          }
        }
        />
      ),
      headerLeft: (
        <Button
          title="Done"
          onPress={() => { Keyboard.dismiss(); }}
        />
      ),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-clipboard' : 'ios-clipboard-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }),
  },
  About: {
    screen: AboutTab,
    navigationOptions: {
      tabBarLabel: 'About',
      title: 'About',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-information-circle-outline' : 'ios-information-circle-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
},
  {
    tabBarOptions: {
      // activeTintColor: 'black',
      // tabBarLabel: {
      //   tintColor: 'black',
      // },
      // style: {
      //   backgroundColor: 'gray',
      // },
    },
  });

const Base = StackNavigator({
  Home: { screen: RootTabs, title: 'Home' },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
  LiveView: {
    screen: LiveView,
  },
});

export default Base;
