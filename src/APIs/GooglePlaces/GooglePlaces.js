import axios from 'axios';
import constants  from '../../config/constants' 


module.exports = {
  async fetchPlaces(text,location) {
    // fazer pedido HTTP para obter todos os posts
    //text = "rio"

    const REQUEST_URL = `${constants.PlacesApi}`;

     console.log("location "+location)
   //  console.log(Location)
   //  console.log()
      var response = await axios.get(`${REQUEST_URL}&input=${text}&location=${location}`)  
      .then(function (response) {
        console.log(response)

        return response.data.predictions
      })
      .catch(function (error) {
        console.log(error);
        return ''
      })

      return response

  },

  async reverseGeoCode(lat,lng){
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452
    const REQUEST_URL = `${constants.reverseGeoCodeApi}`;

    return await axios.get(`${REQUEST_URL}&latlng=${lat+","+lng}`)  

    .then(function (response) {
       // console.log(response)
        
        //return response.data.results[6]
        return response
       //return lat + ','+lng
    })
    .catch(function (error) {
      console.log(error);
      return ''
    })
  },

  async detailsPlace(placeId){
    //https://maps.googleapis.com/maps/api/place/details/json?&key=AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg

    const REQUEST_URL = `${constants.detailsApi}`;

    return await axios.get(`${REQUEST_URL}&placeid=${placeId}`)  

    .then(function (response) {
        console.log("DetailsPlace")
        console.log(response)
       // console.log(response)
        //return response.data.results[6]
        return response.data
       //return lat + ','+lng
    })
    .catch(function (error) {
      console.log(error);
      return ''
    })

  },

  async distanceMatrix(origem, destino){
    //https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=-22.892943,-43.335979&destinations=-22.8899285,-43.3295615&key=AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg
    
    const REQUEST_URL = `${constants.distanceMatrixApi}`;

    return await axios.get(`${REQUEST_URL}&origins=${origem.lat+','+origem.lng}&destinations=${destino.lat+','+destino.lng}`)  

    .then(function (response) {
        console.log(response)
        
        //return response.data.results[6]
        return response.data
       //return lat + ','+lng
    })
    .catch(function (error) {
      console.log(error);
      return ''
    })
    
  },

  async distanceMatrixArray(origem, destino){
    //https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=-22.892943,-43.335979&destinations=-22.8899285,-43.3295615&key=AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg
    
    let auxDestino = ""

    destino.forEach(item => {
        console.log(item)
       auxDestino = auxDestino + item.local.lat+','+item.local.lng +"|"
    });

    console.log("auxDestino : ", auxDestino)
    console.log('origins: '+origem.lat + " "+origem.lng)

    const REQUEST_URL = `${constants.distanceMatrixApi}`; 

    return await axios.get(`${REQUEST_URL}&origins=${origem.lat+','+origem.lng}&destinations=${auxDestino}`)  

    .then(function (response) {
        console.log(response)
        
        //return response.data.results[6]
        return response.data
       //return lat + ','+lng
    })
    .catch(function (error) {
      console.log(error);
      return false
    })
    
  }
}




