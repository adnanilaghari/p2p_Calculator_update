import { useState } from 'react';
// Heart Rate Calculator function that calculates a person's maximum heart rate and target heart rate zones based on their age and exercise intensity:
// Maximum Heart Rate = 220 - age
//Lower Target Zone = Maximum Heart Rate * Exercise Intensity
//Upper Target Zone = Maximum Heart Rate * (Exercise Intensity + 0.1)*//

/* * Blog:::   Maximum Heart Rate. This gives the upper range of 
the target heart rate zone, which is the range of heart rates that 
a person should aim to achieve during exercise to get the most cardiovascular benefit.
The upper range of the target heart rate zone is important to know because exercising at
 too high of a heart rate can be dangerous, while exercising at too low of a heart rate 
 may not provide enough cardiovascular benefit. By knowing their upper target heart rate
  zone, a person can make sure they are exercising at an appropriate intensity level to get
   the most benefit from their workout.*/
export default function Conversion() {
  const [age, setAge] = useState('');
  const [exerciseIntensity, setExerciseIntensity] = useState('');
  const [maxHeartRate, setMaxHeartRate] = useState('');
  const [targetHeartRate, setTargetHeartRate] = useState('');

  function calculateHeartRate() {
    const maxHeartRate = 220 - age;
    const lowerTargetZone = maxHeartRate * exerciseIntensity;
    const upperTargetZone = maxHeartRate * (exerciseIntensity + 0.1);
    setMaxHeartRate(maxHeartRate);
    setTargetHeartRate(`${Math.round(lowerTargetZone)} - ${Math.round(upperTargetZone)}`);
  }

  return (
    <div>
     
      <div className="heading w-full bg-blue-400 rounded text-center text-lg mb-3">
      Heart Rate Calculator
      </div>
      <label    className="block text-sm font-medium leading-6 text-gray-900" >
        Age:
        <input   className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Exercise Intensity (0-1): </label>
        <input  className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" min="0" max="1" step="0.1" value={exerciseIntensity} onChange={(e) => setExerciseIntensity(e.target.value)} />
     
      <button  className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={calculateHeartRate}>Calculate</button>
       <div className="result mt-2 bg-blue-400 py-3 rounded text-center">
Result
     
      {maxHeartRate && <p>Maximum Heart Rate: {maxHeartRate}</p>}
      {targetHeartRate && <p>Target Heart Rate Zone: {targetHeartRate}</p>}

      </div>
    </div>
  );
}
