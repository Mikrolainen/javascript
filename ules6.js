// mirko kohava
// 31.10
// ules 6
//---------------------------------------------------------

let a = 5;
let numbr = "";

switch (true) {
    case a>0:
        numbr = "positiivne"
       break;
    default:
        numbr = "null voi neg"
    }

console.log(numbr);

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

let bron = 10;
vastus = "";

switch (true) {
case bron<3:
    vastus = "valige laud 2 inimesele";
    break;
case bron>2 && bron<5:
    vastus = "valige laud 4 inimesele";
    break;
case bron>4 && bron<7:
    vastus = "valige laud 6 inimesele";
    break;
default:
    vastus = "valige suur laud";
}

console.log(vastus)