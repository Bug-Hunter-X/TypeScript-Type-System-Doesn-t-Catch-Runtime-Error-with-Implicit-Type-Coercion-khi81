function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both parameters must be numbers.');
  }
  return a + b;
}

const result1 = add(5, '10'); // Still compiles, runtime error
console.log(result1); // Output: 510

const result2 = addSafe(5, 10); //Correct use of addSafe
console.log(result2); // Output: 15

const result3 = addSafe(5, '10'); //Throws error at runtime
console.log(result3); //Throws an error