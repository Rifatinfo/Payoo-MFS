function getInputFieldById(id){
     const inputFiledValue = document.getElementById(id).value;
     const convertedInputFiled = parseFloat(inputFiledValue);
     return convertedInputFiled;
}

function gettextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}