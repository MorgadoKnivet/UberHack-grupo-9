APIKeyPlaces = "AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg",


module.exports  = {
    

    //https://maps.googleapis.com/maps/api/place/autocomplete/json?input=rua%20um&key=AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg
    //https://maps.googleapis.com/maps/api/place/autocomplete/json?language=pt_BR&types=address&radius=500&location=-22.9068467,%20-43.1728965&key=AIzaSyAcMlD_c8CKAAUlcLXo643s9qBNhtXkALg&input=blumenau,%20241
    PlacesApi: `https://maps.googleapis.com/maps/api/place/autocomplete/json?language=pt_BR&radius=50&hasNextPage&key=${this.APIKeyPlaces}`,
    reverseGeoCodeApi: `https://maps.googleapis.com/maps/api/geocode/json?key=${this.APIKeyPlaces}`,
    detailsApi: `https://maps.googleapis.com/maps/api/place/details/json?&key=${this.APIKeyPlaces}`,
    distanceMatrixApi: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&key=${this.APIKeyPlaces}`,
    sendDriverMail : 'https://us-central1-bimp-91bf4.cloudfunctions.net/driverSendEmail',

    
    latitudeDefault  : -22.995457,
    longitudeDefault :  -43.237558,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0221,
    iosDistance : 30,

    Path:{
        goInicialState: "goInitialState",
        goConfirmarDados: "goConfirmarDados",
        goSelectUserLoction : "goSelectUserLoction",
    },
    
    collectionUser: "User",
    colectionMotoristaOnline: "MotoristaOnline",
    colectionUserOnline: "UserOnline",
    collectionCorridasAcontecendo: "CorridasAcontecendo",
    collectionChat: "Chat",
    collectionHistoricoCorridas: "HistoricoCorridas",
    collectionCorridaCancelada: "CorridaCancelada",
    /* ERRROS FIREBASE */

    errorUserExist: "The email address is already in use by another account.",
    errorSenhaIncorreta: "The password is invalid or the user does not have a password.",
    errorUsuarioNaoExiste: "There is no user record corresponding to this identifier. The user may have been deleted.",

    pathStorageFotoPerfil:"images/FotoPerfil/",
    pathStorageFotoDocs: "images/FotoDocs/",
    // Textos

    distanceKm: 3,
    limitSendDriverPosition: 15,
    numberWhatsApp:5521992706647

  
}

