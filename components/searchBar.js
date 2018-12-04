import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }
  // Handling text changing in TextInput
  onChangeTextHandler = (val) => {
    // To avoid crash, if user delete TextInput's text, let default value = 'iraq'
    if (val.length == 0) {
      val="iraq"
      this.setState({
        searchInput: ''
      })
      this.props.searchFunc(val)
      return;
    }
    this.setState({
      searchInput: val
    })
    this.props.searchFunc(val)
    // console.log(val)
  }

  render() {
    return (
      <View style={styles.searchBarContainer} >
        <TextInput 
          style={styles.textInput}
          placeholder="Search here ..."
          value={this.state.searchInput}
          onChangeText={this.onChangeTextHandler}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flex:0.1, 
    backgroundColor: "#6a1b9a",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  textInput: {
    height: 40, 
    borderColor: '#ddd',
    backgroundColor: "#fff", 
    borderWidth: 1,
    margin: 5,
    paddingLeft: 20,
    borderRadius: 20
  }
});
