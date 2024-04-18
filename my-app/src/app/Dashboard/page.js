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
            <h2 className='text-[30px] absolute top-[3%] left-[45%]'>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div className='absolute top-[10%] justify-center text-center'>
                    <input type="number" id="Temperature" placeholder="Temperature" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={Temperature} onChange={(e) => setTemperature(e.target.value)} />
                    <input type="number" id="Humidity" placeholder="Humidity" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={Humidity} onChange={(e) => setHumidity(e.target.value)} />
                    <input type="number" id="Moisture" placeholder="Moisture" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={Moisture} onChange={(e) => setMoisture(e.target.value)} />
                    <input type="text" id="SoilType" placeholder="Soil Type" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={SoilType} onChange={(e) => setSoilType(e.target.value)} />
                    <input type="text" id="CropType" placeholder="Crop Type" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={CropType} onChange={(e) => setCropType(e.target.value)} />
                    <input type="number" id="N" placeholder="N" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={N} onChange={(e) => setN(e.target.value)} />
                    <input type="number" id="P" placeholder="P" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={P} onChange={(e) => setP(e.target.value)} />
                    <input type="number" id="K" placeholder="K" required className="border-2 border-black rounded-[25px] text-center p-[10px] m-[8px]" value={K} onChange={(e) => setK(e.target.value)} />
                    <button type="submit" className="bg-[#B9FFB7] w-[100px] h-[50px] rounded-[10px] p-[10px] m-[8px] ">Predict</button>
                </div>
            </form>
            <div className='absolute top-[35%] left-[40%] text-center'>
                <h2 className='text-[30px]'>Predicted Fertilizer</h2>

           
                <div className='text-[20px] mt-2'>
                    {responseMessage} 
                </div>
                
                {/* <div>{error}</div> Display response message */}
            </div>
        </div>
    );
};

export default Dashboard;
