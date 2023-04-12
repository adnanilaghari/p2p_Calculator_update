import { useState } from 'react';
// this app calculates the ideal macronutrient intake (protein, carbohydrates, and fat) for 
//a person based on their age, gender, weight, and activity level
function MacroIntake() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [macros, setMacros] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Call the function to calculate macros based on user input
    const result = calculateMacros(age, gender, activityLevel);

    // Update the state with the calculated macros
    setMacros(result);
  }

  return (
    <div>
       <div className="heading w-full bg-blue-400 rounded text-center text-lg mb-7">
       Macronutrient intake Calculator
      </div>
    
      <form onSubmit={handleSubmit}>
        <label  className="block text-sm font-medium leading-6 text-gray-900">  Age:</label>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> </div>
          <input className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                required type="number" value={age} onChange={(event) => setAge(event.target.value)} />
         
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Gender:
          </label>
          <select className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
       
        <label className="block text-sm font-medium leading-6 text-gray-900"> 
          Activity Level:
          </label>
          <select  className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={activityLevel} onChange={(event) => setActivityLevel(event.target.value)}>
            <option value="">--Please choose an option--</option>
            <option value="1">Sedentary (little or no exercise)</option>
            <option value="1.2">Lightly Active (1-3 days per week of exercise)</option>
            <option value="1.375">Moderately Active (3-5 days per week of exercise)</option>
            <option value="1.55">Very Active (6-7 days per week of exercise)</option>
            <option value="1.725">Super Active (twice per day, extra heavy workouts)</option>
          </select>
       
        <button className=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Calculate Macros</button>
      </form>
      {macros && (
        <div className="result mt-2 bg-blue-400 py-3 rounded text-center">
          <h2>Macros</h2>
          <p>Protein: {macros.protein}g</p>
          <p>Carbohydrates: {macros.carbohydrates}g</p>
          <p>Fat: {macros.fat}g</p>
        </div>
      )}
    </div>
  );
}

function calculateMacros(age, gender, activityLevel) {
  let protein, carbohydrates, fat;

  // Calculate protein intake based on weight and activity level
  if (gender === 'male') {
    protein = 1.2 * (88.36 - (1.3 * age)) + (13.4 * Number(activityLevel));
  } else {
    protein = (0.9 * (88.36 - (1.3 * age))) + (13.4 * Number(activityLevel));
  }

  // Calculate carbohydrate intake based on age and activity level
  if (age < 30) {
    carbohydrates = activityLevel * 40;
  } else if (age < 50) {
    carbohydrates = activityLevel * 35;
  } else {
    carbohydrates = activityLevel * 30;
  }

  // Calculate fat intake based on total calories and macronutrient ratios
  const calories = (protein * 4) + (carbohydrates * 4);
  fat = (calories * 0.3) / 9;

  return { protein, carbohydrates, fat };
}

export default MacroIntake;

