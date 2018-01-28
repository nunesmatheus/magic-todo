import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Title from './Title'
import List from './List'
import Input from './Input'

export default class App extends React.Component {

  state = {
    list: []
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

  componentWillMount () {
    this.load()
  }

  load = async () => {
    const list = JSON.parse(await AsyncStorage.getItem('list'))

    if(list !== null) {
      this.setState({
        list: list
      })
    }
  }

  onSubmitEditing = async (text) => {
    const {list} = this.state

    let new_list = [...list, text]
    await AsyncStorage.setItem('list', JSON.stringify(new_list))

    this.setState({
      list: new_list
    })
  }

  onPressItem = async (i) => {
    let list_copy = [...this.state.list]
    list_copy.splice(i, 1)

    await AsyncStorage.setItem('list', JSON.stringify(list_copy))

    this.setState({
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
