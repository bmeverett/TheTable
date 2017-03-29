import React from 'react';
import ReactNative, { Image, StyleSheet, View, WebView } from 'react-native';

var safeHtml = require('safe-html');
const config = {
  allowedTags: ['strong', 'span', 'b', 'p', 'i', 'em'],
  allowedAttributes: {
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  webView: {
    flex: 1,
  },
});

export default class EntryDetail extends React.Component {
  render() {
    // console.log(this.props.entry);
    const img = this.props.entry.body.split('<img');
    let santitize = safeHtml(this.props.entry.body, config);
    const test = santitize.replace('&lt;', '<').replace('&quot;', '"').replace('/&gt;', '>').replace('&quot; ', '"');
    santitize = safeHtml(test, config).trim();
    let imageSource;
    if (img.length > 1) {
      img[1].split('=');
      const index = img[1].indexOf('>');
      const realHtml = img[1].substring(0, index - 1).split('"')[1];
      imageSource = <Image style={{ flex: 1, alignSelf: 'auto' }} resizeMode= 'contain' source={{ uri: realHtml }} />;
    }
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
