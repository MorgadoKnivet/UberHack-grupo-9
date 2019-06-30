



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,FlatList,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Perfil from './components/perfilBlack'
import ViewBottom from './components/ViewBottom'

import { FirestoreReadCollection} from '../APIs/Firebase/FirebaseServices'
import { Actions } from 'react-native-router-flux';

console.disableYellowBox = true;

export default class Main extends Component {

  
    state={
        daySegOK: true,
        dayTerOK:false,
        dayQuarOK:true,
        dayQuinOK:true,
        daySexOK: false,
        array: [],
        arrayInicial: [],

        seg:false,
        terca:false,
        quarta:false,
        quinta:false,
        sexta:false,
    }

    onItemPress = (item) => {
      console.log("Teste Item")
      console.log(item)

      Actions.mainTwo({user:item})
     
    }

    renderItem = ({item}) => {

  
        return ( 
            <TouchableOpacity onPress={()=>this.onItemPress(item)} style={styles.containerItem}> 
                
                <Perfil foto={item._data.idFoto} afinidade={item._data.afinidade} avaliacao={item._data.avaliacao} nomeFilho={item._data.nomeFilho} nome={item._data.nome} />

                <View style={{flex:1, alignItems:'flex-end'}}>
                    <View style={{ width: 45,height: 45,backgroundColor: "#f7c417",borderRadius:45/2,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/invalidName.png')}/>
                    </View>
                </View>

            </TouchableOpacity >
        )
    
    }

    async componentDidMount (){
      let response =  await FirestoreReadCollection("PaisMotoristas")
      
      console.log(response) 

      let array = response.response._docs

      this.setState({array})

      this.refFirebase = firebase.firestore().collection(colectionUserOnline);

    }

    searchList = (aux) => {

      

      if (aux != "" || aux != null) {
        console.log(aux)
        for (const iterator of this.state.array) {
          console.log(iterator)
          if(iterator._data.enderecoColegio.includes(aux)){
          //  console.log("teste") 
          //  let {arrayInicial} = this.state
         //   let arrayAux = []
        //  // arrayAux.push(iterator)
          //  let newArrat = arrayAux.concat(arrayInicial)
        //    newArrat.push(iterator)
           // const filteredData = corridasOrdenadas.filter(item => item.id !== id);
        //   if (arrayInicial.length <= 1) {
           // this.setState({arrayInicial:newArrat})
          //  }
          /*
          }else{
            let {arrayInicial} = this.state
            const filteredData = arrayInicial.filter(iterator => it.id !== id);
            this.setState({ arrayInicial:filteredData });
  
          }
        */}
        }
      }

     
      
    }
    

  render() {
    return (
      <View style={styles.container}>
          <View>
            <View style={styles.topBar}>

                <View style={styles.innerTopBar}>
                    <Image source={require('../assets/logo.png')} />
                    <Text style={styles.centerTextInnerTop}>Seleção de Motoristas</Text>
                    <Image source={require('../assets/iconHamb.png')}/>
                </View>
                <View style={styles.viewTextInput}>
                    <View>
                        <Text style={styles.textInputTitulo}>Endereço da Escola</Text>
                        <View style={styles.viewTextInputDois}>
                            <TextInput onChangeText={(aux)=>this.searchList(aux)} placeholder={"Rua Faro 80, Jardim Bot…"} style={styles.textInput}/>
                        </View>
                      
                    </View>
                  
                    <View>
                        <Text style={styles.textInputTitulo}>Série</Text>
                        <View style={styles.viewTextInputDoisMid}>
                            <TextInput placeholder={"3ª"} style={styles.textInput}/>
                        </View>
                      
                    </View>

                    <View>
                        <Text style={styles.textInputTitulo}>Horário</Text>
                        <View style={styles.viewTextInputDoisLater}>
                            <TextInput placeholder={"7:30 - 12:30"} style={styles.textInput}/>
                        </View>
                      
                    </View>

                 
                        
                </View>
            
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textTabBar}>MELHOR AVALIAÇÃO</Text>
                    <Text style={styles.textTabBar}>AFINIDADE </Text>
                </View>
            </View>
          

            <View>
                <FlatList 
                    style = {styles.flatList} 
                    data={this.state.array} 
                    renderItem={this.renderItem}
                    keyExtractor = {(item) => item.id}       
                // extraData={this.state.corridas}
                /> 
            </View>
          </View>
          
        
          <ViewBottom daySegOK={this.state.seg} daySexOK={this.state.sexta} dayQuarOK={this.state.quarta} dayTerOK={this.state.terca} dayQuinOK={this.state.quarta}/>
             

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //top: 30,
    justifyContent: 'space-between',
    //paddingTop: 30,
    //backgroundColor: '#FF3F'
    
  },

  textInputTitulo: {
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: "#f7f7f7"
  },


  viewTextInput:{
    marginTop:18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  flatList:{

    marginTop: 24,
    marginHorizontal: 24,
    //backgroundColor: '#F3FF'

  },

  topBar:{
      height: 172,

      backgroundColor: '#47235F',
      justifyContent: 'flex-start',

      paddingHorizontal: 16,
  },

  containerItem: {
    flex:1,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start'

  },

  viewTextInputDoisLater:{
    width: 80,
  height: 42,
  borderRadius: 2,
  backgroundColor: "#f4f0f5",
  marginTop: 8
  },

  textInput:{
    flex:1,
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: "#442b55",
    marginLeft: 8
  },



  image:{
    width: 54,
    height: 54,
      borderRadius: 54/2


  },



  viewTextInputDois:{
    width: 159,
    height: 42,
    borderRadius: 2,
    backgroundColor: "#f4f0f5",
    marginTop: 8,
    marginRight:6
  },    

  viewTextInputDoisMid:{
    width: 36,
    height: 42,
    borderRadius: 2,
    backgroundColor: "#f4f0f5",
    marginTop: 8,
    marginRight:6
  },  

  

    innerTopBar:{
        ...Platform.select({
            ios: {
               paddingTop: 30,
            },
            android:{
                paddingTop: 16,
            }
          }),
       
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    centerTextInnerTop:{
        fontSize: 11,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: "left",
        color: "#ffffff"
    },

    textTabBar:{
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "left",
        color: "#f7f7f7",
        marginRight:14,
        marginTop: 14
    },

    textAvaliacao:{
        fontSize: 11,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 12,
  letterSpacing: 0,
  textAlign: "left",
  color: "#4a4250",
  marginLeft: 8,
    },

    avaliacao:{
        flexDirection: 'row',
      
    },

    textDay: {
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        color: "#4a4250",
        marginTop:14
    },

  
  
});
