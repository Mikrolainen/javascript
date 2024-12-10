// mirko kohava
// 28.11
// ules 10
//---------------------------------------------------------

let auto = {
    mark: "Toyota",
    hind: 15.22,
    kogus: 20,

    summa: function() {
        tehe = this.hind*this.kogus;
        return tehe;
    },

    muudakogus: function(uuskogus) {
        this.kogus = uuskogus;
    },

    kuvaSisu: function () {
        return `Toode: ${this.mark}, Hind: ${this.hind}€, Kogus: ${this.kogus}, Koguhind: ${this.summa()}€`;
    }
    

};

console.log("Kogu hind: ",auto.summa())
auto.muudakogus(15);
console.log("uus kogus: ",auto.kogus)
console.log(auto.kuvaSisu());

console.log("---------------------------------------------------------------------------------------")
//---------------------------------------------------------

const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 }
    ],

    kuva: function() {
        this.tooted.forEach((toode) => {
            console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
        });
    },

    lisa: function(nimi, hind, kogus) {
        this.tooted.push({nimi, hind, kogus});
        console.log(`Toode ${nimi} on lisatud ostukorvi`)
    },

    summa: function() {
        return this.tooted.reduce((summa, toode) => summa + (toode.hind * toode.kogus), 0).toFixed(2);
    }
};

ostukorv.kuva();
console.log("-")
ostukorv.lisa('Kohv', 5.80, 2);

console.log('Ostukorvi kogu summa:', ostukorv.summa());