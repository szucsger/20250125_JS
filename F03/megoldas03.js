let alsoHatar = Number(prompt("add meg az intervallum alsó határát"));
let felsoHatar = Number(prompt("add meg az intervallum felső határát"));
let szam;
do {
  szam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
} while (szam % 2 == 1);
document.write(
  `${alsoHatar} és ${felsoHatar} között generált random páros szám: ${szam}`
);
