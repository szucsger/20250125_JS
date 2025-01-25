let a = Number(prompt("Add meg az életkort"));
if (a > 0 && a < 6) {
  document.write(`Az illető kora ${a}, ami a Kisgyermekkorba sorolja`);
} else if (a < 12) {
  document.write(`Az illető kora ${a}, ami a Gyermekkorba sorolja`);
} else if (a < 16) {
  document.write(`Az illető kora ${a}, ami a Serdülőkorba sorolja`);
} else if (a < 20) {
  document.write(`Az illető kora ${a}, ami a Ifjúkorba sorolja`);
} else if (a < 30) {
  document.write(`Az illető kora ${a}, ami a Fiatal felnőttkorba sorolja`);
} else if (a < 60) {
  document.write(`Az illető kora ${a}, ami a Felnőttkorba sorolja`);
} else if (a > 60 && a < 120) {
  document.write(`Az illető kora ${a}, ami a Aggkorba sorolja`);
} else {
  document.write(`Hibás adat`);
}
