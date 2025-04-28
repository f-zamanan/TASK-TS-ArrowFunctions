// Why did we import this? 🤔
import { square } from "./arrowFunctions";

/**
 * 🌶️🌶️
 * squares(numbers):
 * - Accepts "numbers" parameter of type "number[]"
 * - returns an array of numbers were each element of "numbers" argument is squared
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `square` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
// function squares(numbers: number[]): number[] {
//   return [0];
// }

type SqueredNumberArray = (numbers: number[]) => number[];
const squares: SqueredNumberArray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = square(numbers[i]);
  }
  return numbers;
};

// example:
squares([1, 2, 3]); // => [1, 4, 9]

export { squares };
