// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
function sumOfNumbersTo(destination) {
    let sum = 0;
    for (let i = 0; i <= destination; i++) {
        sum += i;
    }
    return sum;
}
sumOfNumbersTo();

assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
 *
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
function countEvenNumbersWithin(destination) {
    let arrayOfEvenNumbers = [];
    let sum = 0;
    //array of even numbers
    for (let i = 1; i <= destination; i++) {
        if (i % 2 == 0) {
            arrayOfEvenNumbers.push(i);
        }
    }
    //count
    let count = arrayOfEvenNumbers.length;
    // sum
    for (let i = 0; i < count; i++) {
        sum += arrayOfEvenNumbers[i];
    }

    return {
        // property value shorthand
        // when the property name and the value name are the same
        // you can just write the property name in your object
        count,
        sum,
        arrayOfEvenNumbers
    };
}
countEvenNumbersWithin();

assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
let emptyArray = [];
function celsiusToFahrenheit(arrayOfNumbers) {
    // [ C × (9/5) + 32 ]
    let result = [];
    function celciusFormula(celcius) {
        let farenheit = celcius * (9 / 5) + 32;
        return farenheit;
    }
    arrayOfNumbers.forEach((item) => {
        let newFarenheit = Math.trunc(celciusFormula(item));
        result.push(newFarenheit);
    });
    return result;
}
celsiusToFahrenheit(emptyArray);

assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
