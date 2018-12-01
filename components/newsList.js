import React, { Component } from 'react'
import {View, Image, StyleSheet } from 'react-native'

export default class NewsList extends Component {
  render() {
    return (
      <View style={styles.container} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:"#eee"
  }
})
