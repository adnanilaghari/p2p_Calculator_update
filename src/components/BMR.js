
import { useState } from 'react';
// Basal Metabolic Rate (BMR) its Health Part
const BMR = () => {
  const [gender, setGender] = useState('male'); // or 'female'
  const [age, setAge] = useState(" ");
  const [weight, setWeight] = useState(" "); // in kg
  const [height, setHeight] = useState(" "); // in cm

  const calculateBmr = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    return bmr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateBmr();
    alert(`Your BMR is ${result.toFixed(2)} calories/day`);
  };

 

  return (
    <>
     <div className="heading w-full bg-blue-400 rounded text-center mt-5 text-lg">
     Basal Metabolic Rate (BMR)
      </div>
      
      <div className="data-input ">
    <form onSubmit={handleSubmit}>
      <div>
      <label
              htmlFor="p"
              className="block text-sm font-medium leading-6 text-gray-900 mt-3"
            >
             Select  Gender
            </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
           <select className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

      </div>
      <div>
        <label>Age:</label>
        <input  className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="0.00   year"
                required type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      
      </div>
      <div>
        <label>Weight:</label>
        <input  className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="0.00  kg"
                required type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height:</label>
        <input  className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  placeholder="0.00  cm"
        
                required type="number" value={height} onChange={(e) => setHeight(e.target.value)} /> 
      </div>
      <button  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2" type="submit">Calculate</button>
    
    </form>
    </div>
       </>  
  )
 
}

export default BMR;
