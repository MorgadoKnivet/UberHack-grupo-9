class Corrida{
    constructor(driver,passageiro,requestCorrida,startCorrida,startCorridaTime,status,locationDriver ,finishTime,avaliacaoDriver,avaliacaoUser,locationUserGPS,match) {
      this.driver = driver
      this.user = passageiro
      this.requestCorrida = requestCorrida
      this.startCorrida = startCorrida
      this.startCorridaTime = startCorridaTime
      this.status = status
      this.finishTime = finishTime
      this.avaliacaoDriver = avaliacaoDriver
      this.avaliacaoUser = avaliacaoUser
      this.locationDriver = locationDriver
      this.userLocationGPS = locationUserGPS
      this.match = match
      this.statusNumber = null
    }
  
  }

  export default (Corrida) 