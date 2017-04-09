import React from 'react';
import { TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Api from '../Api/RssFeedApi';
import parseImage from '.././ParseImage';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text, subject: this.props.subject, imgSource: null };
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

  render() {
    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={{ flex: 1, paddingTop: 60 }} >
           <View style={{ flex: 1 }} >
             {this.state.imgSource}
           </View>
           <TextInput
             placeholder="Subject"
             style={{ margin: 5, height: 40, fontSize: 14 }}
             onChangeText={this.props.onSubjectChange}
             value={this.props.subject}
             editable
           />
           <TextInput
             placeholder="Notes"
             style={{ margin: 5, flex: 1, fontSize: 14, marginBottom: 100, marginRight: 50 }}
             onChangeText={this.props.onChangeText}
             value={this.props.text}
             editable
             multiline
           />
         </View>
       </TouchableWithoutFeedback>
    );
  }
}
