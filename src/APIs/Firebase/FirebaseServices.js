import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import User from '../../model/User'
GLOBAL = require('../../model/GlobalState');

module.exports = {

    /* AUTH */

    async FirebaseAuthFacebook (){
        // https://bimp-91bf4.firebaseapp.com/__/auth/handler
         const result = await LoginManager.logInWithReadPermissions(['public_profile','email'])
            .then((response) => {
                console.log(response)
                return {sucess:true, response}
            })
            .catch((error) => {
                console.log(error)
                return {sucess:false, error: "Usuário cancelou requisição"}

            } )

         console.log(`Login success with permissions: ${result.response.grantedPermissions.toString()}`);

         if (result.sucess) {
            
            const data = await AccessToken.getCurrentAccessToken()
                .then((response) => {
                    console.log(response)
                    return {sucess:true, response}
                })
                .catch((error) => {
                    console.log(error)
                    return {sucess:false, error: "Algum erro ocorreu ao requisitar o token do usuário"}

                } )

            const credential = firebase.auth.FacebookAuthProvider.credential(data.response.accessToken);


            const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)
                .then((response) => {
                    console.log(response)
                    return {sucess:true, response}
                })
                .catch((error) => {
                    console.log(error)
                    return {sucess:false, error: "Algum erro ocorreu ao logar no firebase com o facebook"}

                } )
             
            
            if (firebaseUserCredential.sucess) {
                if (firebaseUserCredential.response.additionalUserInfo.isNewUser == true) {
                
                    let {email,first_name,last_name} = firebaseUserCredential.response.additionalUserInfo.profile
                    let {photoURL,uid} = firebaseUserCredential.response.user._user
    
                    let user = new User(uid,first_name,last_name,'','',email,"",photoURL,{},new Date().toLocaleString())
                    
                    GLOBAL.user = user
                    GLOBAL.auth = firebaseUserCredential.response.user._user
    
                    return {sucess: true, isNewUser:true, uid,user}
    
                }else{
                    let {email,first_name,last_name} = firebaseUserCredential.response.additionalUserInfo.profile
                    let {photoURL,uid} = firebaseUserCredential.response.user._user
    
                    let user = new User(uid,first_name,last_name,'','',email,"",photoURL,{},new Date().toLocaleString())

                    GLOBAL.user = user
                    GLOBAL.auth = firebaseUserCredential.response.user._user
    
                    return {sucess: true, isNewUser:false, uid,user}
                }    

         
            }    
           
                

         }

    },

    async FirebaseAuthEmailAndPasswordCreate (email,senha){
        let response = await firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then((task) => {

            console.log(task)
            let uid = firebase.auth().currentUser.uid
            let user= firebase.auth().currentUser

            return {sucess:true, user,uid }
            //https://firebase.google.com/docs/auth/android/password-auth?hl=pt-BR
        })
        .catch ( (error) => {
            console.log(error)
            //console.log()
            
            return error.message
            
        })

        return response
    },

    async FirebaseAuthEmailAndPasswordSignIn (email,senha){
        let response = await firebase.auth().signInWithEmailAndPassword(email,senha)
        .then((task) => {
       //     let uid = firebase.auth().currentUser.uid
        
            console.log(firebase.auth().currentUser)
            let user= firebase.auth().currentUser
            return {sucess:true, user}
            //https://firebase.google.com/docs/auth/android/password-auth?hl=pt-BR
        })
        .catch ( (error) => {
            
            console.log(error)
            return {sucess:false, error:error.message}
        })

        return response

    },

    async FirebaseSendEmailVerification (){
       let response = await firebase.auth().currentUser.sendEmailVerification()
        .then((task) => {
        
            console.log(task)
            
            return {sucess:true}
            //https://firebase.google.com/docs/auth/android/password-auth?hl=pt-BR
        })
        .catch ( (error) => {
            console.log(error)
            return {sucess:false}
        })

        return response

    },

    async  FirebaseAuthSignOut (){
       let response = await firebase.auth().signOut()
       .then((task) => {
            console.log(task)
            return {sucess:true}

        })
        .catch ( (error) => {
            console.log(error)
            
            return {sucess:false}
        })

        return response
    },

    async FirebaseAuthInfo(){
        let user = await firebase.auth().currentUser
        if (user != null) {
            console.log(user)
            return {sucess:true,user}
        } else {
            return {sucess: false, error: "Não existe um usuário logado"}
        }
    },

    async FirebaseRecoverPassword(email){
        let response = firebase.auth().sendPasswordResetEmail(email)
            .then((task) => {
                console.log(task)
                return {sucess:true}
            })
            .catch ( (error) => {
                console.log(error)
                return {sucess:false, error:error.message}
            })
        return response    
    },

    async FirebaseUpdateEmail (email){
        let response = firebase.auth().currentUser.updateEmail(email)
            .then((task) => {
                console.log(task)
                return {sucess:true}
            })
            .catch ( (error) => {
                console.log(error)
                return {sucess:false, error:error.message}
            })

        return response    
    },  

    async FirebaseUpdatePassword (password){
        let response = firebase.auth().currentUser.updatePassword(password)
            .then((task) => {
                console.log(task)
                return {sucess:true}
            })
            .catch ( (error) => {
                console.log(error)
                return {sucess:false, error:error.message}
            })

        return response    
    },  

     /* FIRESTORE */

    async FirestoreCollectionDoc(colllection,doc,data){

        let response = await firebase.firestore().collection(colllection).doc(doc).set(data) 
            .then((response) => {
                console.log(response)
              //  GLOBAL.contReqWrite =  GLOBAL.contReqWrite + 1
                return {sucess:true}
            })
            .catch((error) => {
                console.log(error)
                return {sucess:false,error:error.message}
            } )
            
            
        return response    
    },

    async FirestoreReadCollection(colllection){
        
        let response = await firebase.firestore().collection(colllection).get()
        .then((response) => {
            console.log(response)
          
            return {sucess:true,response}
            
        })
        .catch((error) => {
            console.log(error)
            return {sucess:false}
        } )

        return response    
    },

    async FirestoreReadCollectionDoc(colllection,doc){
        
        let response = await firebase.firestore().collection(colllection).doc(doc).get()
        .then((response) => {
            console.log(response.data())
            return {sucess:true,response:response.data()}
        })
        .catch((error) => {
            console.log(error)
            return {sucess:false}
        } )

        return response    
    },

    async FirestoreUpdateCollectionDoc(colllection,doc,data){
        let response = await firebase.firestore().collection(colllection).doc(doc).update(data)
        .then((response) => {
          //  console.log(response)
            return {sucess:true}
        })
        .catch((error) => {
            console.log(error)
            return {sucess:false}
        } )

        return response  
    },

    async FirestoreDeleteDoc(colllection,doc){
        let response = await firebase.firestore().collection(colllection).doc(doc).delete()
        .then((response) => {
          //  console.log(response)
            return {sucess:true}
        })
        .catch((error) => {
            console.log(error)
            return {sucess:false,error:error.message}
        } )

        return response  
    },

    /* STORAGE */

    async FirebaseStorageInsert(pathStorage,file){

        
        let response = await firebase.storage().ref().child(pathStorage).putFile(file)
            .then(response =>{
                console.log(response)

                // response.downloadURL retorna url de acesso via navegador

                return {sucess:true,response}
            })

            .catch(error => {
                console.log(error)

                return {sucess:false}
            } )
        
        return response
    },

    async FirebaseStorageRead (pathStorage,idImagem){

        let pathReference = await firebase.storage().ref().child(pathStorage+'/'+idImagem)

        
        let response = await firebase.storage().refFromURL(pathReference)
      //  console.log("teste")
        let responseURL = await response.getDownloadURL()
            .then(response =>{
                console.log(response)

                // response.downloadURL retorna url de acesso via navegador

                return {sucess:true,url:response}
            })

            .catch(error => {
                console.log(error)

                return {sucess:false}
            } )

        return responseURL    
    }









}