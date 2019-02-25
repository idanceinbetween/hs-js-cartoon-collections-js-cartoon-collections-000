function dwarfRollCall(dwarves) {
  var dwarvesFullList = new Array()
  for (var n=0;n<dwarves.length;n++){
    dwarvesFullList.push(`${[n+1]}. ${dwarves[n]} `)
  }
  return `${dwarvesFullList.join(``)}`
}

function summonCaptainPlanet(planeteerCalls){
  var summonCaptainPlanetByShouting = new Array ();
  for (var n=0; n < planeteerCalls.length; n++){
    summonCaptainPlanetByShouting.push(`${planeteerCalls[n].toUpperCase()}!`)
  }
  return summonCaptainPlanetByShouting
}

/*alternative 1
function summonCaptainPlanet(planeteerCalls){
  var summonCaptainPlanetByShouting = new Array ();
  var n=0
  while(n<planeteerCalls.length){
    summonCaptainPlanetByShouting.push(`${planeteerCalls[n].toUpperCase()}!`)
    n++
  }
  return summonCaptainPlanetByShouting
}*/

/*alternative 2
function summonCaptainPlanet(planeteerCalls){
  var summonCaptainPlanetByShouting = new Array ();
  var e=0
  var n=0
  while(e==0){
    summonCaptainPlanetByShouting.push(`${planeteerCalls[n].toUpperCase()}!`)
    n++
    if (n==planeteerCalls.length){
      e=1
    }
  }
  return summonCaptainPlanetByShouting
}
*/

// Access each element, check against a condition, If matches, then If method returns true, exit function
// If nothing matches, then function returns false.

function longPlaneteerCalls(arrayOfWords){
    for(var n=0;n<arrayOfWords.length;n++){
        var eachWordLength = arrayOfWords[n].length;
        if (eachWordLength > 4){
            return true}
          }
        return false;
        }

/* alternative

function isShorterThanFive(aWord){ // this is a word
  return aWord.length < 5 //this will return true or false
  }

function longPlaneteerCalls(arrayOfWords) {
  if (arrayOfWords.every(isShorterThanFive)){ //If all elements in the array is shorter than five
  return false // no element is longer than 4 / all elements are shorter than 5
  } else {
  return true
  }
}
*/

/*
Check first element foods[n], if it matches cheese names.
If yes, return foods[n], end function.
If not, move on to the next element foods[n+1].
If running the loop with switch statements returns nothing, return `no cheese!` instead.
*/

function findTheCheese (foods) {
  for(var n=0; n<foods.length;n++){
    switch(foods[n]){
      case "cheddar":
      case "gouda":
      case "camembert":
      return foods[n];
    }
    }
    return `no cheese!`
  }

function wordsWithB (arrayOfWords){
  var newArrayOfWords = new Array();
  for(var n=0;n<arrayOfWords.length;n++){
    //condition
    newArrayofWords.push(arrayOfWords[n]);
  }
  return newArrayofWords//new array of words only starts with the letter 'b'
}