import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {UserSearch} from "./scripts.js";

$(document).ready(function() {
  $('.results').hide();
  $('#feeling-dead-button').click(function(){
    event.preventDefault();
    let symptom = $('#symptom-input-dead').val();
    let newSearch = new UserSearch(symptom);
    let promise = newSearch.searchSymptoms(symptoms);

    promise.then(function(response) {
      $('.doctor-info').text("")
      $('#symptom-form').children('input').val('')
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.doctor-info').text("Sorry, There are no doctors that match your request.");
      } else {
        for(let i = 0; i < 10; i ++){
          $('.doctor-info').append(body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + "," + body.data[i].practices[0].visit_address.state + " " + "Phone Number:" + " " + body.data[i].practices[0].phone[0].number + " " + "New patient availability:" + body.data[i].practices[0].accept_new_patients);
        }
      }
    },
    function(error){
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
    $('.results').show();
  });
  $('#hot-doc-button').click(function(){
    event.preventDefault();
    let doctorFirstName = $('#docNameInput').val();
    let doctorLastName = $('#docLastNameInput').val();
    let newDocSearch = newDocSearch.searchDoctors(doctorFirstName, doctorLastName);
    let promise = newDocSearch.searchDoctors(doctorFirstName, doctorLastName);

    promise.then(function(response) {
      $('.doctor-info').text("")
      $('#doctor-form').children('input').val('')
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.doctor-info').text("Sorry, There are no doctors that match your request.");
      } else {
        for(let i = 0; i < 10; i ++){
          $('.doctor-info').append(body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + "," + body.data[i].practices[0].visit_address.state + " " + "Phone Number:" + " " + body.data[i].practices[0].phone[0].number + " " + "New patient availability:" + body.data[i].practices[0].accept_new_patients);
        }
      }
    },
    function(error){
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
    $('.results').show();
  });
});
