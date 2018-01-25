import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from './Title'
import List from './List'
import Input from './Input'

export default class App extends React.Component {

  state = {
    list: ['Clean the dishes', 'Do the laundry']
  }

  render() {
    return (
      <View>
        <Title text="Magic To Do"></Title>
        <Input placeholder="New task name" submit={this.onSubmitEditing}></Input>
        <List list={this.state.list} onPressItem={this.onPressItem}></List>
      </View>
    );
  }

  onSubmitEditing = (text) => {
    const {list} = this.state

    this.setState({
      list: [...list, text]
    })
  }

  onPressItem = (i) => {
    list_copy = [...this.state.list]
    list_copy.splice(i, 1)

    this.setState({
      // list: ['teste']
      list: list_copy
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  }
});
