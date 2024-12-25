const EventEmitter = require('events');

class SensorDataEmitter extends EventEmitter {
    publishData(temperature, humidity) {
        this.emit('dataReceived', temperature, humidity);
    }
}

const sensorEmitter = new SensorDataEmitter();
const monitor = new SmartHomeMonitor(5);

// Subscribe to temperature data events
sensorEmitter.on('dataReceived', (temperature, humidity) => {
     monitor.addSensorData(temperature, humidity);
});

// Simulating real-time data input
simulateSensorInput = () => {
    const simulateData = () => {
        const temperature = Math.random() * 40; // Simulate sensor data
        const humidity = Math.random() * 100;   // Simulate sensor data
        sensorEmitter.publishData(temperature, humidity);
    };
    setInterval(simulateData, 1000);
};

simulateSensorInput();
