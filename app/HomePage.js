import React from "react";
import { View, ScrollView } from "react-native";
import SeriesCard from "./SeriesCard";

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <SeriesCard />
          <SeriesCard />
        </View>
      </ScrollView>
    );
  }
}
