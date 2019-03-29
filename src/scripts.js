export class UserSearch{

  constructor() {
  }
  searchSymptoms(symptom){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.520247,-122.674195,100&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  searchDoctors(symptom, doctorFirstName, doctorLastName){
     return new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}first_name=${doctorFirstName}$&last_name=${doctorLastName}&location=45.520247,-122.674195,100&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
       request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       };
       request.open("GET", url, true);
       request.send();
     });
   }
 }
