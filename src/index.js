import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DayPicker} from "./scripts.js";


$(document).ready(function(){
  $("#dateForm").submit(function(event){
  event.preventDefault();

  });
});
