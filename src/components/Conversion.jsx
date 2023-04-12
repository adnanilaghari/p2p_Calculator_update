import React, { useState } from 'react';

const Conversion = () => {
  // Sample data
  const units = ['meters', 'feet', 'inches', 'centimeters', 'kilometers', 'miles', 'yards', 'millimeters', 'nautical miles', 'light years'];

  // State variables
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);
  const [fromValue, setFromValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  // Event handlers
  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  }

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  }

  const handleInputChange = (event) => {
    setFromValue(event.target.value);
  }

  const handleConversionClick = () => {
    const converted = convert(fromValue, fromUnit, toUnit);
    setConvertedValue(converted);
  }

  // Conversion logic
  const convert = (value, from, to) => {
    const ratios = {
      meters: 1,
      feet: 3.28084,
      inches: 39.3701,
      centimeters: 100,
      kilometers: 0.001,
      miles: 0.000621371,
      yards: 1.09361,
      millimeters: 1000,
      "nautical miles": 0.000539957,
      "light years": 1.057e-16
    };

    const fromRatio = ratios[from];
    const toRatio = ratios[to];
    const result = (value * fromRatio) / toRatio;
    return result.toFixed(2);
  };

  // Render the component

  return (
    <div>
      <h2 className="heading w-full bg-blue-400 rounded text-center text-lg">Unit Conversion</h2>
      <div className="flex justify-center items-center space-x-4 pt-6">
        <input
          type="number"
          className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter value"
          value={fromValue}
          onChange={handleInputChange}
        />
        <select
          className="w-32 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={fromUnit}
          onChange={handleFromUnitChange}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <label className="block text-sm font-medium leading-6 text-gray-900">to</label>
        <select
          className="w-32 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={toUnit}
          onChange={handleToUnitChange}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <button
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleConversionClick}
        >
          Convert
        </button>
      </div>
      <div className="mt-8">
        <label className="text-lg font-semibold">Result:</label>
        <input
          type="number"
          className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={convertedValue}
          readOnly
        />
        <span className="text-lg font-semibold">{toUnit}</span>
      </div>
    </div>
  );
}

export default Conversion;
