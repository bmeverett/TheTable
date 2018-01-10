import React, { Button } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import HomeTab from './Tabs/HomeTab';
import Notes from './Tabs/Notes';
import VideoTab from './Tabs/VideoTab';
import AboutTab from './Tabs/About/AboutTab';
import EntryDetail from './EntryDetail';

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
    navigationOptions: {
      tabBarLabel: 'Videos',
      title: 'Videos',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon2
          name={focused ? 'social-youtube' : 'social-youtube'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Notes: {
    screen: Notes,
    navigationOptions: {
      tabBarLabel: 'Notes',
      title: 'Notes',
      // headerRight: (
      //   <Button 
      //     title='Share'
      //     onPress={() => {}  }
      //     />
      // ),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-clipboard' : 'ios-clipboard-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
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
});

const Base = StackNavigator({
  Home: { screen: RootTabs, title: 'Home' },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});

export default Base;
