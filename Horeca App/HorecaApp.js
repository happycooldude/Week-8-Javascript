//© Pieter Huisman 99047256
//Applicatie en media ontwikkelaar

document.write("Prijs voor fris is €1", "<br>");
document.write("Prijs voor bier is €2", "<br>");
document.write("Prijs voor wijn is €3", "<br>");

document.write("<br>")

const prijsfris = 1;
const prijsbier = 2;
const prijswijn = 3;
var fris = 0;
var bier = 0;
var wijn = 0;
var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;

function bestellen(){
   while(userInput != "stop"){
        var userInput = prompt("Wat wilt u bestellen? Fris, Bier of Wijn?")
        if(userInput == "fris"|"Fris"){
            bestelfris();
            optelfris();
        }
        else if(userInput == "bier"|"Bier"){
            bestelbier();
            optelbier();
        }
        else if(userInput == "wijn"|"Wijn"){
            bestelwijn();
            optelwijn();
        }
    }
}

function bestelfris(){ 
    fris = prompt("Hoeveel fris wilt u bestellen?");
    return fris;
} 

function bestelbier(){
    bier = prompt("Hoeveel bier wilt u bestellen?");
    return bier;
}

function bestelwijn(){
    wijn = prompt("Hoeveel wijn wilt u bestellen?");
    return wijn;
}

function optelfris(){
    totaalfris = Number(totaalfris) + Number(fris);
    return totaalfris;
}

function optelbier(){
    totaalbier = Number(totaalbier) + Number(bier);
    return totaalbier;
}

function optelwijn(){
    totaalwijn = Number(totaalwijn) + Number(wijn);
    return totaalwijn;
}

function prijsberekenen(){
    totaalprijsfris = Number(totaalfris) * Number(prijsfris)
    totaalprijsbier = Number(totaalbier) * Number(prijsbier)
    totaalprijswijn = Number(totaalwijn) * Number(prijswijn)
}

bestellen();
prijsberekenen();

document.write(totaalfris, " totaalfris ", "<br>");
document.write(totaalbier, " totaalbier ", "<br>");
document.write(totaalwijn, " totaalwijn ", "<br>", "<br>");

document.write("totaalprijs €", totaalprijsfris + totaalprijsbier + totaalprijswijn);