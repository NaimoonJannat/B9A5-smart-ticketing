function getValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValue=element.value;
    const value=parseInt(elementValue);
    return value;
}