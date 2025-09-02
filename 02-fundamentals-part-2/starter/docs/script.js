// // console.log("Part 2 functions is ready.");

// // Functions - Declarations and Expressions
// function logger() {
//   console.log("My name is Zoe");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// // Function expression
// // const calcAge = function (birthYear) {
// //   return 2025 - birthYear;
// // };

// const age1 = calcAge(2000);
// console.log(age1);

// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//   return introduction;
// }

// console.log(introduce("Zoe", "Laput", "20"));
// console.log(introduce("John"));

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired`;
//   }
// }

// console.log(yearsUntilRetirement(2000, "Zoe"));

// // function scope
// const globalVar = "I am global";

// function testScope() {
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// console.log(localVar);

// /////////////////////////////////
// // Coding Challenge #1

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//    if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//    } else if (avgDolphins * 2 <= avgKoalas) {
//     return `Koalas win (${avgDolphins} vs. ${avgKoalas})`;
//     } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}.`;
// }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// //////////////////////////////// End 01

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ["Jonas", 40, false, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//Accessing Array Elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[4]);

//Access the length
console.log(friends.length);

//Change Array Elements
friends[0] = "Jay";
console.log(friends);

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
console.log(ages);

/// Array Methods - Adding Elements

// Push - add to end
const newLength = friends.push("John");
console.log(friends);
console.log(newLength);

// Unshift - add to beginning
friends.unshift("Mark");
console.log(friends);

// Pop - remove from end
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift - remove from beginning
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

/// Finding an element

//IndexOf - find position of element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Mark"));

// Includes - check if element exists
console.log(friends.includes("Peter"));
console.log(friends.includes("John"));

//Array Iterations
//Traditional for loop
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// Modern approach
friends.forEach(function (friend, index) {
  console.log(`${index + 1}: ${friend}`);
});

// Arrow functio
friends.forEach((friend, index) => {
  console.log(`${index + 1}: ${friend}`);
});

// Practical Example
const grades2 = [85, 92, 50, 96, 50, 74];
let total = 0;

for (let i = 0; i < grades2.length; i++) {
  total += grades2[i];
}

const average = total / grades2.length;
console.log(`Average grade: ${average.toFixed(2)}`);

let passedCount = 0;
grades2.forEach((grade) => {
  if (grade >= 70) passedCount++;
});

console.log(`${passedCount} out of ${grades2.length} students have passed`);

/////////////////////////
// Coding Challenge #2: Student Grade Manager
const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

function calculateAverage(grades3) {
  let sum = 0;
  for (let i = 0; i < grades3.length; i++) {
    sum += grades3;
  }
  return sum / grades3.length;
}

function findHighestGrade(grades3) {
  let highest = grades3[0];
  for (let i = 0; i < grades3.length; i++) {
    if (grades3[i] >= highest) {
      highest = grades3[i];
    }
  }
  return highest;
}

function findLowestGrade(grades3) {
  let lowest = grades3[0];
  for (let i = 0; i < grades3.length; i++) {
    if (grades3[i] < lowest) {
      lowest = grades3[i];
    }
  }
  return lowest;
}

function countPassing(grades3, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades3.length; i++) {
    if (grades3[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

const average3 = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades3.length}`);
