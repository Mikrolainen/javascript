// mirko kohava
// 31.10
// ules 5
//---------------------------------------------------------

let a = 20;

if (a <= 15) {
    console.log("bljat kulm on!");
} else if (a >= 25) {
    console.log("Ai! Ai! korvetab!")
} else {
    console.log("paris normaalne ilm.")
}

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

let e = "Mario";

console.log(`${e == "Mario" ? "Tere admin!" : "tere vaeseke!"}`);

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

let pilet = "taispilet";
let vanus = 17;

if (pilet == "taispilet" && vanus > 18 && vanus <= 64) {
    console.log("Pilet on teile 20 eurot");
} else if (pilet == "taispilet" && vanus < 18) {
    console.log("pilet on teile 10 eurot");
} else if (pilet == "taispilet" && vanus >= 65) {
    console.log("pilet on teile 15 eurot")
} else if (pilet == "sooduspilet" && vanus < 18 || vanus >= 65) {
    console.log("pilet teile on 8 eurot")
} else if (pilet == "sooduspilet" && vanus <= 64 && vanus >= 18) {
    console.log("pilet on teile 15 eurot")
} else {
    console.log("Palun valige pilet")
}

