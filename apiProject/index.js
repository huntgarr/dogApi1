'use strict';
function getDogImage(input) {
if (input < 1  || input > 50) {
alert("Please choose a number between 1 and 50")
} else if (input >= 1 && input <= 50) {
fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
.then(response => response.json())
.then(responseJson =>
displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.'));
} else {
fetch(`https://dog.ceo/api/breeds/image/random/3`)
.then(response => response.json())
.then(responseJson =>
displayResults(responseJson))
.catch(error => alert('Something went wrong. Try again later.'));
}
}
function displayResults(responseJson) {
console.log(responseJson);
$('.image').empty()
for (let i = 0; i < responseJson.message.length; i++) {
$('.image').append(
`<img src = "${responseJson.message[i]}" class="image">`
)
}
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
