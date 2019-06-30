import React from 'react';

import {Platform, StyleSheet, Text, View,TextInput,FlatList,Image} from 'react-native';

// import { Container } from './styles';

const Perfil = () => 
(
<View style={ { flexDirection: 'row', justifyContent: 'flex-start'}}>
    <Image source={require('../../assets/maskGroup2.png')} style={styles.image}/>

    <View style={{marginLeft:16}}>
        <Text style={styles.textPerfil}>Ronaldo Souza</Text>
        <Text style={styles.textPerfilMin}>Pai do Bruno</Text>
        <View style={styles.avaliacao}>
            <Image style={{  width: 14.2,height: 13.5}} source={require('../../assets/iconAvaliacao.png')}/>
            <Text style={styles.textAvaliacao}>5.0</Text>
            <Image style={{ width: 9, height: 7.4,marginLeft:8,marginTop:2}} source={require('../../assets/iconAfinidade.png')} />
            <Text style={styles.textAvaliacao}>2.9</Text>
        </View>
    </View>  
</View>
)



const styles = StyleSheet.create({
avaliacao:{
    flexDirection: 'row',
    marginTop: 5
},

textAvaliacao:{
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: "#fff",
    marginLeft: 8,
    },

    image:{
        width: 54,
        height: 54,
          borderRadius: 54/2

      },

      textPerfilMin:{
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
      },

      textPerfil:{
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
      }
})

export default Perfil;



