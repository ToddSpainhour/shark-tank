import utils from "../helpers/data/utils.js";
import personData from "../helpers/data/personData.js";

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = "";
    domString +=       `<div class="card">`;
    domString +=       `<div class="card-header bg-danger">Shark Food :(</div>`;
    domString +=       `<ul class="list-group list-group-flush">`;
    
    persons.forEach((person) =>{
        domString += `<li class="list-group-item">
                ${person.name}
                <button id="${person.id}" class="btn btn-secondary revive-btn">Revive!</button>
            </li>`
    });
    

    domString +=       `</ul>`
    
    utils.printToDom('graveyard', domString);
    }
    
    export default { buildGraveyard }