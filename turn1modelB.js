const windowSize = 10; // Number of data points to consider in the window
const average = (numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

let dataBuffer = [];

function processData(newDataPoint) {
  // Add the new data point to the buffer
  dataBuffer.push(newDataPoint);

  // Remove old data points if the buffer is full
  if (dataBuffer.length > windowSize) {
    dataBuffer.shift();
  }

  // Calculate the average of the data in the window
  const currentAverage = average(dataBuffer);

  // Do something with the pattern (e.g., check for anomalies)
  console.log('Current average:', currentAverage);
}

// Simulate incoming data in real-time
function simulateRealTimeData() {
  const dataInterval = setInterval(() => {
    const randomData = Math.random() * 100;
    processData(randomData);
  }, 100); // Simulate new data every 100 milliseconds

  // Stop simulation after some time (optional)
  setTimeout(() => clearInterval(dataInterval), 10000); // Simulate 10 seconds of data
}

simulateRealTimeData();
