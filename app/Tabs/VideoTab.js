var React = require('react');
var ReactNative = require('react-native');
var YouTube = require('react-native-youtube');

export default class VideoTab extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      page: 'First',
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    };
  }

  render() {
      return (<YouTube
          ref="youtubePlayer"
          videoId="Q0TohHXWtis" // The YouTube video ID
          play={this.state.isPlaying}           // control playback of video with true/falseyout
          hidden={false}        // control visiblity of the entire view
          playsInline={true}    // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended
          onReady={(e)=>{this.setState({isReady: true})}}
          onChangeState={(e)=>{this.setState({status: e.state})}}
          onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
          onError={(e)=>{this.setState({error: e.error})}}
          onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
          apiKey="AIzaSyBMzZ7Zb3WDJucbRX10Q1fGbfFO4xMwO3o"
          style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
              />);
  }
}

module.exports = VideoTab;
