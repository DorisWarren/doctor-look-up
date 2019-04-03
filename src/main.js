import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {UserSearch} from "./scripts.js";

$(document).ready(function() {
  $('#symptom-form').submit(function(event){
    event.preventDefault();
    let symptom = $('#symptomDead').val();
    let docFirstName = $('#docFirstName').val();
    let docLastName = $('#docLastName').val();

    $('#symptomDead').val("");
    $('#docFirstName').val("");
    $('#docLastName').val("");

    let newSearch = new UserSearch();
    let promise = newSearch.searchSymptoms(symptom,docFirstName,docLastName);

    promise.then(function(response) {
      $('#doc-info').text("");
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('#doc-info').text("Sorry, There are no doctors that match your request.");
      } else {
        for(var i = 0; i < 10; i ++){
          $('#doc-info').append('<img src="' + body.data[i].profile.image_url + '">');
          $('#doc-info').append(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} <br> Street: ${body.data[i].practices[0].visit_address.street} <br> ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip} <br> Phone Number: ${body.data[i].practices[0].phones[0].number} <br> <br>`) ;
        }
      }
    },
    function(error){
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
    // $('.results').show();
  });
  // $('#hot-doc-button').click(function(){
  //   event.preventDefault();
  //   let doctorLastName = $('#docLastNameInput').val();
  //   let promise = newSearch.searchSymptoms();
  //
  //   promise.then(function(response) {
  //     $('.doc-info').text("");
  //     let body = JSON.parse(response);
  //     let noDocs = true;
  //     for(let i = 0; i < 10; i ++){
  //       for (let j = 0; j < body.data[i].specialties.length; j++) {
  //         console.log(body.data[i].practices[0]);
  //         if (body.data[i].practices[0].name.includes(doctorLastName)) {
  //           $('.doc-info').append('<img src="' + body.data[i].profile.image_url + '">');
  //           $('.doc-info').append('<p>' + body.data[i].practices[0].name + " " + body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.city + "," + body.data[i].practices[0].visit_address.state + " " + "Phone Number:" + " " + body.data[i].practices[0].phones[0].number + " " + "New patient availability:" + body.data[i].practices[0].accept_new_patients + '</p>');
  //           noDocs = false;
  //         }
  //       }
  //     }
  //     if (noDocs) {
  //       $('.doc-info').text("Sorry, There are no doctors that match your request.");
  //     }
  //   },
  //   function(error){
  //     $('.showErrors').text('There was an error processing your request: ${error.message}');
  //   });
  //   $('.results').show();
  // });
});
