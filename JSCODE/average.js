function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  if (numbers.length === 0) {
    throw new Error('Array must not be empty');
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

module.exports = calculateAverage;