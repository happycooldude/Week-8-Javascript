var getal = prompt("welke getal wilt u berekenen?");

function tafel(){
    for(var teller = 1; teller <=10; teller++){
        document.write(teller, " x ", getal, " = ", teller * getal, "<br>");
    }
}

    switch (getal){
        case getal = "1":
        tafel();
        break;

        case getal = "2":
        tafel();
        break;

        case getal = "3":
        tafel();
        break;

        case getal = "4":
        tafel();
        break;

        case getal = "5":
        tafel();
        break;

        case getal = "6":
        tafel();
        break;

        case getal = "7":
        tafel();
        break;

        case getal = "8":
        tafel();
        break;

        case getal = "9":
        tafel();
        break;

        case getal = "10":
        tafel();
        break;

        default:
        alert("Het getal moet tussen de 1 en de 10 zitten!");
    }