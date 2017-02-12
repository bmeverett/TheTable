import React from 'react';
import ReactNative, { StyleSheet, View, WebView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  webView: {
  },
});

export default class EntryDetail extends React.Component {
  render() {
    // console.log(this.props.entry);
    return (
      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets
          source={{ html: this.props.entry.body }}
          javaScriptEnabled
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </View>
    );
  }
}
