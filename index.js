/*
//ARRAY INTERATOR METHOD
function superbowlWin(array) {
    for (const object of array){
      if(object.result === "W"){
        return object.year
      }
    }
  }
  superbowlWin();
*/

//.FIND()
function superbowlWin(record){
    const object = record.find(element => element.result === "W")
    if (object === undefined){
        return undefined
    }
    return object.year
}
superbowlwin();