

window.addEventListener('DOMContentLoaded',(event) =>{



let set = document.getElementById("email");
let button = document.querySelector("button")
button.onclick=function(){check(event)}
button.addEventListener("click", function(event){event.preventDefault()})
function check(){
    if (set.value == ""){
        document.querySelector(".newsletter .message").textContent ="Please enter a valid email address";      
        
       
    }
    else{
    document.querySelector(".newsletter .message").textContent ="Thank you! Your email address " + set.value +" has been added to our mailing listings";
        
}
}

});