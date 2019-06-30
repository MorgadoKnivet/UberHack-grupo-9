import {distanceKM} from '../config/constants'

module.exports = {
   async arePointsNear(checkPoint, centerPoint) {
        var ky = 40000 / 360;
        var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
        var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
        var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
       // return Math.sqrt(dx * dx + dy * dy) <= distanceKM;
        return Math.sqrt(dx * dx + dy * dy) 
    },

    async curveCalculation (start,end){

      let cLat = ((start.latitude + end.latitude) / 2);
      let cLon = ((start.longitude + end.longitude) / 2);

      let arrayPoints = []
      //add skew and arcHeight to move the midPoint
      if(Math.abs(start.longitude - end.longitude) < 0.0001){
          console.log("cLon")
          console.log(cLon)
          cLon -= 0.0195;
      } else {
          
          console.log(cLat)
          cLat += 0.0035;
      }

      let tDelta = 1.0/50;
      for (let t = 0;  t <= 1.0; t+=tDelta) {
          let oneMinusT = (1.0-t);
          let t2 = Math.pow(t, 2);
          let lon = oneMinusT * oneMinusT * start.longitude
                  + 2 * oneMinusT * t * cLon
                  + t2 * end.longitude;
          let lat = oneMinusT * oneMinusT * start.latitude
                  + 2 * oneMinusT * t * cLat
                  + t2 * end.latitude;
          
          arrayPoints.push({latitude:lat,longitude:lon})
      }

      return arrayPoints

    

  }
 
}