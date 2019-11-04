//© Pieter Huisman 99047256
//Applicatie en media ontwikkelaar

document.write("Prijs voor fris is €1,50", "<br>");
document.write("Prijs voor bier is €2,50", "<br>");
document.write("Prijs voor wijn is €3,50", "<br>");

document.write("<br>")

const prijsfris = 1.50;
const prijsbier = 2.50;
const prijswijn = 3.50;
var fris;
var bier;
var wijn;
var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;
var totaalprijsfris = 0;
var totaalprijsbier = 0;
var totaalprijswijn = 0;

    function bestelfris(){
        while(fris != "stop"){
            var fris = 0 + prompt("Hoeveel fris wilt u bestellen?");
            return fris;
        }
    }

    function bestelbier(){
        while(bier != "stop"){
            var bier = 0 + prompt("Hoeveel bier wilt u bestellen?");
            return bier;
        }
    }

    function bestelwijn(){
        while(wijn != "stop"){
           var wijn = 0 + prompt("Hoeveel wijn wilt u bestellen?");
           return wijn;
        }
    }

function berekenen(){
    totaalfris = totaalfris + fris;
    totaalbier = totaalbier + bier;
    totaalwijn = totaalwijn + wijn;
    totaalprijsfris = totaalfris * prijsfris;
    totaalprijsbier = totaalbier * prijsbier;
    totaalprijswijn = totaalwijn * prijswijn;
}

bestelfris();
bestelbier();
bestelwijn();


document.write(fris);
document.write(bier);
document.write(wijn);