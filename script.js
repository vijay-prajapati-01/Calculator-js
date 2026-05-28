let display= document.getElementById("inputBox");
let buttons=document.querySelectorAll('button');

let buttonArray=Array.from(buttons);

let string="";


buttonArray.forEach(button=>{
  button.addEventListener('click',(event)=>{
    if(event.target.innerHTML === "AC"){
      string="";
      display.value=string;
    }
    else if(event.target.innerHTML === "DEL"){
       string=display.value;
       string =string.substring(0,string.length-1)
       display.value=string;

    }
     else if(event.target.innerHTML === "="){
       string =eval(string);
       display.value=string;

    }
    
    else{
      string +=event.target.innerHTML;
      display.value=string;
    }
    
    
  })
})

document.addEventListener('keydown', function(event) {
    let key = event.key;
    
    if (!isNaN(key) || key === '.') {
        string += key;
        display.value = string;
    } 
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        string += key;
        display.value = string;
    } 
    else if (key === 'Enter' || key === '=') {
        try {
            string = eval(string);
            display.value = string;
        } catch (error) {
            display.value = "Error";
            string = "";
        }
    } 
    else if (key === 'Backspace') {
        string = display.value;
        string = string.substring(0, string.length - 1);
        display.value = string;
    } 
    else if (key === 'Escape') {
        string = "";
        display.value = string;
    }
});