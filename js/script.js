document.querySelector(".pop-up-button").addEventListener("click", function(event){
  document.querySelector(".dark-background").style.display = 'block';
}, false);

document.querySelector(".close").addEventListener("click", function(event){
  document.querySelector(".dark-background").style.display = 'none';
}, false);
