var React = require('react');
var ReactNative = require('react-native');
var YouTube = require('react-native-youtube');
var {Alert,
  AsyncStorage,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  StyleSheet} = ReactNative;
var Api = require('../Api/RssFeedApi');
export default class VideoTab extends React.Component {

  //YouTube query 
  //

  constructor(props) {
    super(props);
    this.state = {
      page: 'First',
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true,
      videoId: 'Q0TohHXWtis',
      videos: []
    };
  }


  _loadVideos(item, i) {
    return (
      <TouchableHighlight
        key={i}
        underlayColor='rgba(0,0,0,.1)'
        onPress={() => this.setState({videoId: item.snippet.resourceId.videoId})}
        >
        <View style={styles.wrapper}>
          <View style={{ flex: 1, flexDirection:'row' }}>
            <Image style={{ height: 90, width: 120 }} source={{ uri: item.snippet.thumbnails.default.url }} />
            <Text style={styles.title}> {item.snippet.title} </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  componentDidMount() {
    Api.fetchVideos().then((res) => {
      this.setState({ videos: this.state.videos.concat(res.items) })
    });
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <YouTube
          ref="youtubePlayer"
          videoId={this.state.videoId} //"bh9G4n_XwaY"  // The YouTube video ID
          play={this.state.isPlaying}           // control playback of video with true/falseyout
          hidden={false}        // control visiblity of the entire view
          playsInline={true}    // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended
          onReady={(e) => { this.setState({ isReady: true }) } }
          onChangeState={(e) => { this.setState({ status: e.state }) } }
          onChangeQuality={(e) => { this.setState({ quality: e.quality }) } }
          onError={(e) => { this.setState({ error: e.error }) } }
          onProgress={(e) => { this.setState({ currentTime: e.currentTime, duration: e.duration }) } }
          apiKey="AIzaSyBMzZ7Zb3WDJucbRX10Q1fGbfFO4xMwO3o"
          style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 50 }}
          />
        <ScrollView style={{ flex: 1 }}>
          {this.state.videos.map((item, i) => { return this._loadVideos(item, i) })}
        </ScrollView>

      </View>

    );
  }
}

var styles = StyleSheet.create({

  wrapper: {
    paddingTop: 0,
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
    flexWrap: 'wrap',
    flex:1
  },

})

module.exports = VideoTab;
