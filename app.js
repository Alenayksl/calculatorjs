const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".btn-op");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
let display = document.getElementById("display");

buttons.forEach(buttons => { 
    buttons.addEventListener("click" , () => {
        display.value += buttons.textContent;
    });
});

equals.addEventListener("click" , () => {
try{
    display.value = eval(display.value);
}catch{
    display.value = "Error";
}

});

clear.addEventListener("click" , () => {
    display.value = "";
});