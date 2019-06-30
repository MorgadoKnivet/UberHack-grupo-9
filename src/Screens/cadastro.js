import React, { Component } from 'react'
import { Text, View,StyleSheet,Platform,TextInput,TouchableOpacity  } from 'react-native'

import NavBar from './components/NavBar'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class cadastro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always" enableResetScrollToCoords={false} enableOnAndroid={true} style={{ backgroundColor:'#47235F'}} extraScrollHeight={16} >

                    <NavBar />
                    <View style={styles.tituloInputNome}>
                        <Text style={styles.textInputNome}>Sobre você</Text>
                    </View>

                    <Text style={styles.textNomeCompleto}>Nome Completo</Text>
                    <View style={styles.viewTextInput}> 
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={styles.tituloInputNome}>
                        <Text style={styles.textInputNome}>Trajetos</Text>
                    </View>

                    <Text style={styles.textNomeCompleto}>Seu endereço</Text>
                    <View style={styles.viewTextInput}> 
                        <TextInput style={styles.textInput}/>
                    </View>

                    <Text style={styles.textNomeCompleto}>Endereço da Escola</Text>
                    <View style={styles.viewTextInput}> 
                        <TextInput style={styles.textInput}/>
                    </View>
                
                    <TouchableOpacity style={styles.viewButton}>
                            <Text style={styles.textButton}>Próxima</Text>
                    </TouchableOpacity>
                
                </KeyboardAwareScrollView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#47235F',

        alignItems: 'center',

        ...Platform.select({
            ios: {
               paddingTop: 30,
            },
            android:{
                paddingTop: 16,
            }
          }),
    },
    tituloInputNome:{
        opacity: 0.1,
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomColor: "#ffffff",
        marginLeft: 24,
        marginTop: 18,
        alignSelf: 'flex-start'
    },

    textInputNome:{
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    },

    textNomeCompleto:{
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "left",
        color: "#f7f7f7",
        alignSelf: 'flex-start',
        marginTop: 18,
        marginLeft: 24,
    },

    viewTextInput:{
        width: '85%',
        height: 42,
        borderRadius: 2,
        backgroundColor: "#dac9de",
        marginHorizontal: 24,
        marginTop: 8
    },
    
    textInput:{
        flex:1,
        height: 42,
        borderRadius: 2,
        backgroundColor: "#dac9de",
        paddingHorizontal: 16
    },

    viewButton:{
        flex: 1,
        height: 55,
        borderRadius: 2,
        backgroundColor: "#f7c417",

        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 18,

        marginHorizontal: 24,

        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 5.5,
    
        elevation : 5.5
    },

    textButton:{
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 23,
        letterSpacing: 0,
        textAlign: "left",
        color: "#3a1652"
    }
})
