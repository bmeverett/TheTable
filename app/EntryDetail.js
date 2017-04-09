import React from 'react';
import ReactNative, { Image, StyleSheet, View, WebView } from 'react-native';
import parseImage from './ParseImage';

var safeHtml = require('safe-html');
const config = {
  allowedTags: ['strong', 'span', 'b', 'p', 'i', 'em'],
  allowedAttributes: {
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  webView: {
    flex: 1,
  },
});

export default class EntryDetail extends React.Component {
  render() {
    let santitize = safeHtml(this.props.entry.body, config);
    const test = santitize.replace('&lt;', '<').replace('&quot;', '"').replace('/&gt;', '>').replace('&quot; ', '"');
    santitize = safeHtml(test, config).trim();
    const imageSource = parseImage(this.props.entry.body);
    return (
      <View style={styles.container}>
        {imageSource}
        <View style={{ flex: 1, padding: 0 }}>
          <WebView
            automaticallyAdjustContentInsets
            source={{ html: santitize }}
            javaScriptEnabled
            onNavigationStateChange={this.onNavigationStateChange}
          />
        </View>
      </View>
     
    );
  }
}
