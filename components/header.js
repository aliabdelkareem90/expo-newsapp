import React , { Component } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native'

export default class Header extends Component {
    render() {
        return(
            <View style={styles.headerContainer}> 
                <Image style={styles.logo} resizeMode="cover" source={require("../assets/logo.png")} /> 
                <Text style={styles.title}>News Application</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height:60,
        backgroundColor: "#fff",
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        height:45, 
        width:95, 
        margin:10,
        alignSelf: 'flex-start'
    },
    title :{
        fontSize: 16,
        color: '#6a1b9a',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginRight: 'auto',
    }
})