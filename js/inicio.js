document.addEventListener("DOMContentLoaded", page_init);
var hmbBtn = null;
var navElm = null;
function page_init (){
  hmbBtn = document.getElementsByClassName("burguer")[0];
  navElm = document.querySelectorAll("header nav ul")[0];
  hmbBtn.addEventListener("click", burguer_click);
}

function burguer_click(e){
  e.preventDefault();
  e.stopPropagation();
  navElm.classList.toggle("open"); 
}

