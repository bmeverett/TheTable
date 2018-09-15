import React from "react";
import { Alert, Button, Keyboard, Linking, Platform } from "react-native";
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import HomeTab from "./Tabs/HomeTab";
import Notes from "./Tabs/Notes";
import AboutTab from "./Tabs/About/AboutTab";
import EntryDetail from "./EntryDetail";
import LiveView from "./LiveView";

const giveUrl =
  "https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=QYgs3QBcu8xbOrLktBLPzvKXho7Z1f-vPAmlEy31-Mtxu1xOi9A1zOcBRvMIg3dWDcwKUSIIMplPYbhp_Bye2yBBvx9-fvMagEqoHNQ2OkpXglg96ix4LAXyIe06lRTbvIbrKP-ltHb6Y7F8Ylp0-44S31PvHyzCSPZoGMvkv08=&ver=3";

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: () => ({
      headerTitle: "Home"
    })
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
});

const LiveStack = createStackNavigator({
  Live: {
    screen: LiveView,
    navigationOptions: () => ({
      headerTitle: "Live"
    })
  }
});

const NotesStack = createStackNavigator({
  Notes: {
    screen: Notes,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Notes",
      title: "Notes",
      headerRight: (
        <Button
          title="Share"
          onPress={() => {
            const subject = navigation.state.params
              ? navigation.state.params.subject
              : "";
            const text = navigation.state.params
              ? navigation.state.params.text
              : "";

            Linking.canOpenURL(`mailto:?subject=${subject}&body=${text}`).then(
              supported => {
                if (supported) {
                  Linking.openURL(`mailto:?subject=${subject}&body=${text}`);
                } else {
                  Alert.alert("Error", "Don't know how to open URI: ");
                }
              }
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
      )
    })
  }
});

const AboutStack = createStackNavigator({
  About: {
    screen: AboutTab,
    navigationOptions: () => ({
      tabBarLabel: "About",
      title: "About",
      headerRight: (
        <Button
          title="Give"
          onPress={() => {
            Linking.openURL(giveUrl);
          }}
        />
      )
    })
  }
});

const navigationOptions = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === "Home") {
        iconName = `ios-home${focused ? "" : "-outline"}`;
      } else if (routeName === "Live") {
        return (
          <Icon2
            name={focused ? "social-youtube" : "social-youtube"}
            size={26}
            style={{ color: tintColor }}
          />
        );
      } else if (routeName === "Notes") {
        iconName = `ios-clipboard${focused ? "" : "-outline"}`;
      } else if (routeName === "About") {
        return (
          <Ionicons
            name={
              focused
                ? "ios-information-circle-outline"
                : "ios-information-circle-outline"
            }
            size={26}
            style={{ color: tintColor }}
          />
        );
      }
      return <Ionicons name={iconName} size={26} color={tintColor} />;
    }
  })
};

const Base = Platform.select({
  ios: () =>
    createBottomTabNavigator(
      {
        Home: HomeStack,
        Live: LiveStack,
        Notes: NotesStack,
        About: AboutStack
      },
      navigationOptions
    ),
  android: () =>
    createMaterialTopTabNavigator(
      {
        Home: HomeStack,
        Live: LiveStack,
        Notes: NotesStack,
        About: AboutStack
      },
      navigationOptions
    )
})();

export default Base;
