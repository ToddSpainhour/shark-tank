import utils from "../helpers/data/utils.js";
import personData from "../helpers/data/personData.js";


const tankBuilder = () => {
const persons = personData.getAlivePersons();
let domString = "";
domString +=       `<div class="card">`;
domString +=       `<div class="card-header">Featured</div>`;
domString +=       `<ul class="list-group list-group-flush">`;
domString +=       `<li class="list-group-item">Cras justo odio</li>`;
domString +=       `<li class="list-group-item">Dapibus ac facilisis in</li>`;
domString +=       `<li class="list-group-item">Vestibulum at eros</li>`;



persons.forEach((persons) =>{
    domString += `<li class="list-group-item">${persons.name}</li>`
});

domString +=       `</ul>`
domString +=       `</div>`


    utils.printToDom('tank', domString);
}

export default { tankBuilder }