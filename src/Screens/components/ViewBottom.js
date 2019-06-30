import React from 'react';

import { View,Image,StyleSheet,Text } from 'react-native';

// import { Container } from './styles';

const ViewBottom = ({dayQuarOK,dayQuinOK,daySegOK,daySexOK,dayTerOK}) => (
    <View style={styles.viewBottom} >
    <View style={styles.itemBottom}>
      <Image style={{ marginTop:16}}source={require('../../assets/btEdit.png')} />
      <Text style={styles.textDay}>2ª feira</Text>

      {
          daySegOK ?
              <View style={{ width: 33,height: 33,borderRadius:33/2,borderWidth:6,backgroundColor: "#7f9d67",borderColor:'#fff'}}> 
              
              </View>
          : 
              <View style={styles.checkOff}> 
              
              </View>
      }

    </View>

    <View style={styles.itemBottom}>
    <Image style={{ marginTop:16}}source={require('../../assets/btEdit.png')} />
      <Text style={styles.textDay}>3ª feira</Text>

      {
          dayTerOK?
              <View style={{ width: 33,height: 33,borderRadius:33/2,borderWidth:6,backgroundColor: "#7f9d67",borderColor:'#fff'}}> 
              
              </View>
          : 
              <View style={styles.checkOff}> 
              
              </View>
      }

    </View>

    <View style={styles.itemBottom}>
    <Image style={{ marginTop:16}}source={require('../../assets/btEdit.png')} />
      <Text style={styles.textDay}>4ª feira</Text>

      {
          dayQuarOK ?
              <View style={{ width: 33,height: 33,borderRadius:33/2,borderWidth:6,backgroundColor: "#7f9d67",borderColor:'#fff'}}> 
              
              </View>
          : 
              <View style={styles.checkOff}> 
              
              </View>
      }

    </View>

    <View style={styles.itemBottom}>
    <Image style={{ marginTop:16}}source={require('../../assets/btEdit.png')} />
      <Text style={styles.textDay}>5ª feira</Text>

      {
          dayQuinOK ?
              <View style={{ width: 33,height: 33,borderRadius:33/2,borderWidth:6,backgroundColor: "#7f9d67",borderColor:'#fff'}}> 
              
              </View>
          : 
              <View style={styles.checkOff}> 
              
              </View>
      }

    </View>

    <View style={styles.itemBottom}>
    <Image style={{ marginTop:16}}source={require('../../assets/btEdit.png')} />
      <Text style={styles.textDay}>6ª feira</Text>

      {
          daySexOK ?
              <View style={{ width: 33,height: 33,borderRadius:33/2,borderWidth:6,backgroundColor: "#7f9d67",borderColor:'#fff'}}> 
              
              </View>
          : 
              <View style={styles.checkOff}> 
              
              </View>
      }

    </View>

</View>
);
const styles = StyleSheet.create({
viewBottom:{
    //   alignSelf: 'flex-end',
       flexDirection: 'row',
    
       height: 95.5,
       backgroundColor: "#f8f8f8",
      
     
 },


    itemBottom:{
      width: '20%',
      height:'100%',
  
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#eaeaea",

      alignItems: 'center'

    },

    itemBottomStart:{
        width: '20%',
        height:'100%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#eaeaea"
  
    },

    itemBottomFinal:{
        width: '20%',
        height:'100%',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#eaeaea"
  
    },
    checkOff:{
        width: 27,
        height: 27,
        borderRadius: 33/2,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c9c9c9",
        marginTop:3
    }

})
export default ViewBottom;
