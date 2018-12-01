import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container} >
        <TextInput style={styles.textInput} placeholder="Search here ..."/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.1, 
    backgroundColor: "#fff",
  },
  textInput: {
    height: 40, 
    borderColor: '#ddd', 
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10
  }
});
