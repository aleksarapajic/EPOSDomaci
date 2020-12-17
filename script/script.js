var d = new Date();
var time = d.getHours();
var sada = new Date();
document.write("Vreme je: " + sada.getHours() + ":" + sada.getMinutes() +
    "<br>");
if (time < 12) {
    document.write("<b>Dobro jutro!</b>");
} else if (time < 17) {
    document.write("<b>Dobar dan!</b>");
} else document.write("<b>Dobro veče!</b>");
