let operand1 ="";
let operand2 ="";
let opt

function buttonHanler(btn) {
    const pressedValue = btn.innerText

    const resultInput = document.ElementById('resultInput')
    if (isNaN(pressedValue)){
        if (pressedValue == "C") {
        {
            operand1 ="";
            operand2 ="";
            opt = underfined;
            resultInput.value ='';
            return;
        ]
        if (pressedValue == '=');
        {
            const result = perform (operand1,operand2,opt);
            resultInput.value = result ;
            operand1 = "";
            operand2 = "";
            opt = underfined;
        }else{
            opt = pressedValue;
        }
    }else{
        if (opt){
            operand2 += pressedValue; 
            resultInput.value = operand2;
        }else{
            operand1 += pressedValue; 
            resultInput.value = operand1;
        }
    }
}
function perform(orand1,orand2,otor) {
    orand1 = number(orand1)
    orand2 = number(orand2)

    switch(otor)
    {
        case '+':
            return orand1 + orand2
         case '-':
            return orand1 - orand2
        case 'x':
            return orand1 x orand2
        case ':':
             return orand1 / orand2
            }
        }
                   





        
