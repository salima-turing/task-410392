class SmartHomeMonitor {
    // Omitted existing parts for brevity
    constructor(windowSize) {
        // Existing constructor logic
        this.buffer = [];
    }

    publishSensorData(temperature, humidity) {
        if(!this.isConnected) {
            this.buffer.push({ temperature, humidity }); // Buffer data
        } else {
            this.addSensorData(temperature, humidity);
        }
    }

    sendBufferedData() {
        while(this.buffer.length > 0) {
            const { temperature, humidity } = this.buffer.shift();
            this.addSensorData(temperature, humidity); // Process buffered data
        }
    }

    // Method to check connectivity and trigger sendBufferedData()
}

// Simulate connection states
setInterval(() => {
    smartMonitor.isConnected = checkNetworkStatus(); // Implement checkNetworkStatus based on connectivity
    if(smartMonitor.isConnected) {
        smartMonitor.sendBufferedData(); // Send any buffered data if connected
    }
}, 5000);
