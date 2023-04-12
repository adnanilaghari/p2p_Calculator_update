import React, { useState } from "react";
//calculates the recommended daily water intake for a person based on their body weight.
const WaterIntakeCal = () => {
  const [weight, setWeight] = useState("");
  const [waterIntake, setWaterIntake] = useState(0);

  const handleCalculate = () => {
    const intake = weight * 0.033;
    setWaterIntake(intake.toFixed(1));
  };

  return (
    <div>
     <div className="heading w-full bg-blue-400 rounded text-center mt-5 text-lg">
     Water Intake Calculator
      </div>
      <label className="bold">
        Enter your weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="0.00   KG"
        />
      </label>
      <button   className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4" onClick={handleCalculate}>Calculate</button>
      {waterIntake > 0 && (
        <p className="result mt-2 bg-blue-400 py-3 rounded text-center">Your recommended daily water intake is {waterIntake} liters.</p>
      )}
    </div>
  );
};

export default WaterIntakeCal;
