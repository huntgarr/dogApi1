'use strict';
function getDogImage(input){
fetch(`https://dog.ceo/api/breed/${input}/images/random`)
.then(response => response.json())
.then(responseJson =>
displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
console.log(responseJson);
$('.image').empty()
$('.image').append(
`<img src = "${responseJson.message}" class="image">`
)
}

function watchForm() {
$('form').submit(event => {
event.preventDefault();
let input = $(".text").val();
getDogImage(input);
});
}
$(function() {
console.log('App loaded! Waiting for submit!');
watchForm();
});
