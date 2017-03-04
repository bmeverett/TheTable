import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import { _ } from 'lodash';
import Api from '../Api/RssFeedApi';
import EntryDetail from '../EntryDetail';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
  },
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#B4AEAE',
    fontSize: 12,
    marginBottom: 5,
  },
  smallText: {
    fontSize: 11,
    textAlign: 'right',
    color: '#B4AEAE',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }
  componentDidMount() {
    const url = 'https://www.thetableinbetween.org/weekly-topic?format=json-pretty';
    Api.fetchRss(url).then((res) => {
        // if (res.responseStatus == 200) {
      const entries = res.items;
      this.setState({ feeds: this.state.feeds.concat(entries) });
    }).catch(error => console.log(error));
  }
  _showEntryDetails(entry) {
    this.props.navigator.push({
      component: EntryDetail,
      title: entry.title,
      passProps: { entry },
    });
    this.props.navigator.pop;
  }
  _renderEntries(entry, i) {
   //     console.log(entry)
    return (
      <TouchableHighlight
        key={i}
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => { this._showEntryDetails(entry); }}
      >
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.title}>{entry.title}</Text>
            <Text style={styles.description}>{new Date(entry.publishOn).toDateString()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <ScrollView style={styles.scrollView}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../images/thetablesmall.png')}
            />
          </View>
          {this.state.feeds.map((feed, i) => this._renderEntries(feed, i))}
        </ScrollView>
      </View>
    );
  }
}

