
import tank from "../javascripts/components/tank.js"
import graveyard from "./components/graveyard.js"
import personData from "./helpers/data/personData.js"

const sharkAttackEvent = () => {
    console.log("Ouch!")
    personData.randomMurder();
    //randomly kil someone in personData
    //then reprint
    tank.tankBuilder();
    graveyard.buildGraveyard();
}


const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
    $(`#bite-me`).click(sharkAttackEvent);
    $('body').on('click', '.revive-btn', personData.bringToLife)
};

init();