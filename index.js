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

/* alternative

function isShorterThanFive(aWord){ // this is a word
  return aWord.length < 5 //this will return true or false
}

function longPlaneteerCalls(arrayOfWords) {
  if (arrayOfWords.every(isShorterThanFive)){ //If all elements in the array is shorter than five
    return false
  } else {
    return true
  }
}
*/
// Access each element, check against a condition, If matches, then If method returns true, exit function
//if nothing matches, then function returns false.

function longPlaneteerCalls(arrayOfWords){
    for(var n=0;n<arrayOfWords.length;n++){
        var eachWordLength = arrayOfWords[n].length;
        if (eachWordLength > 4){
            return true}
          }
        return false;
        }

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
