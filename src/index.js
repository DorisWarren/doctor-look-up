import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DayPicker} from "./scripts.js";


$(document).ready(function(){
  $("#dateForm").submit(function(event){
  event.preventDefault();
  const grooveDate=  $("#dateInput").val();
  console.log(grooveDate);
  const datePicker= new DayPicker();
  const theObject= datePicker.stringToObject(grooveDate);
  const dateOfweek= datePicker.findDay();
  $(".result").text(dateOfweek);
  });
});
