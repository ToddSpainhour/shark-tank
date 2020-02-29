import utils from "../helpers/data/utils.js";
import personData from "../helpers/data/personData.js";

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = "";
    domString +=       `<div class="card">`;
    domString +=       `<div class="card-header bg-danger">Shark Food :(</div>`;
    domString +=       `<ul class="list-group list-group-flush">`;
    
    
    
    
    persons.forEach((person) =>{
        domString += `<li class="list-group-item">${person.name}</li>`
    });
    
    domString +=       `</ul>`
    domString +=       `</div>`
    
    
        utils.printToDom('graveyard', domString);
    }
    
    export default { buildGraveyard }