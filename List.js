import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.list.map(this.renderItem)}
      </View>
    )
  }

  renderItem(text) {
    return (
      <Text style={styles.text}>{text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  text: {
    color: 'black',
    marginBottom: 10
  }
})
