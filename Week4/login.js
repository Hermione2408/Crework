let emailContainer;
let passwordContainer;
(function(window, document, undefined){

    
    window.onload = init;
    
      function init(){
         emailContainer=document.getElementById("email")
         passwordContainer = document.getElementById("password")
         loginButton = document.getElementById("login-btn")
        emailContainer.addEventListener("change",(e)=>onChangeEmail(e))
        loginButton.addEventListener("click",(e)=>login(e))
      }
    
    })(window, document, undefined);




function validatePassword(value){
  return  value && new RegExp(/\d/).test(value) && value.length >4 && value.length<12;
  
} 

function emailValidation(value){
    return value && new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
}

function onChangeEmail(evt){
    console.log(evt,evt.target.value)
    evt.preventDefault();
    if(evt.target.value.length>0){
        console.log(emailValidation(evt.target.value))
        if(emailValidation(evt.target.value)){
            emailContainer.classList.remove('error-border')
            emailContainer.classList.add('green-border')
            let errorElement = document.getElementById("email-error")
            errorElement.style.display = 'none'
            let loginButton = document.getElementById("login-btn")
            loginButton.disabled = false
        }
        else{

            emailContainer.classList.remove('green-border')
            emailContainer.classList.add('error-border')
            let errorElement = document.getElementById("email-error")
            errorElement.style.display = 'block'
            let loginButton = document.getElementById("login-btn")
            loginButton.disabled = true
        }
    }
    
}


function login(event){
    event.preventDefault()
    let email = emailContainer.value;
    let password = passwordContainer.value;

    if(email == "sahil@crework.in" && password=='sahil' ){
        let elementSuccess = document.getElementById("success-message");
        let elementFailure = document.getElementById("invalid-credentials")
        elementFailure.style.display = "none"
        elementSuccess.style.display = "flex"

        setTimeout(()=>{
            elementSuccess.style.display = "none"
        },5000)
    }
    else{
        let elementSuccess = document.getElementById("success-message");
        let elementFailure = document.getElementById("invalid-credentials")
        elementSuccess.style.display = "none"
        elementFailure.style.display = "flex"

        setTimeout(()=>{
            elementFailure.style.display = "none"
        },5000)
    }

}