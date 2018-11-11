import React from "react";
import { Button, Image, View, TouchableHighlight } from "react-native";
import { Content, Card, CardItem, Text, Body, Left, Icon } from "native-base";
import parseImage from "./ParseImage";

export default class SeriesCard extends React.Component {
  _showEntryDetails(entry) {
    this.props.navigation.navigate("EntryDetail", {
      title: entry.title,
      entry: entry
    });
  }
  render() {
    const img = parseImage(this.props.img);
    const title = this.props.title.split("//")[0];
    let items = this.props.title.split("//")[1];
    const buttons = [];
    console.log(this.props.entries);
    for (let i = this.props.entries.length - 1; i >= 0; i--) {
      const btnTitle = "Part " + (this.props.entries.length - i);
      buttons.push(
        <Button
          key={i}
          onPress={() => this._showEntryDetails(this.props.entries[i])}
          title={btnTitle}
        />
      );
    }

    // if (items) {
    //   items = parseInt(items.split(" ")[2], 10);
    //   for (let i = 0; i < items; i++) {
    //     const btnTitle = "Part " + (i + 1);
    //     buttons.push(
    //       <Button
    //         key={i}
    //         onPress={() =>
    //           this._showEntryDetails(this.props.entries[items - i])
    //         }
    //         title={btnTitle}
    //       />
    //     );
    //   }
    // }

    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{title}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                onPress={() => {
                  this._showEntryDetails(this.props.entry);
                }}
              >
                <View style={{ flex: 1, height: 200, width: null }}>{img}</View>
              </TouchableHighlight>
            </View>
          </CardItem>
          <CardItem>
            <Left>{buttons}</Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
