let score = "33abc";

console.log(score);
console.log(typeof score);  //check data-type; -number- when score= 33 ; String - when score= "33"
console.log(typeof (score)); 

let valueInNumber = Number(score)           
console.log(typeof valueInNumber);  // when score="33abc" - Number 
console.log(valueInNumber);


let sc = undefined
let sco= true
console.log(typeof sc + " " +sc); //
console.log(typeof sco, sco);

let valueInNumber2 = Number(sco)  
console.log(valueInNumber2);

// NOTES : Conversions
  // "33" => 33
  // "33abc" => NaN
  // ture => 1 ; false => 0


let login = ""
let booleanLog = Boolean(login)
console.log(booleanLog)

// 1 => true ; 0=> false
// "" => false (empty string)
// "Ash" => true 