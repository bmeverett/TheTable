import React from 'react';
import { ScrollView, Button, StyleSheet, Text, TouchableHighlight, View, Image, RefreshControl } from 'react-native';
import Api from '../Api/RssFeedApi';
import EntryDetail from '../EntryDetail';
import Highlighter from 'react-native-highlight-words';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: 10,
  },
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#E5D767',
    flex: 1,
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
      refreshing: false,
      imageSrc: '',
    };
  }
  componentDidMount() {
    this.loadEntries();
  }
  componentWillReceiveProps() {
    this.loadEntries();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.loadEntries();
    this.setState({ refreshing: false });
  }
  loadEntries() {
    const url = 'https://www.thetableinbetween.org/weekly-topic?format=json-pretty';
    Api.fetchRss(url).then((res) => {
        // if (res.responseStatus == 200) {
      const entries = res.items;
      const filterEnts = entries.filter(x => new Date(x.publishOn).getMonth() === new Date().getMonth());
      // clear the entries to be able to reload them
      this.setState({ feeds: [] });
      this.setState({ feeds: this.state.feeds.concat(filterEnts) });
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
            <Highlighter
              highlightStyle={{ color: '#E5D767' }}
              searchWords={['//', '/ /']}
              textToHighlight={entry.title}
              style={styles.title}
            />
            <Text style={styles.description}>{new Date(entry.publishOn).toDateString()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  buttonPress() {
    console.log('test');
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <View style={{ alignItems: 'center', flex: 1, paddingTop: 50 }}>
          <Image
            source={require('../images/thetable425.png')}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ borderColor: 'black', borderRadius: 100, borderWidth: 1, paddingHorizontal: 20 }} >
        <Button
          style={{ flex: 1 }}
          title='Tonight'
          onPress={this.buttonPress}
        />
        </View>
        <ScrollView
          style={styles.scrollView}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          {this.state.feeds.map((feed, i) => this._renderEntries(feed, i))}
        </ScrollView>
      </View>
    );
  }
}

