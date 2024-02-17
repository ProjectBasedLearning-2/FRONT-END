const Dashboard = () => {
    return ( 
        <>
            <div className="container-main h-[100vh] w-[100%] bg-[#FFFEFE] flex justify-start items-center ">

                <div className="dash-nav h-[100%] w-[16%] bg-[#1D4C43] flex flex-col justify-start items-center p-[2vw]">
                    <div className="nav-logo flex justify-center items-center gap-[12px] p-[10px] ">
                        <div className='w-[36px]'>
                            <img src="https://cdn-icons-png.freepik.com/256/1327/1327238.png?uid=R91415930&ga=GA1.1.1299523950.1706704366&semt=ais"></img>
                        </div>
                        <p className='font-semibold text-[20px] text-[#F7FFDD] '>Green<span className='text-[#43C949]'>Genius</span></p>
                    </div>
                    <div className="nav-links text-white text-semibold h-[300px] w-[100%] flex flex-col justify-center items-start gap-[40px] mt-[30%]">
                        <button className="hover:bg-[#E5FD99] hover:text-[#1D4C43] hover:text-semibold px-[20px] py-[10px] rounded-[5px] transition ease-in-out duration-400">Overview</button>
                        <button className="hover:bg-[#E5FD99] hover:text-[#1D4C43] hover:text-semibold px-[20px] py-[10px] rounded-[5px] transition ease-in-out duration-400">Fields</button>
                        <button className="hover:bg-[#E5FD99] hover:text-[#1D4C43] hover:text-semibold px-[20px] py-[10px] rounded-[5px] transition ease-in-out duration-400">Sensors</button>
                        <button className="hover:bg-[#E5FD99] hover:text-[#1D4C43] hover:text-semibold px-[20px] py-[10px] rounded-[5px] transition ease-in-out duration-400">Analytics</button>
                    </div>
                </div>

                <div className="mid-content h-[100%] w-[55%] flex flex-col justify-center items-start ">
                    <div className="top h-[350px] w-[100%] mt-[-10px] flex flex-col justify-center items-start gap-[10px] px-[5vw]">
                        <div className="top-title h-[50px] w-[380px] font-extrabold text-[22px] text-[#1D4C43] px-[20px] py-[10px] ml-[-20px] ">
                            <h1>Your Weekly Progress</h1>
                        </div>
                        <div className="top-cards flex justify-evenly items-center gap-[20px] ">
                            <div className="cards h-[180px] w-[160px] rounded-[10px] bg-[#1D4C43]"></div>
                            <div className="cards h-[180px] w-[160px] rounded-[10px] bg-[#F7FFDD]"></div>
                            <div className="cards h-[180px] w-[160px] rounded-[10px] bg-[#1D4C43]"></div>
                            <div className="cards h-[180px] w-[160px] rounded-[10px] bg-[#F7FFDD]"></div>
                        </div>
                    </div>

                    <div className="mid h-[412px] w-[100%] flex justify-evenly items-center mt-[-50px] ">
                        <div className="card h-[330px] w-[420px] rounded-[10px] bg-[#EBF3E6] flex flex-col justify-center items-center">
                            <div className="card1-title text-[20px] text-[#1D4C43] text-start ml-[-140px] font-extrabold ">
                                <h1>Predictive Analysis</h1>
                            </div>
                            <div className="graph1 h-[250px] w-[360px] flex justify-center items-center">
                                <img className="h-[250px] w-[260px]" src="pngwing.com.png" alt="" />
                            </div>
                        </div>
                        <div className="card h-[330px] w-[320px] rounded-[10px] bg-[#EBF3E6] flex flex-col justify-center items-center">
                            <div className="card2-title text-[20px] text-[#1D4C43] font-extrabold ml-[30px]">
                                <h1>It's a perfect day for spraying</h1>
                            </div>
                            <div className="graph2 h-[220px] w-[260px]">

                            </div>
                        </div>
                    </div>
                </div>


                <div className="right-content h-[100%] w-[29%] flex flex-col justify-evenly items-center">
                    <div className="columns h-[120px] w-[90%] rounded-[10px] flex justify-between items-center">
                        <div className="col-left h-[100%] w-[140px] border-[2px] border-transparent border-b-[#1D4C43]  flex flex-col justify-center items-center">
                            <h1 className="text-[35px]">12</h1>
                            <h3>September</h3>
                        </div>

                        <div className="col-right h-[100%] w-[140px] text-[#E5FD99] bg-[#1D4C43] flex flex-col justify-center items-start px-[10px] rounded-[10px]">
                            <h1 className="text-[25px]">22&deg;</h1>
                            <h3 className="text-[15px]">Mostly Sunny</h3>
                        </div>
                    </div>
                    
                    <div className="columns h-[120px] w-[90%] rounded-[10px] flex justify-between items-center">
                        <div className="col-left h-[100%] w-[140px] border-[2px] border-transparent border-b-[#1D4C43]  flex flex-col justify-center items-center">
                            <h1 className="text-[35px]">13</h1>
                            <h3>September</h3>
                        </div>

                        <div className="col-right h-[100%] w-[140px] text-[#1D4C43] bg-[#F7FFDD]  flex flex-col justify-center items-start px-[10px] rounded-[10px]">
                            <h1 className="text-[25px]">26&deg;</h1>
                            <h3 className="text-[15px]">Sunny</h3>
                        </div>
                    </div>

                    <div className="columns h-[120px] w-[90%] rounded-[10px]  flex justify-between items-center">
                        <div className="col-left h-[100%] w-[140px] border-[2px] border-transparent border-b-[#1D4C43]  flex flex-col justify-center items-center">
                            <h1 className="text-[35px]">14</h1>
                            <h3>September</h3>
                        </div>

                        <div className="col-right h-[100%] w-[140px] text-[#1D4C43] bg-[#F7FFDD]  flex flex-col justify-center items-start px-[10px] rounded-[10px]">
                            <h1 className="text-[25px]">19&deg;</h1>
                            <h3 className="text-[15px]">Cloudy</h3>
                        </div>
                    </div>

                    <div className="columns h-[120px] w-[90%] rounded-[10px] flex justify-between items-center">
                        <div className="col-left h-[100%] w-[140px] border-[2px] border-transparent border-b-[#1D4C43]  flex flex-col justify-center items-center">
                            <h1 className="text-[35px]">15</h1>
                            <h3>September</h3>
                        </div>

                        <div className="col-right h-[100%] w-[140px] text-[#1D4C43] bg-[#F7FFDD]  flex flex-col justify-center items-start px-[10px] rounded-[10px]">
                            <h1 className="text-[25px] ">22&deg;</h1>
                            <h3 className="text-[15px]">Mostly Sunny</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Dashboard;