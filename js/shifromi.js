alert("Bonjour, vous allez jouer au jeu de romi', inspiré du Shifoumi et de Pokémon !");
// Nom du Joueur
var userName = "";
enterName();
// Initialisation
var scoreUser = 0;
var scoreCpu = 0;
var userChoiceMin = "";
var objective = 0;
var powerUser = 5;
var powerCpu = 5;
var ifUserCrit = 0;
var ifCpuCrit = 0;
// Début du jeu
play();
confirm("Merci d'avoir jouer, Voulez vous rejouer ?");
scoreUser = 0;
scoreCpu = 0;
play();


function play() {
    while(objective === 0) {
        enterChoice();
        // Choix de l'ordinateur
        var cpuChoice = randomChoice(6);
        if(cpuChoice === 0) {
            cpuChoice = "feu";
        }
        else if(cpuChoice === 1) {
            cpuChoice = "eau";
        }
        else if(cpuChoice === 2) {
            cpuChoice = "plante";
        }
        else if(cpuChoice === 3) {
            cpuChoice = "electrik";
        }
        else if (cpuChoice === 4) {
            cpuChoice = "glace";
        }
        else {
            cpuChoice = "sol";
        };
        alert("l'Ordinateur est de type " + cpuChoice + " !"); 
        alert("Que le match commence !");
        // Compare les résultats
        powerUser = 5;
        powerCpu = 5;
        // Offensif
        if(
            userChoiceMin === "feu" && cpuChoice === "plante"
            || userChoiceMin === "eau" && cpuChoice === "feu"
            || userChoiceMin === "plante" && cpuChoice === "eau"
            || userChoiceMin === "electrik" && cpuChoice === "eau"
            || userChoiceMin === "glace" && cpuChoice === "plante"
            || userChoiceMin === "feu" && cpuChoice === "glace"
            || userChoiceMin === "sol" && cpuChoice === "feu"
            || userChoiceMin === "sol" && cpuChoice === "electrik"
            || userChoiceMin === "eau" && cpuChoice === "sol"
            || userChoiceMin === "plante" && cpuChoice === "sol"
            || userChoiceMin === "glace" && cpuChoice === "sol") {
                alert("C'est Super Efficace sur l'Ordinateur !");
                powerUser++;
            }
        else if(
            cpuChoice === "feu" && userChoiceMin === "plante"
            || cpuChoice === "eau" && userChoiceMin === "feu"
            || cpuChoice === "plante" && userChoiceMin === "eau"
            || cpuChoice === "electrik" && userChoiceMin === "eau"
            || cpuChoice === "glace" && userChoiceMin === "plante"
            || cpuChoice === "feu" && userChoiceMin === "glace"
            || cpuChoice === "sol" && userChoiceMin === "feu"
            || cpuChoice === "sol" && userChoiceMin === "electrik"
            || cpuChoice === "eau" && userChoiceMin === "sol"
            || cpuChoice === "plante" && userChoiceMin === "sol"
            || cpuChoice === "glace" && userChoiceMin === "sol") {
                alert("C'est Super Efficace sur " + userName + " !");
                powerCpu++;
        }
        else {"je sais pas bros"};
        // Defensif
        if(
            userChoiceMin === "feu" && cpuChoice === "feu"
            || userChoiceMin === "eau" && cpuChoice === "eau"
            || userChoiceMin === "plante" && cpuChoice === "plante"
            || userChoiceMin === "electrik" && cpuChoice === "electrik"
            || userChoiceMin === "glace" && cpuChoice === "glace") {
                alert("Ce n'est Pas Très Efficace sur " + userName + " !");
                alert("Ce n'est Pas Très Efficace sur l'Ordinateur !");
            }
        else if(
            userChoiceMin === "feu" && cpuChoice === "plante"
            || userChoiceMin === "eau" && cpuChoice === "feu"
            || userChoiceMin === "plante" && cpuChoice === "eau"
            || userChoiceMin === "plante" && cpuChoice === "electrik"
            || userChoiceMin === "feu" && cpuChoice === "glace"
            || userChoiceMin === "eau" && cpuChoice === "glace"
            || userChoiceMin === "plante" && cpuChoice === "sol") {
                alert("Ce n'est Pas Très Efficace sur " + userName + " !");
                powerUser++;
            }
        else if(
            cpuChoice === "feu" && userChoiceMin === "plante"
            || cpuChoice === "eau" && userChoiceMin === "feu"
            || cpuChoice === "plante" && userChoiceMin === "eau"
            || cpuChoice === "plante" && userChoiceMin === "electrik"
            || cpuChoice === "feu" && userChoiceMin === "glace"
            || cpuChoice === "eau" && userChoiceMin === "glace"
            || cpuChoice === "plante" && userChoiceMin === "sol") {
                alert("Ce n'est Pas Très Efficace sur l'Ordinateur !");
                powerCpu++;
        }
        else if(
            userChoiceMin === "sol" && cpuChoice === "electrik") {
                alert("Ça n'a Pratiquement Aucun Effet sur " + userName + " !")
                powerUser += 2;
            }
        else if(
            cpuChoice === "sol" && userChoiceMin === "electrik") {
                alert("Ça n'a Pratiquement Aucun Effet sur l'Ordinateur !")
                powerCpu += 2;
            }
        else {"je sais pas bros"}
        // Coups Critiques
        ifUserCrit = randomCrit(100);
        ifCpuCrit = randomCrit(100);
        if(ifUserCrit <= 10) {
            alert(userName + " à un MinRoll !");
            powerUser--;
        }
        else if(ifUserCrit >= 89 && ifUserCrit <= 98) {
            alert(userName + " réalise un Coup Critique !");
            powerUser++;
        }
        else if(ifUserCrit >= 99) {
            alert(userName + " réalise un Coup Dévastateur !");
            powerUser += 2;
        }
        else {};
        if(ifCpuCrit <= 10) {
            alert("L'Ordinateur à un MinRoll !");
            powerCpu--;
        }
        else if(ifCpuCrit >= 89 && ifCpuCrit <= 98) {
            alert("L'Ordinateur réalise un Coup Critique !");
            powerCpu++;
        }
        else if(ifCpuCrit >= 99) {
            alert("L'Ordinateur réalise un Coup Dévastateur !");
            powerCpu += 2;
        }
        // Compare la puissance
        else {};
        if(powerUser === powerCpu) {
            alert("Equalité !")
        }
        else if(powerUser > powerCpu) {
            alert(userName + " Gagne !");
            scoreUser++;
        }
        else {
            alert("L'Ordinateur Gagne !");
            scoreCpu++;
        }
        // Annonce les scores
        alert(userName + " : " + scoreUser + "\n" + "Ordinateur" + " : " + scoreCpu);
        if(scoreUser === 3) {
            objective++;
        }
        else if(scoreCpu === 3) {
        objective++;
        }
        else {
            alert("Nouvelle Manche !");
        }
    };
};

// Fonctions

function randomChoice(numberOfChoice) {
return Math.floor(Math.random() * numberOfChoice);
};

function randomCrit(probability) {
    return Math.floor(Math.random() * probability);
};

function enterName() {
    userName = prompt("rentrez votre nom :");
    if(userName.length >= 2 && userName.length <= 20) {
         alert("Merci " + userName + " Préparez vous !");
        }
        else {
            enterName();
        }
};

function enterChoice() {
    var userChoice = prompt("Choisissez un Type : (Feu, Eau, Plante, Electrik, Glace, Sol)");
    userChoiceMin = userChoice.toLocaleLowerCase();
    if(
        userChoiceMin === "feu"
        || userChoiceMin === "eau"
        || userChoiceMin === "plante"
        || userChoiceMin === "electrik"
        || userChoiceMin === "glace"
        || userChoiceMin === "sol") {
        alert("L'Ordinateur fait son choix...");
        }
        else {
            enterChoice();
        }
};