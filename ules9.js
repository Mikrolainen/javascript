// mirko kohava
// 14.11
// ules 9
//---------------------------------------------------------



const nimi1 = () => {
    console.log("mirko");
};

nimi1();

//---------------------------------------------------------

function nimi2() {
    console.log("mirko")
}

nimi2();

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

const kuupaevEesti = (kp) => {
    let kp_tykk = kp.split(".")
    kuud = ["jaanuar","jaanuar","jaanuar","jaanuar","jaanuar","jaanuar","jaanuar","gjfsjf","jaanuar","jaanuar","jaanuar","jaanuar",]

    console.log(`${kp_tykk[0]}.${kuud[parseInt(kp_tykk[1])]} 20${kp_tykk[2]}`);
}

kuupaevEesti("19.07.23");

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

const arvudesumma = (...args) => {
    const sum = args.reduce((b,a) => b + a, 0)
    console.log(sum);

}

arvudesumma(10,20,30,60,90)

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

let sonum = "see on salajane sonum";

a = ["a","e","i","o",]

a.forEach(t => {
    let newstring = sonum.replace(/["a","e","i","o",]/gi,"*")
    console.log(`${newstring}`);
})

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------


nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]
unikaalsed = [];

nimed.forEach(nimi => {
    if(!unikaalsed.includes(nimi)){
        unikaalsed.push(nimi);
    }
});
console.log(unikaalsed);

