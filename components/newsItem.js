import React, { Component } from 'react'
import {View, Image, StyleSheet, Text } from 'react-native'

export default class NewsList extends Component {
  render() {
    let {item} = this.props
    const {description, publishedAt, title, urlToImage} = item
    return (
      <View style={styles.itemNewsContainer} >
          <Image 
            style={styles.image}
            source={{uri: urlToImage}}
            resizeMode="cover"/>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.date }>{publishedAt}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemNewsContainer: {
    backgroundColor:"#fff",
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderRadius: 5
  },
  textContainer: {
    flex:4,
    marginLeft: 10
  },
  image: {
    flex:1,
    width:100,
    height:60,
    marginTop:5
  },
  title:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444'
  },
  desc: {
    marginTop:5,
    color: '#777',
  },
  date :{
    color: '#4247fa',
    fontSize: 12,
    marginTop:10,
    marginLeft: 'auto'
  }
})
