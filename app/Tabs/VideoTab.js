import React from 'react';
import ReactNative, { Image, View, ScrollView, TouchableHighlight, Text, StyleSheet, RefreshControl } from 'react-native';
import YouTube from 'react-native-youtube';
import Api from '../Api/RssFeedApi';
import config from '../../Config';

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#E5D767',
  },
  title: {
    paddingTop: 2,
    paddingBottom: 3,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1,
  },

});

export default class VideoTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'First',
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: false,
      videoId: 'Q0TohHXWtis',
      videos: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    this.fetchVideos();
  }

  componentWillUnmount() {
    this.setState({ isPlaying: false });
  }
  fetchVideos() {
    Api.fetchVideos().then((res) => {
      // this.state.videoId = res.items[0].snippet.resourceId.videoId;
      this.setState({ videos: [] });
      this.setState({ videos: this.state.videos.concat(res.items) });
    });
  }
  _onRefresh() {
    this.setState({ refreshing: true });
    this.fetchVideos();
    this.setState({ refreshing: false });
  }
  _loadVideos(item, i) {
    return (
      <TouchableHighlight
        key={i}
        underlayColor="rgba(0,0,0,.1)"
        onPress={() => this.setState({ videoId: item.snippet.resourceId.videoId })}
      >
        <View style={styles.wrapper}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{ height: 90, width: 120 }} source={{ uri: item.snippet.thumbnails.default.url }} />
            <Text style={styles.title}> {item.snippet.title} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <YouTube
          videoId={this.state.videoId} // "bh9G4n_XwaY"  // The YouTube video ID
          play={this.state.isPlaying}           // control playback of video with true/falseyout
          hidden={false}        // control visiblity of the entire view
          playsInline={false}   // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended
          onReady={() => { this.setState({ isReady: true }); }}
          onChangeState={(e) => { this.setState({ status: e.state }); }}
          onChangeQuality={(e) => { this.setState({ quality: e.quality }); }}
          onError={(e) => { this.setState({ error: e.error }); }}
          onProgress={(e) => { this.setState({ currentTime: e.currentTime, duration: e.duration }); }}
          apiKey={config.GOOGLE_API_KEY}
          style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'black' }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          {this.state.videos.map((item, i) => this._loadVideos(item, i))}
        </ScrollView>
      </View>

    );
  }
}
