import "bootstrap";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Giphy from "./giphy.js";

function clearFields() {
  $(".showGifs").val("");
}

$(document).ready(function () {
  $("#giphyList").on("click", function () {
    let input = $("#input").val();
    clearFields();
    let promise = Giphy.getGif(input);
    promise.then(function (response) {
      const body = JSON.parse(response);
      let i = 0;
      const source = body.data[i].images.original.url
      $(".showGifs").append(`<img src='${source} alt= 'gif'>`)
        },function (error) {
          $(".showErrors").text(
            `There was an error processing your request: ${error}`
        );
      }
    );
  });
});

$(document).ready(function () {
  $("#randomGif").on("click", function () {
    let input = $("#input").val();
    clearFields();
    let promise = Giphy.getGif(input);
    promise.then(function (response) {
      const body = JSON.parse(response);
      let i = Math.floor(Math.random() * 25);
      console.log(i)
      const source = body.data[i].images.original.url
      $(".showGifs").append(`<img src='${source} alt= 'gif'>`)
        },function (error) {
          $(".showErrors").text(
            `There was an error processing your request: ${error}`
        );
      }
    );
  });
});
