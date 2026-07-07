document.addEventListener("DOMContentLoaded", function(){


const form = document.getElementById("leadForm");


const button = document.querySelector(".btn-download");



form.addEventListener("submit", function(event){


event.preventDefault();

if(!form.checkValidity()){


form.reportValidity();

return;


}


button.innerHTML = "Processing...";

button.disabled = true;


setTimeout(function(){


window.location.href = "thank-you.html";


},1500);



});



});