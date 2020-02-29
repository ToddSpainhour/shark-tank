const printToDom = (divId, textToPrint) => {
    // const selectedDiv = $('#tank')
    // const selectedDiv = document.getElementById(divId);
    // const selectedDiv = $(`#${divId}`) 

    // selectedDiv.innerHTML = textToPrint
    // selectedDiv.html(textToPrint)

    $(`#${divId}`).html(textToPrint)
    
};

export default { printToDom }