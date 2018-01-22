import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './Title'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Title text="Magic To Do"></Title>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  },
});
