import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends Component {

  state = {
    searchInput: ''
  }

  onChangeHandler = (val) => {
    this.setState({
      searchInput: val
    })
  }

  render() {
    return (
      <View style={styles.container} >
        <TextInput 
          style={styles.textInput}
          placeholder="Search here ..."
          value={this.state.searchInput}
          onChangeText={this.onChangeHandler}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flex:0.1, 
    backgroundColor: "#fff",
  },
  textInput: {
    height: 40, 
    borderColor: '#ddd', 
    borderWidth: 1,
    margin: 5,
    paddingLeft: 20,
    borderRadius: 20
  }
});
