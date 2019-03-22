export class UserSearch{

  constructor(symptom, ) {
    this.symptoms = symptom;
  }
  SearchSymptoms(symptom){
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}";
      
    });
  }
}
