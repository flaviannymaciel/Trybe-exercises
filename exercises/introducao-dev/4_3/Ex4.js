let n = 5;
let numberOfLines = (n + 1) / 2; // 5
let controlLeft = numberOfLines; // 5
let controlRight = numberOfLines; // 5
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) {
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {
   if (lineColumn <= controlLeft && lineColumn >= controlRight) {
      lineInput = lineInput + "*";
    } else {
      lineInput = lineInput + " ";
      }
    }
  console.log(lineInput);
  lineInput = "";
  
  controlRight -= 1; // 5 - 4 - 3 - 2 - 1
  controlLeft += 1; // 5 - 6 - 7 - 8 - 9
}