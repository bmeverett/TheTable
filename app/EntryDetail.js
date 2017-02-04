'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  WebView
} = ReactNative;

class EntryDetail extends React.Component {
  render() {
    console.log(this.props.entry)
    return (
      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets={true}
          source={{html: this.props.entry.body}}
          javaScriptEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange}/>        
      </View>
    );
  }
};

var styles = StyleSheet.create({
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

module.exports = EntryDetail;
