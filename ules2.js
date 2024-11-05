// mirko kohava
// 23.10
// ules 2

const g = 2;
const d = 38;
const f = 59;
const a = ":";
const s = "pm";
console.log(g+a+d+a+f+s)

//---------------------------------------------------------

let q = "HKHK on parim kool!";
let abc = "\"mario\"";
let lause3 = abc+" - "+q;
console.log(lause3);

//---------------------------------------------------------

const u = "Juri";
const i = "Jurakas";
let esimenemark = u[0];
let teinemark = i[0];
let lause = `Juri jurakas nimetahed on ${esimenemark}.${teinemark}.`;
console.log(lause);

//---------------------------------------------------------

let sone = u+","+i;
let erald = sone.split(",")[1];
let suur = erald.toUpperCase();
let pikk = erald.length;
console.log(erald, suur, pikk);

//---------------------------------------------------------

let epost = "karrolk@netlog.com";
console.log(epost.replaceAll("netlog", "gmail"));

//---------------------------------------------------------

let andmed = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let aa = andmed.split(",")[3];
let ab = andmed.split(",")[5];
let ae = aa.replaceAll("@dedecms.com", "")
let lause2 = ab+", "+ae;
console.log(lause2);