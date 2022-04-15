var x = martiviricx(0,0);

function martiviricx(lowerNumber, higherNumber) {
  console.log(`მარტივი რიცხვები ${lowerNumber}ს და ${higherNumber}ს შორის არის :`);

  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}
let text = (document.getElementById('demo').innerHTML = "i");
