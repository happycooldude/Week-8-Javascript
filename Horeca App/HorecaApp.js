//© Pieter Huisman 99047256
//Applicatie en media ontwikkelaar

document.write("Prijs voor fris is €1,50", "<br>");
document.write("Prijs voor bier is €2,50", "<br>");
document.write("Prijs voor wijn is €3,50", "<br>");

document.write("<br>")

const prijsfris = 1.50;
const prijsbier = 2.50;
const prijswijn = 3.50;
var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;
var totaalprijsfris = 0;
var totaalprijsbier = 0;
var totaalprijswijn = 0;

function bestellen(){
    while(fris,bier,wijn != "stop"){
        var fris = prompt("Hoeveel fris wilt u bestellen?");
        var bier = prompt("Hoeveel bier wilt u bestellen?");
        var wijn = prompt("Hoeveel wijn wilt u bestellen?");
        totaalfris = totaalfris + fris;
        totaalbier = totaalbier + bier;
        totaalwijn = totaalwijn + wijn;
        totaalprijsfris = totaalfris * prijsfris;
        totaalprijsbier = totaalbier * prijsbier;
        totaalprijswijn = totaalwijn * prijswijn;
    }
}

bestellen();

document.write(totaalfris);
document.write(totaalbier);
document.write(totaalwijn);
document.write(totaalprijsfris);
document.write(totaalprijsbier);
document.write(totaalprijswijn);