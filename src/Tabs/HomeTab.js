import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import Api from '../Api/RssFeedApi';
import SeriesCard from '../SeriesCard';

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
    borderColor: 'black', // '#E5D767',
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
    color: 'black', // '#B4AEAE',
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
  gradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 35,
    marginHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontSize: 20,
  },
});

export default class HomeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: {},
      refreshing: false,
      imageSrc: '',
      tonight: null,
    };
  }
  componentDidMount() {
    this.loadEntries();
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.loadEntries();
    this.setState({refreshing: false});
  }
  loadEntries() {
    const url =
      'https://www.thetableinbetween.org/weekly-topic?format=json-pretty';
    Api.fetchRss(url)
      .then(res => {
        // if (res.responseStatus == 200) {
        const entries = res;
        // const filterEnts = entries.filter(
        //   x => new Date(x.publishOn).getMonth() === new Date().getMonth()
        // );
        // clear the entries to be able to reload them
        this.setState({feeds: {}});
        this.setState({feeds: entries});
      })
      .catch(error => console.log(error));
  }
  _showEntryDetails(entry) {
    this.props.navigation.navigate('EntryDetail', {
      title: entry.title,
      entry: entry,
    });
  }
  _renderEntries(entry, i) {
    return (
      <SeriesCard
        key={i}
        title={this.state.feeds[entry][0].title}
        entry={this.state.feeds[entry][0]}
        entries={this.state.feeds[entry]}
        img={this.state.feeds[entry][0].body}
        navigation={this.props.navigation}
      />
    );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, paddingTop: 10}}>
            <ScrollView
              style={styles.scrollView}
              automaticallyAdjustContentInsets={false}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }>
              {Object.keys(this.state.feeds).map((feed, i) =>
                this._renderEntries(feed, i),
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
