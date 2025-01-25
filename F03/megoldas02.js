let a = Number(prompt("Add meg a hatványozandó számot"));
let b = Number(prompt("Add meg a hatványozandó számot mennyire hatványozuk"));
let hatvany = a ** b;
document.write(
  `Ha a ${a} értéket hatványozuk ${b} mértékben akkor az eredmény: ${hatvany} lesz`
);
