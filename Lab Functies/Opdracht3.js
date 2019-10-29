var stop = true;

document.write("Geef de namen en leeftijden door die u wilt opgeven <br>");
document.write("Type stop als u klaar bent <br> <br>");

function naamleeftijd() {
  while (stop == true) {
    var naam = prompt("Welke namen wilt u opgeven? ");
    var leeftijd = prompt("Wat is zijn/haar leeftijd?");
    document.write(naam + leeftijd + "<br>");
    stop = confirm("wilt u doorgaan of stoppen?");
  }
}

naamleeftijd();
