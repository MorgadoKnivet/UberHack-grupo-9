class User {
    constructor(uid,nome,sobrenome,telefone,sexo,email,idImagemPerfil,urlImagemPerfil,mototaxista,dataInicio,userState,nota,chat,historicoCorridas) {
      this.uid = uid
      this.nome = nome
      this.sobrenome = sobrenome
      this.telefone = telefone
      this.sexo = sexo
      this.email = email
      this.idImagemPerfil = idImagemPerfil  
      this.urlImagemPerfil = urlImagemPerfil
      this.mototaxista = mototaxista
      this.dataInicio = dataInicio
      this.userState = userState
      this.nota = nota
      this.chat = chat
      this.historicoCorridas = []
    }
  
  }

  export default (User) 