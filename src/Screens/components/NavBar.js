import React from 'react';

import { Text,View,StyleSheet,Image } from 'react-native';



// import { Container } from './styles';

const NavBar = () => (
    <View style={styles.containerNavBar}> 
        <Text style={styles.cadastro}>Cadastro</Text>
        <Image  style={styles.logo} source={require("../../assets/logo.png")}/>
        <Text style={styles.tituloNavBar}>Conecte-se com pais motoristas</Text>
    </View>
);

const styles = StyleSheet.create({
    containerNavBar:{
        backgroundColor: '#47235F',
        alignItems: 'center'
       // justifyContent: 'center'
    },

    logo:{
        width: 45.3,
        height: 36.8,

        marginTop: 16
    },

    cadastro:{
        opacity: 0.41,
       // fontFamily: "HelveticaNeue",
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    },

    tituloNavBar:{
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 29,
        letterSpacing: 0,
        textAlign: "center",
        color: "#f7f7f7",
        marginTop: 10,
        paddingHorizontal:  60
    }
})



export default NavBar;
