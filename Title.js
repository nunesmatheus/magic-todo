import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20
  },

  title: {
    paddingBottom: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
  }
})
