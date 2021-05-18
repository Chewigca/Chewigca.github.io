var antalLFrukt = "3";
var antallGronnsake = "2";
var antallVarer = antalLFrukt + antallGronnsake;
document.write(antallVarer);

function calculateMoms();
var umoms = prompt("skriv inn pris på varer");
eksMoms = Number(eksMoms);
var inkMoms = eksMoms * 1.25;

alert("pris inkl moms: " + inkMoms.toFixed(2));
