import React from 'react';

import { View,StyleSheet, } from 'react-native';

// import { Container } from './styles';
import DayInico from './CheckDayUnico'

const CheckDaySemana = () => 
(<View style={styles.containerDayInicio}>
    <DayInico daySemana={"2ª feira"} on/>
    <DayInico daySemana={"3ª feira"}/>
    <DayInico daySemana={"4ª feira"} on/>
    <DayInico daySemana={"5ª feira"}/>
    <DayInico daySemana={"6ª feira"}/>
</View>);



const styles = StyleSheet.create({
   containerDayInicio:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginRight: 16,
   }
})
export default CheckDaySemana;