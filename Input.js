import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Input extends Component {
  state = {
    text: ''
  }

  render() {
    const {text} = this.state
    const {placeholder} = this.props

    return(
      <View>
        <TextInput placeholder={placeholder}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          value={text}
          style={styles.input}></TextInput>
      </View>
    )
  }

  onChangeText = (text) => { this.setState({ text: text }) }

  onSubmitEditing = () => {
    const {submit} = this.props
    const {text} = this.state

    submit(text)

    this.setState({ text: '' })
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50
  }
})
