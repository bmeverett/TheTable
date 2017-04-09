import React from 'react';
import ReactNative, { TextInput, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Api from '../Api/RssFeedApi';
import parseImage from '.././ParseImage';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      subject: this.props.subject,
      imgSource: null,
      textObj: null };
  }

  componentDidMount() {
    const url = 'https://www.thetableinbetween.org/weekly-topic?format=json-pretty';
    Api.fetchRss(url).then((res) => {
        // if (res.responseStatus == 200) {
      const firstEntry = res.items[0];
      const img = parseImage(firstEntry.body);
      this.setState({ imgSource: img });
    }).catch(error => console.log(error));
  }
  inputFocused(refName) {
    setTimeout(() => {
      const scrollResponder = this.refs.scrollView.getScrollResponder();
      scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      ReactNative.findNodeHandle(this.refs[refName]),
      0, // additionalOffset
      true
    );
    }, 50);
  }
  render() {
    return (
      <ScrollView ref='scrollView' contentContainerStyle={{ flex: 1 }} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }} >
            {this.state.imgSource}
            <TextInput
              placeholder="Subject"
              style={{ margin: 5, height: 70, fontSize: 14 }}
              onChangeText={this.props.onSubjectChange}
              value={this.props.subject}
              editable
            />
            <TextInput
            // hack this for now, can fix with propper refs later
              ref='notes'
              onFocus={this.inputFocused.bind(this, 'notes')}
              placeholder="Notes"
              style={{ margin: 5, flex: 1, fontSize: 14, marginBottom: 100, marginRight: 50 }}
              onChangeText={this.props.onChangeText}
              value={this.props.text}
              editable
              multiline
            />

          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
