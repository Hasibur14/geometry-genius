
function calculateRhombusArea(){
    const  d1 = getRhombusValue('rhombus-d1');
    const d2 = getRhombusValue('rhombus-d2');

    const area = 0.5 * d1 * d2;
    setInnerText('rhombus-area',area);
 
}

function getRhombusValue(value){
    const inputField = document.getElementById(value);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}