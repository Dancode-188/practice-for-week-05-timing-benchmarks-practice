const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  console.time("Total time for addNums10Timing");
  let sums = [];
  for (let i = 1; i <= 10; i++) {
    let startTime = Date.now();
    console.time(`addNums call ${i}`);
    sums.push(addNums(i * increment));
    console.timeLog(`addNums call ${i}`);
    let endTime = Date.now();
    console.log(`addNums call ${i * increment} took ${endTime - startTime}ms`);
    console.timeEnd(`addNums call ${i}`);
  }
  console.timeEnd("Total time for addNums10Timing");

  return sums;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  console.time("Total time for addManyNums10Timing");
  let sums = [];
  for (let i = 1; i <= 10; i++) {
    let startTime = Date.now();
    console.time(`addManyNums call ${i}`);
    sums.push(addManyNums(i * increment));
    console.timeLog(`addManyNums call ${i}`);
    let endTime = Date.now();
    console.log(`addManyNums call ${i * increment} took ${endTime - startTime}ms`);
    console.timeEnd(`addManyNums call ${i}`);
  }
  console.timeEnd("Total time for addManyNums10Timing");
  return sums;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);