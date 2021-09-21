// FONCTIONS ----------------------------------------------------------------------------------------------------

function randomChoice() {
    return Math.floor(Math.random() * possibility.length);
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
        var userChoice = prompt("Choisissez un Type : (Feu, Eau, Plante, Electrik, Glace, Sol, Vol, Poison, Insect, Combat, Psy, Roche, Spectre, Normal, Dragon, Tenebre, Acier, Fée)");
        userChoiceMin = userChoice.toLocaleLowerCase();
        if(
            userChoiceMin === "feu"
            || userChoiceMin === "eau"
            || userChoiceMin === "plante"
            || userChoiceMin === "electrik"
            || userChoiceMin === "glace"
            || userChoiceMin === "sol"
            || userChoiceMin === "vol"
            || userChoiceMin === "poison"
            || userChoiceMin === "insect"
            || userChoiceMin === "combat"
            || userChoiceMin === "psy"
            || userChoiceMin === "roche"
            || userChoiceMin === "spectre"
            || userChoiceMin === "normal"
            || userChoiceMin === "dragon"
            || userChoiceMin === "tenebre"
            || userChoiceMin === "acier"
            || userChoiceMin === "fée") {
            alert("L'Ordinateur fait son choix...");
            }
            else {
                enterChoice();
            }
    };
// Début du jeu (uniquement à la première partie) ----------------------------------------------
alert("Bonjour, vous allez jouer au jeu de romi', inspiré du Shifoumi et de Pokémon !");
// Le Joueur entre son Nom--------_-------------------------------------------------------------
var userName = "";
enterName();
// Initialisation -----------------------------------------------------------------------------
var scoreUser = 0;
var scoreCpu = 0;
var userChoiceMin = "";
var objective = 0;
var powerUser = 5;
var powerCpu = 5;
var ifUserCrit = 0;
var ifCpuCrit = 0;
var possibility = ["feu","eau","plante","electrik","glace","sol","vol","poison","insect","combat","psy","roche","spectre","normal","dragon","tenebre","acier","fée"]
var superEffective = [
    "feu/plante",
    "eau/feu",
    "plante/eau",
    "electrik/eau",
    "glace/plante",
    "feu/glace",
    "sol/feu",
    "sol/electrik",
    "eau/sol",
    "plante/sol",
    "glace/sol",
    "vol/plante",
    "electrik/vol",
    "glace/vol",
    "poison/plante",
    "sol/poison",
    "insect/plante",
    "feu/insect",
    "vol/insect",
    "combat/glace",
    "vol/combat",
    "psy/poison",
    "psy/combat",
    "insect/psy",
    "roche/feu",
    "roche/glace",
    "roche/vol",
    "roche/insect",
    "eau/roche",
    "plante/roche",
    "combat/roche",
    "sol/roche",
    "spectre/psy",
    "combat/normal",
    "glace/dragon",
    "tenebre/psy",
    "tenebre/spectre",
    "combat/tenebre",
    "insect/tenebre",
    "acier/glace",
    "acier/roche",
    "feu/acier",
    "combat/acier",
    "sol/acier",
    "fée/combat",
    "fée/dragon",
    "fée/tenebre",
    "poison/fée",
    "acier/fée"
];
var bothSuperEffective = [
    "spectre/spectre",
    "dragon/dragon"
]
var bothNoEffective = [
    "feu/feu",
    "eau/eau",
    "electrik/electrik",
    "glace/glace",
    "poison/poison",
    "combat/insect",
    "insect/combat",
    "psy/psy",
    "tenebre/tenebre",
    "acier/acier"
];
var noEffective = [
    "feu/plante",
    "eau/feu",
    "plante/eau",
    "plante/electrik",
    "feu/glace",
    "eau/glace",
    "plante/sol",
    "vol/plante",
    "electrik/vol",
    "poison/plante",
    "sol/poison",
    "insect/plante",
    "insect/sol",
    "feu/insect",
    "poison/insect",
    "vol/insect",
    "vol/combat",
    "poison/combat",
    "psy/combat",
    "roche/feu",
    "roche/poison",
    "roche/vol",
    "combat/roche",
    "sol/roche",
    "roche/normal",
    "dragon/feu",
    "dragon/eau",
    "dragon/plante",
    "dragon/electrik",
    "tenebre/spectre",
    "combat/tenebre",
    "acier/normal",
    "acier/plante",
    "acier/glace",
    "acier/vol",
    "acier/psy",
    "acier/insect",
    "acier/roche",
    "acier/dragon",
    "feu/acier",
    "eau/acier",
    "electrik/acier",
    "fée/combat",
    "fée/insect",
    "fée/tenebre",
    "feu/fée",
    "poison/fée",
    "acier/fée"
];
var ineffective = [
    "sol/electrik",
    "vol/sol",
    "spectre/combat",
    "spectre/normal",
    "normal/spectre",
    "tenebre/psy",
    "acier/poison",
    "fée/dragon"
];
// Lancement de la partie --------------------------------------------------------------------------------
play();

