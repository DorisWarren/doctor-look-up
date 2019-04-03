import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {UserSearch} from "./scripts.js";

$(document).ready(function() {
  $('.results').hide();
  let newSearch = new UserSearch();
  $('#feeling-dead-button').click(function(){
    event.preventDefault();
    let symptom = $('#symptom-input-dead').val();
    let promise = newSearch.searchSymptoms();

    promise.then(function(response) {
      $('.doc-info').text("");
      let body = JSON.parse(response);
      let noDocs = true;
      for(let i = 0; i < 10; i ++){
        for (let j = 0; j < body.data[i].specialties.length; j++) {
          if (body.data[i].specialties[j].description.match(symptom)) {
            console.log(body.data[i]);
            $('.doc-info').append('<img src="' + body.data[i].profile.image_url + '">');
            $('.doc-info').append('<p>' + body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + "," + body.data[i].practices[0].visit_address.state + " " + "Phone Number:" + " " + body.data[i].practices[0].phones[0].number + " " + "New patient availability:" + body.data[i].practices[0].accept_new_patients + '</p>');
            // noDocs = false;
          }
        }
      }
      if (noDocs) {
        $('.doc-info').text("Sorry, There are no doctors that match your request.");
      }

    },
    function(error){
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
    $('.results').show();
  });
  $('#hot-doc-button').click(function(){
    event.preventDefault();
    let doctorLastName = $('#docLastNameInput').val();
    let promise = newSearch.searchSymptoms();

    promise.then(function(response) {
      $('.doc-info').text("");
      let body = JSON.parse(response);
      let noDocs = true;
      for(let i = 0; i < 10; i ++){
        for (let j = 0; j < body.data[i].specialties.length; j++) {
          console.log(body.data[i].practices[0]);
          if (body.data[i].practices[0].name.includes(doctorLastName)) {
            $('.doc-info').append('<img src="' + body.data[i].profile.image_url + '">');
            $('.doc-info').append('<p>' + body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + "," + body.data[i].practices[0].visit_address.state + " " + "Phone Number:" + " " + body.data[i].practices[0].phones[0].number + " " + "New patient availability:" + body.data[i].practices[0].accept_new_patients + '</p>');
            noDocs = false;
          }
        }
      }
      if (noDocs) {
        $('.doc-info').text("Sorry, There are no doctors that match your request.");
      }
    },
    function(error){
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
    $('.results').show();
  });
});
