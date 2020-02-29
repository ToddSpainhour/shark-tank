import utils from "../helpers/data/utils.js";
import personData from "../helpers/data/personData.js";


const tankBuilder = () => {
const persons = personData.getAlivePersons();
let domString = "";
domString +=       `<div class="card">`;
domString +=       `<div class="card-header bg-success">Still Alive!</div>`;
domString +=       `<ul class="list-group list-group-flush">`;


persons.forEach((persons) =>{
    domString += `<li class="list-group-item">${persons.name}</li>`
});

domString +=       `</ul>`
domString +=       `</div>`


    utils.printToDom('tank', domString);
}

export default { tankBuilder }