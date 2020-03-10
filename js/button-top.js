//Get the button:
var buttonTop = document.getElementById('buttonTop');
//Get the height of header (min. 100vh):
var headerHeight = document.getElementById('header');

// When the user left behind the header from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > headerHeight.scrollHeight || document.documentElement.scrollTop > headerHeight.scrollHeight) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
}

// When the user clicks on the div, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}