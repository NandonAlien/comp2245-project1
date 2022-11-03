

window.addEventListener('DOMContentLoaded',(event) =>{



let set = document.querySelector("input #email");
let button = document.querySelector("button")
button.onclick=function(){check(event)}
button.addEventListener("click", function(event){event.preventDefault()})
function check(){
    if (set == ""){
        document.querySelector(".newsletter .message").textContent ="Please enter a valid email address";      
        
       
    }
    else{
    alert("check")
    document.querySelector(".newsletter .message").textContent ="Thank you! Your email address" + set +"has been added to our mailing listings";
        
}
}

});