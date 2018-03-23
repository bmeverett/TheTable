import React from 'react';
import { Alert, Button, Keyboard, Linking } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import HomeTab from './Tabs/HomeTab';
import Notes from './Tabs/Notes';
import AboutTab from './Tabs/About/AboutTab';
import EntryDetail from './EntryDetail';
import LiveView from './LiveView';
import GivingTab from './Tabs/GivingTab';

const giveUrl = 'https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3';
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
    screen: LiveView,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Live',
      title: 'Live',
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
            let subject = navigation.state.params ? navigation.state.params.subject : '';
            let text = navigation.state.params ? navigation.state.params.text : '';

            Linking.canOpenURL(`mailto:?subject=${subject}&body=${text}`).then((supported) => {
              if (supported) {
                Linking.openURL(`mailto:?subject=${subject}&body=${text}`);
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
      headerRight: (
        <Button
          title="Give"
          onPress={() => { Linking.openURL(giveUrl); }}
        />
      ),
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
