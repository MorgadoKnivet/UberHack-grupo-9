class Mototaxista {
    constructor(cpf,rg,endereco,dataNacimento,modeloMoto,placaMoto,idFotoDocMoto,idFotoHabilitacao,urlFotoDocMoto,urlFotoHabilitacao,dataInicio,aprovado,boasVindas,errorCadastro,connectado,historico) {
      this.cpf = cpf
      this.rg = rg
      this.endereco = endereco
      this.dataNacimento = dataNacimento
      this.modeloMoto = modeloMoto
      this.placaMoto = placaMoto
      this.idFotoDocMoto = idFotoDocMoto
      this.idFotoHabilitacao = idFotoHabilitacao
      this.urlFotoDocMoto = urlFotoDocMoto
      this.urlFotoHabilitacao = urlFotoHabilitacao
      this.aprovado = aprovado
      this.boasVindas =  boasVindas
      this.errorCadastro = errorCadastro
      this.connectado=connectado
      this.historicoCorridas = []
      this.nota = null
      this.dataInicio = dataInicio
    }
  
  }

  export default (Mototaxista) 