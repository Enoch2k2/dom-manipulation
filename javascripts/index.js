document.addEventListener("DOMContentLoaded", function () {
  let hidden = false;
  let p = document.querySelector('p');
  let button = document.querySelector('button');
  let link = document.querySelector('a');

  function toggleParagraph() {
    if (hidden) {
      p.style.display = "block";
      hidden = false;
    } else {
      p.style.display = "none";
      hidden = true;
    }
  }
  link.addEventListener('click', linkAlert);
  button.addEventListener('click', toggleParagraph);
})

function linkAlert(e) {
  e.preventDefault();
  alert('were not actually going to google, just kidding!')
}

