// mirko kohava
// 10.12
// ules 13
//---------------------------------------------------------

const p = document.querySelector("p");
p.removeAttribute("id");

p.innerText = "metshein.com";
p.setAttribute("attr", "kohava");
console.log(p.getAttribute("attr"));


//const img = document.querySelector("img");
//const img = document.querySelectorAll(".card");
//console.log(img.getAttribute("data-title"));
//console.log(img.getAttribute("data-description"));
const divElement = document.querySelectorAll(".card");

divElement.forEach(elem => {
    let pilt = elem.querySelector("img").getAttribute("data-title");
    let pealkiri = elem.querySelector(".card-title");
    let pilt2 = elem.querySelector("img").getAttribute("data-description");
    let pealkiri2 = elem.querySelector(".card-text");
    console.log(pilt);
    pealkiri.innerHTML = pilt;
    pealkiri2.innerHTML = pilt2;
});

