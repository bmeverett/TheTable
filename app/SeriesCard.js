import React from "react";
import { Image } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Icon,
  Button
} from "native-base";

export default class SeriesCard extends React.Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{this.props.title}</Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image
              style={{ height: 200, width: null, flex: 1 }}
              resizeMode="cover"
              source={{
                uri:
                  "https://static1.squarespace.com/static/533c5af4e4b01e110d817213/t/5b98010b21c67c3479ac5435/1536688404277/Carry+The+Water_Main+Graphic.jpg"
              }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button>
                <Text>Part 1</Text>
              </Button>

              <Button>
                <Text>Part 2</Text>
              </Button>
              <Button>
                <Text>Part 3</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
