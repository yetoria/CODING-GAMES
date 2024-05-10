
// "2" ---> 2
const n = parseInt(readline()); // the number of temperatures 
// to analyse
let tTempPos = 5526;
let tTempNeg = -273;
let result = 0;

// imputs est un tableau de chaine de caractères

// readline() va récupérer une chaine de caractèe 
//comportant des nombres séparés par des espaces

// split(' ') va découper la chaine de caractère à 
// chaque fois qu'il trouve un espace

// imputs est un tableau qui va récupérer des nombres 
// sous forme de chaine de caractères
// "2 -36 5 -15" ---> ["2", "-36", "5", "-15"]
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
   // convertir une chaine de caractère en nombre
   // "2" ---> 2
   // i va prendre la valeur du tableau ex : imputs[0] = "2"
   const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
   // si t est positif et plus petit que la valeur temporaire positive
   // la valeur temporaire positive sera égale à t
   if((t < tTempPos) && t > 0){
       tTempPos = t;
   }
   // si t est négatif et plus grand que la valeur temporaire négative
   // la valeur temporaire négative sera égale à t
   if((t > tTempNeg) && t < 0){
       tTempNeg = t;
   }
   
   // si la valeur temporaire positive est inférieure ou égale 
   // à la valeur temporaire négative multiplié par -1
   // alors result prend la valeur temporaire positive
   // sinon elle prend la valeur temporaire négative
   // si j'ai un tableau vide, la valeur de result est de 0
   if (tTempPos <= tTempNeg * -1){
       result = tTempPos;
   }else{
       result = tTempNeg;
   }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);