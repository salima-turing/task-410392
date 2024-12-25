class TemperatureHumidityMonitor {
    constructor(windowSize) {
        this.windowSize = windowSize;
        this.temperatureWindow = [];
        this.humidityWindow = [];
    }

    addReading(temperature, humidity) {
        if (this.temperatureWindow.length >= this.windowSize) {
            this.temperatureWindow.shift();
            this.humidityWindow.shift();
        }

        this.temperatureWindow.push(temperature);
        this.humidityWindow.push(humidity);
        this.detectAnomalies();
    }

    detectAnomalies() {
        if (this.temperatureWindow.length < this.windowSize) {
            return;
        }

        // Calculate average temperature and humidity for the window
        const avgTemperature = this.temperatureWindow.reduce((sum, val) => sum + val, 0) / this.windowSize;
        const avgHumidity = this.humidityWindow.reduce((sum, val) => sum + val, 0) / this.windowSize;

        // Check for anomalies (e.g., temperature deviation > 5°C or humidity deviation > 10%)
        const lastTemperature = this.temperatureWindow[this.temperatureWindow.length - 1];
        const lastHumidity = this.humidityWindow[this.humidityWindow.length - 1];

        if (Math.abs(lastTemperature - avgTemperature) > 5 || Math.abs(lastHumidity - avgHumidity) > 10) {
            console.log("Anomaly detected: Temperature:", lastTemperature, "°C, Humidity:", lastHumidity, "%");
        }
    }
}

const monitor = new TemperatureHumidityMonitor(10);

// Simulate sensor readings
setInterval(() => {
    const temperature = Math.floor(Math.random() * 30) + 20;
    const humidity = Math.floor(Math.random() * 50) + 30;
    console.log("Temperature:", temperature, "°C, Humidity:", humidity, "%");
    monitor.addReading(temperature, humidity);
}, 2000);
