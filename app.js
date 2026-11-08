const attackingSelector = document.getElementById("attackingType");
const defendingSelector = document.getElementById("defendingType");
const wrapper = document.getElementById("wrapper");


const typeChart = {
    fire: {
        strongAgainst: ["grass"],
        weakAgainst: ["water"]
    },
    water: {
        strongAgainst: ["fire"],
        weakAgainst: ["electric"]
    },
    electric: {
        strongAgainst: ["water"],
        weakAgainst: ["grass"]
    },
    grass: {
        strongAgainst: ["electric"],
        weakAgainst: ["fire"]
    }

}

function checkEffectiveness (attacker, defender) {

    let multiplier = 1;
    let message = "Effective"

    const matchup = typeChart[attacker];

    for (const type of matchup.strongAgainst) {
        if (type === defender) {
            multiplier = 2;
            message = "Super effective!";
        }
    }
    for (const type of matchup.weakAgainst) {
        if (type === defender) {
            multiplier = 0.5;
            message = "Not very effective...";
        }
    }

    wrapper.innerHTML = ""

    const ele = document.createElement("div")
    const resultEle = document.createElement("h2")
    const multiplierEle = document.createElement("h3")

    resultEle.innerHTML = message;
    multiplierEle.innerHTML = multiplier + "x";

    ele.appendChild(resultEle);
    ele.appendChild(multiplierEle);
    wrapper.appendChild(ele);

}
    function loadTypes() {
        for (const key in typeChart) {
            const attackEle = document.createElement("option");
            attackEle.setAttribute("value", key);
            attackEle.innerHTML = key;
            attackingSelector.appendChild(attackEle);

            const defendEle = document.createElement("option");
            defendEle.setAttribute("value", key);
            defendEle.innerHTML = key;
            defendingSelector.appendChild(defendEle);
        }
    }


    function loadEffectiveness() {
        checkEffectiveness(
            attackingSelector.value,
            defendingSelector.value
        );
    }

    attackingSelector.addEventListener("change", function (event) {
        loadEffectiveness();
    });

    defendingSelector.addEventListener("change", function (event) {
        loadEffectiveness();
    });


    loadTypes();

    loadEffectiveness();

