// mirko kohava
// 06.12
// ules 12
//---------------------------------------------------------

const ostukorv = {
    tooted: [
        { nimi:'Piim', hind:3.60, kogus:2 },
        { nimi:'Leib', hind:2.00, kogus:1 },
        { nimi:'Munad', hind:1.50, kogus:6 },
        { nimi:'Juust', hind:4.20, kogus:1 },
        { nimi:'Tomatid', hind:2.30, kogus:3 }
    ],



    html: function() {
        var ul = document.querySelector("ul");

        this.tooted.forEach(toode => {
            ul.innerHTML += `<li>${toode.nimi} ${toode.hind}€ - ${toode.kogus}tk</li>`;
        });

        console.log(this.tooted)
    },

    kuva: function() {
        summa = 0;
        this.tooted.forEach(toode => {
            summa+=(toode.hind*toode.kogus);
        });
        var p = document.querySelector("p");
        p.innerHTML += `${Math.round(summa * 100) / 100}€`;
        
        console.log(summa);
    }
    
};

ostukorv.html();
ostukorv.kuva();

