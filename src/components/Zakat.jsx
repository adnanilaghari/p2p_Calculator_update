import React, { useState } from "react";

function Zakat() {
  const [cash, setCash] = useState(" ");
  const [trade, setTrade] = useState(" ");
  const [gold, setGold] = useState(" ");
  const [silver, setSilver] = useState(" ");
  const [debit, setDebit] = useState(" ");
  const[property, setProperty]= useState( " ");
  const [zakaatAmount, setZakaatAmount] = useState(" ");

  const calculateZakaat = () => {
    const totalAssets = cash + trade + gold + silver + property
    const zakaatableAssets = totalAssets - debit;
    const zakaat = zakaatableAssets * 0.025 // 2.5% Zakaat
    setZakaatAmount(zakaat.toFixed(2));
  };

  return (
    <div>
       <div className="heading w-full bg-blue-400 rounded text-center text-lg">
       Zakat Calculator
      </div>
     
      <label htmlFor="cash"> <b>Cash:</b> in Hand and in <b>Bank</b> that should be equal to 52.5 carot silver networth then zukaat will be applied at Cash:</label>
      <input
    className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="cash"
        placeholder="Worth im amout"
        value={cash}
        onChange={(e) => setCash(parseFloat(e.target.value))}
      />
      <br />
      <label htmlFor="trade"><b>Trade:</b> that should be equal to 52.5 carot silver nwtworth then zukaat will be applied on Trade:</label>
      <input
      
       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="trade"
        placeholder="Worth in amout"
        value={trade}
        onChange={(e) => setTrade(parseFloat(e.target.value))}
      />
      <br />
      <label htmlFor="gold"> <b>GOld</b> Current NetWorth According to Market Rate and Gold is equal to 7.5 carot zukaat will be applied otherwise zukaat will not apply :</label>
      <input
       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        placeholder="Worth in amout"
        id="gold"
        value={gold}
        onChange={(e) => setGold(parseFloat(e.target.value))}
      />
      <br />
      <label htmlFor="silver"><b>Silver:</b> Current NetWorth According to Markete Rate Silver should be more then 52.5 carot::</label>
      <input
       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="silver"
        placeholder="Worth in amout"
        value={silver}
        onChange={(e) => setSilver(parseFloat(e.target.value))}
      />
       <br />
       <label htmlFor="silver"> <b>Property:</b> for commercial use Networth should be equal to 52.5 carrot silver then zukat apply:</label>
      <input
       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        id="property"
        placeholder="Worth in amout"
        value={property}
        onChange={(e) => setProperty(parseFloat(e.target.value))}
      />
      <br />
      <label htmlFor="debit"> <b>Debit</b> to exclude:</label>
      <input

       className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="number"
        placeholder="Worth in amout"
        id="debit"
        value={debit}
        onChange={(e) => setDebit(parseFloat(e.target.value))}
      />
      <br />
      <button  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calculateZakaat}>Calculate Zakaat</button>
      <br />
      <p className="result mt-2 bg-blue-400 py-3 rounded text-center" >Zakaat amount: {zakaatAmount}</p>
    </div>
  );
}

export default Zakat;
