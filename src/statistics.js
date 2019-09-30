/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Oskar Lövsveden
 * @version 1.0.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
  // TODO: Collect all values in an object

  maximum(numbers)
  mean(numbers)
  median(numbers)
  minimum(numbers)
  // mode
  range(numbers)
  // stand-dev
}

function validateArray (data) {
  if (!Array.isArray(data)) {
    throw new TypeError('The passed argument is not an array.')
  }

  if (!data.length) {
    throw new Error('The passed array contains no elements.')
  }

  // for-loop checking if data[] only contains number.
  for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) !== 'number') {
      throw new TypeError('The passed array contains not just numbers.')
    }
  }
}

function maximum (numbers) {
  validateArray(numbers)

  const copy = numbers.slice(0)

  const maxValue = Math.max(...copy)
  return maxValue
}

function mean (numbers) {
  validateArray(numbers)

  let sumOfNumbers = 0

  // for-loop adding all numbers in numbers[] to sumOfNumbers.
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i]
  }

  const meanValue = sumOfNumbers / numbers.length
  return meanValue
}

function median (numbers) {
  validateArray(numbers)

  // Copy and sort numbers[] low to high
  const copy = numbers.slice().sort((a, b) => a - b)
  const lowMiddle = Math.floor((copy.length - 1) / 2)
  const highMiddle = Math.ceil((copy.length - 1) / 2)
  const medianValue = (copy[lowMiddle] + copy[highMiddle]) / 2

  return medianValue
}

function minimum (numbers) {
  validateArray(numbers)

  const copy = numbers.slice(0)

  const minValue = Math.min(...copy)
  return minValue
}
// TODO: WRITE FUNCTION FOR  Mode...

function range (numbers) {
  validateArray(numbers)

  const rangeValue = maximum(numbers) - minimum(numbers)
  return rangeValue
}

// ...Standard Deviation

// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = undefined
exports.range = range
exports.standardDeviation = undefined
