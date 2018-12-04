import React, { Component } from 'react'
import {Constants} from 'expo'
import { View, StyleSheet } from 'react-native'
import Header from '../components/header'   
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'     

export default class main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    this.search("iraq")
  }
  // Fetch API with search query then return a json response and set state to the returned data
  search = (q) => {
    fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=ea74d2ab35164ad9b48bb00d80a22edd`)
    .then(res => res.json())
    .then(news =>{
      // console.log(news.articles);
      this.setState({news: news.articles})
    }
    )
    .catch(err => {
      console.log(err)
    })
  } 

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        {/* Passing data as a prop to the search's TextInput */}
        <SearchBar searchFunc={this.search}/>
        <NewsList news={this.state.news}/>
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
  
