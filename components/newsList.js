import React, { Component } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import NewsItem from './newsItem'

export default class NewsList extends Component {
  
  render() {
    const {news} = this.props
    // Mapping all incoming articles and retrun a list of news  
    const NewsList = news.map((newsItemData, i) => <NewsItem item={newsItemData} key={i}/>)
    return (
      // Using ScrollView instead of View to scroll up and down all items
      <ScrollView style={styles.newsListContainer}>
      <View>
        {NewsList}
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  newsListContainer: {
    flex:1, 
    backgroundColor:"#eee"
  }
})
