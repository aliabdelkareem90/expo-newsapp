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
        height:50,
        backgroundColor: "#6a1b9a",
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    logo: {
        height:45, 
        width:95, 
        margin:4,
        alignSelf: 'flex-start'
    },
    title :{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginRight: 'auto'
    }
})