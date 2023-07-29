//Написати функцію (*стрілку),  яка приймає рядок і повертає гількість голосних літер, які присутні в цьому рядку.
// Голосні: A, E, I, O, U, Y - рахуємо як верхній так і нижній регистр
// 'console' -> 3
// 'www' -> 0
// 'oOo!' -> 3
// 'QwertY' -> 2

const vowels = ["a", "e", "i", "o", "u", "y"];
const string = "Visual studio code";
const stringArr = string.toLowerCase().split("");

//works!
const getVowels = (string) => {
  let vowelsInString = 0;
  for (const item of string) {
    for (const item1 of vowels) {
      if (item === item1) {
        vowelsInString += 1;
      }
    }
  }
  return vowelsInString;
};

// console.log(getVowels(stringArr));


//try to understand how .filter and callback func. is working
const filtredvowels = stringArr.filter(getVowels)
console.log(filtredvowels);


//Shows without duplicates
const getVowels1 = (string)=>{
  let vowelsInString = 0;
for (let index = 0; index < string.length; index++) {
  if (string.includes(vowels[index])) {
    vowelsInString += 1;
  } else {
    vowelsInString;
  }
}return vowelsInString
}


// console.log(getVowels1(stringArr));

//works!
// let vowelsInString = 0;
// for (const item of string) {
//   for (const item1 of vowels) {
//     if(item === item1){
//       vowelsInString +=1
//     }
//   }
// }

// console.log(vowelsInString);

//works (bad practice, literals)
// for (let index = 0; index < stringArr.length; index++) {
//   checker = stringArr[index];

//   if (stringArr[index] === 'a' || stringArr[index] === 'e' || stringArr[index] === 'i' || stringArr[index] === 'o' || stringArr[index] === 'u' || stringArr[index] === 'y') {
//     vowelsInString += 1;
//   }
//   else {
//     vowelsInString;
//   }
// }

//not works
// for (let index = 0; index < stringArr.length; index++) {
//   for (let index = 0; index < vowels.length; index++) {
//     if (stringArr.indexOf(stringArr[index]) === vowels.indexOf(vowels[index])){
//   vowelsInString +=1;
// }
//   }
// }

//not works
// for (let index = 0; index < stringArr.length; index++) {
//   for (let index = 0; index < vowels.length; index++) {
//     if (stringArr[index] === vowels[index]) {
//     vowelsInString += 1;
//   }
//   else{
//     vowelsInString;
//   }
//   }
// }

// console.log(vowelsInString);
