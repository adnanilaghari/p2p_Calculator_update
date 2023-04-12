import React, { useState } from "react";

function Usher() {
  const [cash, setCash] = useState(" ");
  const [trade, setTrade] = useState(" ");

  const [zakaatAmount, setZakaatAmount] = useState(0);
  const [zakaatAmount1, setZakaatAmount1] = useState(0);

  const calculateZakaat = () => {
    const totalAssets = cash ;
    const percentage = 10;
    const zakaat =  totalAssets*(percentage/100) ; // 2.5% Zakaat
    setZakaatAmount(zakaat.toFixed(2));
  };
  const calculateZakaat1 = () => {
    const totalAssets = trade ;
    const percentage = 5;
    const zakaat =  totalAssets*(percentage/100) ; // 2.5% Zakaat
    setZakaatAmount1(zakaat.toFixed(2));
  };

  return (
    <div>
       <div className="heading w-full bg-blue-400 rounded text-center text-lg">
       Usher  Calculator
      </div>
     
      <label htmlFor="cash"> <b>Usher:</b> Natural Sources(PKR) </label>
      <input
    className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="cash"
        placeholder="Worth in Rupes"
        value={cash}
        onChange={(e) => setCash(parseFloat(e.target.value))}
      />
     
     <button  className=" mt-3 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calculateZakaat}>Calculate Usher</button>
<     p className="result mt-2 bg-blue-400 py-3 rounded text-center" >Usher: {zakaatAmount}</p>
      
      
      
      
      <br />
      <label htmlFor="trade"><b>Usher:</b>  Artificial Sources(PKR) </label>
      <input
      
       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="trade"
        placeholder="Worth in Rupes"
        value={trade}
        onChange={(e) => setTrade(parseFloat(e.target.value))}
      />
     
      <br />


     
      <br />
      <button  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calculateZakaat1}>Calculate Usher</button>
      <p className="result mt-2 bg-blue-400 py-3 rounded text-center" >Usher: {zakaatAmount1}</p>
    </div>
  );
}

export default Usher;
