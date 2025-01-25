let szam;
do {
  szam = Math.round(Math.random() * 1000);
} while (szam % 2 == 1);
document.write(`0 és 1000 között generált random páros szám: ${szam}`);
