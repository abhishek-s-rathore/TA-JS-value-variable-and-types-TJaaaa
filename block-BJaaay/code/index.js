//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the even values from 1 to 10.

// Using `console.log` log all the odd values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

for (let i = 1; i <= 10; i = i + 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 10; i = i + 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i = i + 1) {
  sum = sum + i;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop

let j = 1;
while (j <= 10) {
  console.log(j);
  j = j + 1;
}

let k = 1;
while (k <= 10) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k = k + 1;
}

let l = 1;
while (l <= 10) {
  if (l % 2 !== 0) {
    console.log(l);
  }
  l = l + 1;
}

let sum2 = 0;
let m = 0;
while (m <= 10) {
  sum2 = sum2 + m;
  m = m + 1;
}

console.log(sum2);
