// mirko kohava
// 05.11
// ules 8
//---------------------------------------------------------

let raha = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

let sorted = [];
let i = 0;

while (i<raha.length) {
    if (raha[i] <=2) {
        sorted.push(raha[i]);
    }
    i++
}

console.log(sorted)
const sum = sorted.reduce((b, a) => b + a, 0);
console.log(sum)
const kukko = sorted.length;
console.log(kukko)