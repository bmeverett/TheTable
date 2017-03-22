import React from 'react';
import { Navigator, Text, TextInput, View } from 'react-native';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text, subject: '' };
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 60 }} >
        <TextInput
          placeholder="Subject"
          style={{ margin: 5, height: 40, fontSize: 14 }}
          onChangeText={subject => this.setState({ subject })}
          value={this.state.subject}
          editable
        />
        <TextInput
          placeholder="Notes"
          style={{ margin: 5, height: 300, fontSize: 14 }}
          onChangeText={this.props.onChangeText}
          value={this.props.text}
          editable
          multiline
        />
      </View>
    );
  }
}
