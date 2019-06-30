import React from 'react';

import { View,StyleSheet, } from 'react-native';

// import { Container } from './styles';
import DayInico from './CheckDayUnico'

const CheckDaySemana = ({onPressSegunda,onPressTerca,onPressQuarta,onPressQuinta,onPressSexta}) => 
(<View style={styles.containerDayInicio}>
    
    <DayInico onPress={onPressSegunda} daySemana={"2ª feira"} on/>
    <DayInico onPress={onPressTerca} daySemana={"3ª feira"} on/>
    <DayInico onPress={onPressQuarta} daySemana={"4ª feira"} on/>
    <DayInico onPress={onPressQuinta} daySemana={"5ª feira"} on/>
    <DayInico onPress={onPressSexta} daySemana={"6ª feira"} on />
</View>);



const styles = StyleSheet.create({
   containerDayInicio:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginRight: 16,
   }
})
export default CheckDaySemana;