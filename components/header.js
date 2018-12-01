import React , { Component } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native'

export default class Header extends Component {
    render() {
        return(
            <View style={styles.container}> 
                <Image style={styles.logo} resizeMode="cover" source={require("../assets/icon.png")} /> 
                <Text style={styles.text}>News Application</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:60,
        backgroundColor: "red",
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        height:35, 
        width:35, 
        margin:10
    },
    text :{
        fontSize: 19,
        color: '#FFF',
        marginRight: 'auto'
    }
})