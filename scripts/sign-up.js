let appended = 0;
let pswd = document.querySelector("#password");
let cfrmPswd = document.querySelector("#confirm-password");
let passMatch = document.createElement("p");
passMatch.textContent = "*Password doesn't match"
passMatch.id = "match";

function passMatchFunc(){
    if(pswd.value === cfrmPswd.value){
        pswd.parentElement.removeChild(passMatch);
        appended = 0; 
    }else if(appended == 0){
        pswd.parentElement.appendChild(passMatch);
        appended = 1;
    }
}

pswd.addEventListener('input',passMatchFunc);
cfrmPswd.addEventListener('input',passMatchFunc);

let btnElem = document.querySelector("button");
btnElem.addEventListener('mousedown',(event)=>{
    event.target.classList.add("pressed");
})
btnElem.addEventListener('mouseup',(event)=>{
    if(event.target.classList.contains("pressed")){
        event.target.classList.remove("pressed");
    }
})