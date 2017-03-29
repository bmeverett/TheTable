import React from 'react';
import { Navigator, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text, subject: this.props.subject };
  }
  render() {
    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={{ flex: 1, paddingTop: 60 }} >
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
