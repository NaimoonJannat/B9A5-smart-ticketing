function getValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValue=element.value;
    const value=parseInt(elementValue);
    return value;
}

function setInnerTextById(elementId, value){
    document.getElementById(elementId).innerText=value;
}