// Fonctions principale de la partie ---------------------------------------------------------------------
function play() {
    while(objective === 0) {
        enterChoice();
        // Choix de l'ordinateur -------------------------------------------------------------------------
        var cpuChoice = randomChoice();
        cpuChoice = possibility[cpuChoice];
        alert("l'Ordinateur est de type " + cpuChoice + " !"); 
        alert("Que le match commence !");
        // Réinitialise la puissance des deux joueurs ----------------------------------------------------
        powerUser = 5;
        powerCpu = 5;
        // Repaire et calcule la puissance offensive (super efficace) ------------------------------------
        if(superEffective.includes(userChoiceMin + "/" + cpuChoice)) {
            alert("C'est Super Efficace sur ordinateur !");
            powerUser++;
            }
        else if(superEffective.includes(cpuChoice + "/" + userChoiceMin)) {
                alert("C'est Super Efficace sur " + userName + " !");
                powerCpu++;
        }
        else if (bothSuperEffective.includes(userChoiceMin + "/" + cpuChoice)) {
            alert("C'est Super Efficace sur ordinateur !");
            alert("C'est Super Efficace sur " + userName + " !");
        }
        else {"Neutre"};
        // Repaire et calcule la puissance deffensive (Pas très efficace) ---------------------------------
        if(bothNoEffective.includes(userChoiceMin + "/" + cpuChoice)) {
                alert("Ce n'est Pas Très Efficace sur " + userName + " !");
                alert("Ce n'est Pas Très Efficace sur l'Ordinateur !");
            }
        else if(noEffective.includes(userChoiceMin + "/" + cpuChoice)) {
                alert("Ce n'est Pas Très Efficace sur " + userName + " !");
                powerUser++;
            }
        else if(noEffective.includes(cpuChoice + "/" + userChoiceMin)) {
                alert("Ce n'est Pas Très Efficace sur l'Ordinateur !");
                powerCpu++;
        }
        else if(ineffective.includes(userChoiceMin + "/" + cpuChoice)) {
                alert("Ça n'a Pratiquement Aucun Effet sur " + userName + " !")
                powerUser += 2;
            }
        else if(ineffective.includes(cpuChoice + "/" + userChoiceMin)) {
                alert("Ça n'a Pratiquement Aucun Effet sur l'Ordinateur !")
                powerCpu += 2;
            }
        else {"Neutre"}
        // Probabilités de coups critiques ---------------------------------------------------------------
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
        // Anonce le gagnant et compte les points --------------------------------------------------------
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
        // Annonce les scores -----------------------------------------------------------------------------
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
        // Fin de partie et confirmation de Replay --------------------------------------------------------
        if (objective === 1) {
            confirm("Merci d'avoir jouer, Voulez vous rejouer ?");
            scoreUser = 0;
            scoreCpu = 0;
            objective = 0;
            play();
        }
        else {
            "Non"
        };
    };
};