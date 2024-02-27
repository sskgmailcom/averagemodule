
const calculateAverage = require('./average');

const numbers = [1, 2,];

try {
  const average = calculateAverage(numbers);
  console.log('Average:', average);
} catch (error) {
  console.error('Error:', error.message);
}
