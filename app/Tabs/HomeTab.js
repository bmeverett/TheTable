import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { _ } from 'lodash';
import Api from '../Api/RssFeedApi';
import EntryDetail from '../EntryDetail';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    paddingTop: 20,
    paddingBottom: 15,
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
    const url = 'https://www.thetableinbetween.org/weekly-topic?format=json-pretty'
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
      <ScrollView style={styles.scrollView}>
        {this.state.feeds.map((feed, i) =>  this._renderEntries(feed, i))}
      </ScrollView>
    );
  }
}



