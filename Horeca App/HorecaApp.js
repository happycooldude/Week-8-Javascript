//© Pieter Huisman 99047256
//Applicatie en media ontwikkeling

document.write("Prijs voor fris is €1", "<br>");
document.write("Prijs voor bier is €2", "<br>");
document.write("Prijs voor wijn is €3", "<br>");
document.write("Prijs bitterbalschaal 8 is €2", "<br>");
document.write("Prijs bitterbalschaal 16 is €4", "<br>");

document.write("<br>");

const prijsfris = 1;
const prijsbier = 2;
const prijswijn = 3;
const prijsschaal8 = 2;
const prijsschaal16 = 4;
var fris = 0;
var bier = 0;
var wijn = 0;
var schaal8 = 0;
var schaal16 = 0;
var totaalfris = 0;
var totaalbier = 0;
var totaalwijn = 0;
var totaalschaal8 = 0;
var totaalschaal16 = 0;

function bestellen() {
  while (userInput != "stop") {
    var userInput = prompt(
      "Welke bestelling wilt u toevoegen? Fris, Bier, Wijn of een snack?"
    );
    if ((userInput == "fris") | "Fris") {
      bestelfris();
      optelfris();
    } else if ((userInput == "bier") | "Bier") {
      bestelbier();
      optelbier();
    } else if ((userInput == "wijn") | "Wijn") {
      bestelwijn();
      optelwijn();
    } else if ((userInput == "snack") | "Snack") {
      bestelschaal();
    }
  }
}

function bestelfris() {
  fris = prompt("Hoeveel fris wilt u bestellen?");
  return fris;
}

function bestelbier() {
  bier = prompt("Hoeveel bier wilt u bestellen?");
  return bier;
}

function bestelwijn() {
  wijn = prompt("Hoeveel wijn wilt u bestellen?");
  return wijn;
}

function bestelschaal() {
  userInput = prompt("Welk aantal bitterballen wilt u bestellen? 8 of 16?");
  if (userInput == "8") {
    schaal8 = prompt("Hoeveel schalen van 8 bitterballen wilt u bestellen?");
    optelschaal8();
    return schaal8;
  } else if (userInput == "16") {
    schaal16 = prompt("Hoeveel schalen van 16 butterballen wilt u bestellen?");
    optelschaal16();
    return schaal16;
  }
}

function optelfris() {
  totaalfris = Number(totaalfris) + Number(fris);
  return totaalfris;
}

function optelbier() {
  totaalbier = Number(totaalbier) + Number(bier);
  return totaalbier;
}

function optelwijn() {
  totaalwijn = Number(totaalwijn) + Number(wijn);
  return totaalwijn;
}

function optelschaal8() {
  totaalschaal8 = Number(totaalschaal8) + Number(schaal8);
  return totaalschaal8;
}

function optelschaal16() {
  totaalschaal16 = Number(totaalschaal16) + Number(schaal16);
  return totaalschaal16;
}

function prijsberekenen() {
  totaalprijsfris = Number(totaalfris) * Number(prijsfris);
  totaalprijsbier = Number(totaalbier) * Number(prijsbier);
  totaalprijswijn = Number(totaalwijn) * Number(prijswijn);
  totaalprijsschaal8 = Number(totaalschaal8) * Number(prijsschaal8);
  totaalprijsschaal16 = Number(totaalschaal16) * Number(prijsschaal16);
}

bestellen();
prijsberekenen();

document.write(totaalfris, " fris €", totaalprijsfris, "<br>");
document.write(totaalbier, " bier €", totaalprijsbier, "<br>");
document.write(totaalwijn, " wijn €", totaalprijswijn, "<br>");
document.write(totaalschaal8, " schaal 8 €", totaalprijsschaal8, "<br>");
document.write(totaalschaal16, " schaal 16 €", totaalprijsschaal16, "<br>");
document.write(
  "totaalprijs €",
  totaalprijsfris +
    totaalprijsbier +
    totaalprijswijn +
    totaalprijsschaal8 +
    totaalprijsschaal16
);
