let a = Number(prompt("Add meg a számot"));
let b = Number(prompt("Add meg az osztót"));
let oszto = a % b;
if (oszto == 0) {
  document.write(`A ${b} osztó maradéktalanul osztja a(z) ${a} számot`);
} else {
  document.write(`A ${b} osztó nem maradéktalanul osztja a(z) ${a} számot`);
}
