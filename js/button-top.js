var buttonTop = document.getElementById('buttonTop');
var header = document.getElementById('header');

// When the user left behind the #header, show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= header.scrollHeight || document.documentElement.scrollTop >= header.scrollHeight) {
    buttonTop.style.display = 'block';
  } else {
    buttonTop.style.display = 'none';
  }
}

// When the user clicks on the #buttonTop, scroll to the top of the document.
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}