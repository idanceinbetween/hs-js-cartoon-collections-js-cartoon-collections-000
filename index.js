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

//helper
function isShorterThanFive(words){
  return words.length < 5 // function  words[n].length < 5
}

function longPlaneteerCalls(words) {
  if (words.every(isShorterThanFive)){
    return false
  } else {
    return true
  }
}

/*
Check first element foods[n], if it matches cheese names.
If yes, return foods[n], end function.
If not, move on to the next element foods[n+1].
If running the loop returns nothing, return `no cheese!` instead.
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
