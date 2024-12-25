class DataPatternRecognizer {
    constructor(windowSize) {
        this.windowSize = windowSize;
        this.dataWindow = [];
    }

    addDataPoint(value) {
        // Maintain the sliding window
        if (this.dataWindow.length >= this.windowSize) {
            this.dataWindow.shift(); // Remove the oldest value
        }
        this.dataWindow.push(value);
        this.recognizePattern();
    }

    recognizePattern() {
        if (this.dataWindow.length < this.windowSize) {
            return; // Not enough data to analyze
        }

        // Simple pattern recognition: Check for increasing trend
        const isIncreasing = this.dataWindow.every((val, i, arr) => i === 0 || val > arr[i - 1]);

        if (isIncreasing) {
            console.log("Detected an increasing pattern in data:", this.dataWindow);
        }
    }
}

// Simulating real-time data input
const patternRecognizer = new DataPatternRecognizer(5);

// Simulate incoming data
setInterval(() => {
    const newDataPoint = Math.floor(Math.random() * 100);
    console.log("New data point:", newDataPoint);
    patternRecognizer.addDataPoint(newDataPoint);
}, 1000);
