export function udvozles(){
    console.log("Jó reggelt mindenkinek");
}

export function elagazas(){
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
    
    
    export function ciklus1(){
    /* ciklusok használata: Irjuk ki 10szer a konzolra hogy "Szép nap van" */
    
    for (let index = 0; index < 11; index++) {
        console.log(` ${index}. Szép nap van`)
    }
    }
    
    
    export function ciklus2(){
    /* ciklusok használata: Irjuk ki 10szer a konzolra hogy "Szép nap van" while ciklussal */
    let index=0;
    while (index <10) {
        console.log(` ${index}. Szép nap van`);
        index++;
    }
    }