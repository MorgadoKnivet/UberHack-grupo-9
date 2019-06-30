import React from 'react';

import { View,StyleSheet,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const CheckDayUnico = ({daySemana,on,onPress}) => (
    <View style={styles.containerInner}>
        <Text style={styles.daySemana}>{daySemana}</Text>
        
        {
            on == true ?
                <TouchableOpacity onPress={onPress} style={{ width: 45,height: 45,backgroundColor: "#f7c417",borderRadius:45/2,justifyContent:'center',alignItems:'center',marginTop:12,}}>
                    <Image source={require('../../assets/invalidName.png')}/>
                </TouchableOpacity>
            :
            <View style={{ width: 45,height: 45,backgroundColor: "#f7c41721",borderRadius:45/2,justifyContent:'center',alignItems:'center',marginTop:12,}}>
                <Image source={require('../../assets/invalidName.png')}/>
            </View>
        }
       
    </View>
);

const styles = StyleSheet.create({
    containerInner:{
        height: 90,
        marginTop: 12,

    },

    daySemana:{
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    }
})

export default CheckDayUnico;
