import React from 'react';
import {Alert, Button, Keyboard, Linking, Platform} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './Tabs/HomeTab';
import Notes from './Tabs/Notes';
import AboutTab from './Tabs/About/AboutTab';
import EntryDetail from './EntryDetail';
import Privacy from './Privacy';

const giveUrl =
  'https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: () => ({
      headerTitle: 'Home',
    }),
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});

const NotesStack = createStackNavigator({
  Notes: {
    screen: Notes,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Notes',
      title: 'Notes',
      headerRight: (
        <Button
          title="Share"
          onPress={() => {
            const subject = navigation.state.params
              ? navigation.state.params.subject
              : '';
            const text = navigation.state.params
              ? navigation.state.params.text
              : '';

            Linking.canOpenURL(`mailto:?subject=${subject}&body=${text}`).then(
              supported => {
                if (supported) {
                  Linking.openURL(
                    `mailto:test?subject=${subject}&body=${text}`,
                  );
                } else {
                  Alert.alert('Error', "Don't know how to open URI: ");
                }
              },
            );
            Keyboard.dismiss();
          }}
        />
      ),
      headerLeft: (
        <Button
          title="Done"
          onPress={() => {
            Keyboard.dismiss();
          }}
        />
      ),
    }),
  },
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutTab,
    navigationOptions: () => ({
      tabBarLabel: 'About',
      title: 'About',
      headerRight: (
        <Button
          title="Give"
          onPress={() => {
            Linking.openURL(giveUrl);
          }}
        />
      ),
    }),
  },
  Privacy: {
    screen: Privacy,
    headerTitle: 'Privacy',
  },
});

const navigationOptions = {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : '-variant-outline'}`;
      } else if (routeName === 'Notes') {
        iconName = `clipboard${focused ? '' : '-outline'}`;
      } else if (routeName === 'About') {
        iconName = focused ? 'information' : 'information-outline';
      }
      return <Icon name={iconName} size={26} tintColor={tintColor} />;
    },
  }),
};

const Base = Platform.select({
  ios: () =>
    createBottomTabNavigator(
      {
        Home: HomeStack,
        Notes: NotesStack,
        About: AboutStack,
      },
      navigationOptions,
    ),
  android: () =>
    createMaterialTopTabNavigator(
      {
        Home: HomeStack,
        Notes: NotesStack,
        About: AboutStack,
      },
      navigationOptions,
    ),
})();

export default createAppContainer(Base);
