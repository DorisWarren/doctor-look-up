export class UserSearch{

  searchSymptoms(symptomDead, docLastName){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let apiKey = process.env.exports.apiKey;
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${docLastName}&query=${symptomDead}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
//
// 37.773,-122.413,100
// 37.773,-122.413
  // searchDoctors(){
  //    return new Promise(function(resolve, reject) {
  //      let request = new XMLHttpRequest();
  //      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.520247,-122.674195,100&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
  //      request.onload = function() {
  //        if (this.status === 200) {
  //          resolve(request.response);
  //        } else {
  //          reject(Error(request.statusText));
  //        }
  //      };
  //      request.open("GET", url, true);
  //      request.send();
  //    });
  //  }
