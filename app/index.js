// app/index.js

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Platform
} = ReactNative;
import Tabs from 'react-native-tabs';
var YouTube = require('react-native-youtube');

export default class TheTable extends React.Component {
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
    const { page } = this.state;
     const tabbarStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);
    var tabInput;
    if(page === 'First') {
      tabInput = <Text> First</Text>;
    }
    else if (page ==='Second'){
        tabInput = (<YouTube
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
    else {
        tabInput = <Text>Third </Text>;
    }
    return (
      <View style={styles.container}>
        <Tabs
            selected={page}
            style={tabbarStyles}
            selectedStyle={{color:'blue'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="First">First</Text>
            <Text name="Second">Second</Text>
            <Text name="Third">Third</Text>
        </Tabs>

          {tabInput}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },
  androidTabbar: {
   top: 0,
   borderBottomColor: 'red',
   borderBottomWidth: 2,
   borderTopColor: 0
 }
});
