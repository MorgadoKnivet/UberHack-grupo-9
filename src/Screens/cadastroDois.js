import React, { Component } from 'react'
import { Text, View,StyleSheet,Platform,TextInput,TouchableOpacity  } from 'react-native'

import NavBar from './components/NavBar'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {FirestoreCollectionDoc} from '../APIs/Firebase/FirebaseServices'
import User from '../model/User'
import { Actions } from 'react-native-router-flux';

var radio_props = [
    {label: 'Único filho     ', value: 0 },
    {label: '2 ou mais filhos', value: 1 }
  ];

export default class cadastro extends Component {

    constructor(props){
        super(props)

        this.state = {
            infoRadio: "",
            nomeCompletoFilho: "",
            serie: "",
            entrada: "",
            saida: ''
        }

    }

   


    salveRadio = (infoRadio) =>{
        this.setState({infoRadio})
    }

    salveNomeCompletoFilho  = (nomeCompletoFilho) =>{
        this.setState({nomeCompletoFilho})
    }

    salveSerie = (serie) => {
        this.setState({serie})
    }    

    salveEntrada = (entrada) => {
        this.setState({entrada})
    }
    
    salveSaida = (saida) => {
        this.setState({saida})
    }

    fazerCadastro = async () =>{
       let {name,enderecoEscola,endereço} = this.props

       console.log(name)
       console.log(enderecoEscola)
       console.log(endereço)

       let {infoRadio,nomeCompletoFilho,serie,entrada,saida} = this.state
       
       console.log(infoRadio)
       console.log(nomeCompletoFilho)
       console.log(serie)
       console.log(entrada)
       console.log(saida)

       let user = new User("",name,"",endereço,enderecoEscola,nomeCompletoFilho,serie,entrada,saida,infoRadio)

        let response = await FirestoreCollectionDoc("Users","",user)

        if (response.sucess) {
            Actions.main()
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always" enableResetScrollToCoords={false} enableOnAndroid={true} style={{ backgroundColor:'#47235F'}} extraScrollHeight={16} >

                    <NavBar />
                    <View style={styles.tituloInputNome}>
                        <Text  style={styles.textInputNome}>Sobre seu filho(a)</Text>
                    </View>

                    <Text style={styles.textNomeCompleto}>Nome Completo</Text>
                    <View style={styles.viewTextInput}> 
                        <TextInput onChangeText={(text)=>this.salveNomeCompletoFilho(text)} style={styles.textInput}/>
                    </View>

                    <View style={{justifyContent: 'space-between', flex:1, flexDirection:'row'}}>
                        <View style={{height: 80,flex:1,}}> 
                            <Text style={styles.textNomeCompleto}>Série</Text>
                            <View style={styles.viewTextInputSerie}> 
                                <TextInput onChangeText={(text)=>this.salveSerie(text)} style={styles.textInput}/>
                            </View> 
                        </View>
                        
                        <View style={{height: 80,flex:1,}}> 
                            <Text style={styles.textNomeCompleto}>Entrada</Text>
                            <View style={styles.viewTextInputTime}> 
                                <TextInput  onChangeText={(text)=>this.salveEntrada(text)}  style={styles.textInput}/>
                            </View> 
                        </View>
                        
                        <View style={{height: 80,flex:1,}}> 
                            <Text style={styles.textNomeCompleto}>Saída</Text>
                            <View style={styles.viewTextInputTime}> 
                                <TextInput onChangeText={(text)=>this.salveSaida(text)} style={styles.textInput}/>
                            </View> 
                        </View>

                    </View>

                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => this.salveRadio(value)}
                        formHorizontal={true}
                        style={styles.radio}
                        buttonColor={"#ffffff"}
                        labelStyle={{fontSize: 14, color: '#fff'}}
                        buttonStyle={{color:"#ffffff"}}
                        buttonInnerColor={"#ffffff"}

                        buttonSize={10}
                        
                    />
                  
                    <TouchableOpacity style={styles.viewButton} onPress={this.fazerCadastro}>
                            <Text style={styles.textButton}>Cadastrar</Text>
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

    viewTextInputSerie:{
      
        height: 42,
        borderRadius: 2,
        backgroundColor: "#dac9de",
        marginHorizontal: 24,
        marginTop: 8
    },

    viewTextInputTime:{
       
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
    },

    radio:{
        alignSelf: 'center',
        marginTop: 24,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "left",
        color: "#f7f7f7"
    }
})
