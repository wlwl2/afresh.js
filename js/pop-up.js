(function popUp () {
  var popUp = document.querySelectorAll(".pop-up"),
  popUpAndBackground = document.querySelectorAll(".pop-up-and-background"),
  popUpButton = document.querySelectorAll(".pop-up-button"),
  popUpClose = document.querySelectorAll('.pop-up-close a');

  for (var i = 0; i < popUp.length; i++) {
    (function (i) {
      window.addEventListener("click", function(event){
        console.log(i);
        if (event.target === popUpAndBackground[i]) {
          popUpAndBackground[i].style.display = 'none';
        }
      }, false);

      popUpButton[i].addEventListener("click", function(event){
        console.log(i);
        popUpAndBackground[i].style.display = 'block';
      }, false);

      popUpClose[i].addEventListener("click", function(event){
        console.log(i);
        popUpAndBackground[i].style.display = 'none';
      }, false);
    })(i);
  }
})();
