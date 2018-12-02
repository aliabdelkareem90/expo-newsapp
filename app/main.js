import React, { Component } from 'react'
import {Constants} from 'expo'
import { View, StyleSheet } from 'react-native'
import Header from '../components/header'   
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'     

export default class main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <NewsList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    marginTop:Constants.statusBarHeight
  }
})
  
