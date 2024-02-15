function udvozles(){
    console.log("Jó reggelt mindenkinek");
}

udvozles()



/* változok létrehozása, deklaráció*/
/*var let const using  hatókört jelent a var volt a régi*/
var szam="0"
let nev="Jenő"
console.log(szam + " típusa: " + typeof szam)
console.log(nev + " típusa: " + typeof nev)
console.log(`${szam} tipusa: ${typeof szam}`)

function elagazs(){
/*irj kódot ami a szám változorlo eldönti hogy 0, páros vagy párattlan */
/*  == a két érétket hasonlitja össze */
/* ==== a két értéket és a két típusát hasonlitja ösze */
if (szam ===0){
    console.log(` ${szam} értéke nullla`)
}else if(szam % 2 === 0){
    console.log(`${szam} $(szam)változó páros`)
}else if(szam%2===1){
    console.log(` a ${szam} változó értéke páratlan`)
}/*else{
    console.log(`szám változó értéke nem szám`)
}*/
}


function ciklus1(){
/* ciklusok használata: Irjuk ki 10szer a konzolra hogy "Szép nap van" */

for (let index = 0; index < 11; index++) {
    console.log(` ${index}. Szép nap van`)
}
}

/* ciklusok használata: Irjuk ki 10szer a konzolra hogy "Szép nap van" while ciklussal */
let index=0;
while (index <10) {
    console.log(` ${index}. Szép nap van`);
    index++;
    
}