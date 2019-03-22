import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {UserSearch} from "./scripts.js";


$(document).ready(function(){
  $("#feeling-dead-button").click(function(){
  event.preventDefault();
  const symptom = $("#symptom-input-dead").val();
  const newSearch = new UserSearch(symptom);
  console.log(newSearch);
  });



});
