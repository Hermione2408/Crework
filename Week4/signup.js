let emailContainer;
let passwordContainer;
(function(window, document, undefined){

    
    window.onload = init;
    
      function init(){
         emailContainer=document.getElementById("email")
         passwordContainer = document.getElementById("password")
        emailContainer.addEventListener("change",(e)=>onChangeEmail(e))
        passwordContainer.addEventListener("change",(e)=>onChangePassword(e))
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
        }
        else{

            emailContainer.classList.remove('green-border')
            emailContainer.classList.add('error-border')
            let errorElement = document.getElementById("email-error")
            errorElement.style.display = 'block'
        }
    }
    
}

function onChangePassword(evt){
    evt.preventDefault();
    if(evt.target.value.length>0){
        if(validatePassword(evt.target.value)){
            passwordContainer.classList.remove('error-border')
            passwordContainer.classList.add('green-border')
            let errorElement = document.getElementById("password-error")
            errorElement.style.display = 'none'
        }
        else{
            passwordContainer.classList.remove('green-border')
            passwordContainer.classList.add('error-border')
            let errorElement = document.getElementById("password-error")
            errorElement.style.display = 'block'
        }
    }
    
}