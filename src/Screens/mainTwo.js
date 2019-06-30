import React, { Component } from 'react'

import {Platform, StyleSheet, Text, View,TextInput,FlatList,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Perfil from './components/perfil'
import CheckDaySemana from './components/CheckDaySemana'
import ViewBottom from './components/ViewBottom'

export default class mainTwo extends Component {

    state={
        user: null
    }

    async componentDidMount(){
        console.log("didmound")
        await this.setState({user:this.props.user})
        console.log(this.props.user)
    }

    render() {
        var {user} = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.iconReturn}>
                    <Image source={require('../assets/path10.png')}/>
                </TouchableOpacity>
                <View style={{marginTop:42,marginLeft:18}}>
                    <Perfil foto={this.props.user._data.idFoto} afinidade={this.props.user._data.afinidade} avaliacao={this.props.user._data.avaliacao} nomeFilho={this.props.user._data.nomeFilho} nome={this.props.user._data.nome} />
                    <View style={styles.viewIda}>
                        <Text style={styles.ida}>Ida</Text>
                        <Text style={styles.hora}>7:30</Text>
                    </View>
                    <CheckDaySemana />
                </View>
                <View style={{marginLeft:18}}>
                    
                    <View style={styles.viewIda}>
                        <Text style={styles.ida}>Ida</Text>
                        <Text style={styles.hora}>7:30</Text>
                    </View>
                    <CheckDaySemana />
                </View>

                <ViewBottom />
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#47235F',
      
    },
    iconReturn:{
        ...Platform.select({
            ios: {
               paddingTop: 30,
               //marginLeft: 18,
            },
            android:{
                paddingTop: 16,
            }
          }),

          marginLeft: 20
    },

    viewIda:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginHorizontal: 16,
        marginTop:34,
        borderColor: '#FFFFFF12',
        borderStyle: "solid",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },

    ida:{
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff",
       // marginLeft: 24,
    },

    hora:{
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff",
        marginRight: 16
    }
})  
