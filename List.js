import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.list.map(this.renderItem)}
      </View>
    )
  }

  renderItem = (text, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity onPress={() => onPressItem(i)}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
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
