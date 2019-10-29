function tafel(){
    var getal = prompt("welke getal wilt u berekenen?");
    for(var teller = 1; teller <=10; teller++){
        document.write(teller, " x ", getal, " = ", teller * getal, "<br>");
    }
}

tafel();