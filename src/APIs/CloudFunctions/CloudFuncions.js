import firebase from 'react-native-firebase';
GLOBAL = require('../../model/GlobalState');
import axios from 'axios';
import {sendDriverMail} from '../../config/constants' 

module.exports = {
    async sendDriverMail(user) {
          var response = await axios.post(sendDriverMail,user) 
          .then(function (response) {
            console.log(response)
            
            return response
          })
          .catch(function (error) {
            console.log(error);
            return ''
          })
    
          return response
    
      }
}