import React from "react";
import { WebView } from "react-native";

export default class Privacy extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            "https://www.freeprivacypolicy.com/privacy/view/517634f4eafa7be395a286cd996e7fd1"
        }}
      />
    );
  }
}
