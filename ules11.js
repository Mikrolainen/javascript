// mirko kohava
// 02.12
// ules 11
//---------------------------------------------------------

const nimed = ["mari maasikas", "Jaan jõesaar", "kristiina kukk", "margus mustikas", "jaan järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

const suured = nimed.map(nimi => {
    return nimi.charAt(0).toUpperCase() + nimi.slice(1);
});

const email = nimed.map(nimi => {
    const perenimi = nimi.split(" ").
    pop().toLocaleLowerCase();
    return `${perenimi}@metshein.com`;
});

console.log(suured);
console.log(email);

let otsi = "kadi";

let suur = val => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

let leia = (s, m) => {
    leidmine = m.filter(str => str.includes(suur(s)));
    leidmine.forEach(e => {
    console.log(e);
    });
};

leia(otsi, suured)

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    { nimi: "Mirko Kohava", isikukood: "50508134227" },
  ];
  
  
  function isikukoodd(andmed) {
    andmed.forEach(isik => {
      const anan = isik.isikukood;
      const aasta = { 1: 1800, 2: 1800, 3: 1900, 4: 1900, 5: 2000, 6: 2000 }[anan[0]];
      const aasta2 = aasta + parseInt(anan.slice(1, 3));
      const kuu = parseInt(anan.slice(3, 5)) - 1;
      const paev = parseInt(anan.slice(5, 7));
      const sunniaasta = new Date(aasta2, kuu, paev);
  
  
      const tana = new Date();
      const vanus = tana.getFullYear() - sunniaasta.getFullYear() -
        (tana < new Date(tana.getFullYear(), kuu, paev) ? 1 : 0);
  
  
      console.log(`Nimi: ${isik.nimi}`);
      console.log(`Sünniaeg: ${sunniaasta.toLocaleDateString("et-EE")}`);
      console.log(`Vanus: ${vanus}`);
      console.log("-----");
    });
  }
  
  
  isikukoodd(inimesteAndmed);  

  console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
    ];

opilased.forEach(opilane => {

    const parimTul = Math.max(...opilane.tulemused);
    const keskTulemus = (opilane.tulemused.reduce((sum, tulemus) => sum + tulemus, 0) / opilane.tulemused.length).toFixed(2);


    console.log(`Nimi: ${opilane.nimi}`);
    console.log(`Parim: ${parimTul}`);
    console.log(`Keskmine: ${keskTulemus}`);
    console.log("-----");

});
       
      