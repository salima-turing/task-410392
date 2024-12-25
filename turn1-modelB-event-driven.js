const eventEmitter = require('events');
const emitter = new eventEmitter();

class SensorDataProcessor {
    constructor() {
        this.attachListeners();
    }

    attachListeners() {
        emitter.on('sensorReading', this.processReading.bind(this));
    }

    processReading(data) {
        // Check for patterns in the data
        if (data.temperature > 30 && data.humidity > 60) {
            emitter.emit('highHumidityAlert');
        } else if (data.temperature < 15) {
            emitter.emit('lowTemperatureAlert');
        }
    }
}

const processor = new SensorDataProcessor();

// Simulate sensor readings
setInterval(() => {
    const reading = {
        temperature: Math.floor(Math.random() * 30) + 15,
        humidity: Math.floor(Math.random() * 60) + 30
    };
    console.log("Sensor Reading:", reading);
    emitter.emit('sensorReading', reading);
}, 2000);

emitter.on('highHumidityAlert', () => {
    console.log("High humidity alert triggered!");
    // Perform actions such as sending a notification or activating a dehumidifier
});

emitter.on('lowTemperatureAlert', () => {
    console.log("Low temperature alert triggered!");
    // Perform actions such as sending a notification or activating a heater
});
