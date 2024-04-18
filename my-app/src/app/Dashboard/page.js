'use client'
import React, { useState } from 'react';

const Dashboard = () => {
    const [Temperature, setTemperature] = useState(null);
    const [Humidity, setHumidity] = useState(null);
    const [Moisture, setMoisture] = useState(null);
    const [SoilType, setSoilType] = useState('');
    const [CropType, setCropType] = useState('');
    const [N, setN] = useState(null);
    const [P, setP] = useState(null);
    const [K, setK] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Temperature: Temperature,
                    Humidity: Humidity,
                    Moisture: Moisture,
                    SoilType: SoilType,
                    CropType: CropType,
                    N: N,
                    P: P,
                    K: K,
                }),
            });
            console.log("sent");
            const data = await response.json();
            setResponseMessage(data.message); // Update response message
            setError(data.error);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" id="Temperature" placeholder="Temperature" required value={Temperature} onChange={(e) => setTemperature(e.target.value)} />
                <input type="number" id="Humidity" placeholder="Humidity" required value={Humidity} onChange={(e) => setHumidity(e.target.value)} />
                <input type="number" id="Moisture" placeholder="Moisture" required value={Moisture} onChange={(e) => setMoisture(e.target.value)} />
                <input type="text" id="SoilType" placeholder="Soil Type" required value={SoilType} onChange={(e) => setSoilType(e.target.value)} />
                <input type="text" id="CropType" placeholder="Crop Type" required value={CropType} onChange={(e) => setCropType(e.target.value)} />
                <input type="number" id="N" placeholder="N" required value={N} onChange={(e) => setN(e.target.value)} />
                <input type="number" id="P" placeholder="P" required value={P} onChange={(e) => setP(e.target.value)} />
                <input type="number" id="K" placeholder="K" required value={K} onChange={(e) => setK(e.target.value)} />
                <button type="submit" className="btn btn-primary btn-block btn-large">Predict</button>
            </form>
            <div>{responseMessage}</div>
            <div>{error}</div> {/* Display response message */}
        </div>
    );
};

export default Dashboard;
