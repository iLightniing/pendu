// ETAPE 1 : LES VARIABLES

// Tableau de mot random
let motsChercher = [
    ['JAVASCRIPT'], // [0]
    ['LARAGON'], // [1]
    ['SYMFONY'], // [2]
    ['DEVELOPPEMENT'], // [3]
    ['DEVELOPPEUR'], // [4]
    ['BELIEVEMY'], // [5]
    ['JAVA'], // [6]
    ['PYTHON'], // [7]
    ['FICHIER'], // [8]
    ['AKINOSAURE'], // [9]
];

let motATrouver     = document.querySelector('#randomMot');
let randomButton = document.querySelector('#randomButton');

let dernier   = 0;
let nombreRandom = 0;

// EVENEMENTS
randomButton.addEventListener('click', () => {
    do {
        nombreRandom = genererNombreEntier(motsChercher.length);
    } while (nombreRandom == dernier);

    motATrouver.textContent = motsChercher[nombreRandom][0];
    dernier                  = nombreRandom;
})

// FONCTIONS
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
}