import React from "react";
import { useState } from "react";
import Image from "next/image";
export default function Bmi() {
  const [bmiForm, setBmiForm] = useState({ calculated: false ,heightunit:"ft",weightunit:"kg"});

  const handleChange = (e) => {
    e.preventDefault();
    setBmiForm({ ...bmiForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bmiForm)
    let {weight,height}=bmiForm;

    if(bmiForm.weightunit==='lbs'){
      weight=Number(weight)*0.453592;
    }
    if(bmiForm.heightunit==='ft'){
      height=Number(height)*0.3048;
    }
    if(bmiForm.heightunit==='in'){
      height=Number(height)*0.0254;
    }

    let bmiIndex = (
      Number(weight) /
      (height * height)
    ).toFixed(2);

    let bmiComment="";
    if(bmiIndex<18.5){
      bmiComment="UnderWeight"
    }
    else if(bmiIndex>=18.5 && bmiIndex<=24.9 ){
      bmiComment="Normal"
      
    }
    else if(bmiIndex>=25 && bmiIndex<=29.9){
      bmiComment="OverWeight"

    }
    else if(bmiIndex>=30 && bmiIndex<=34.9){
      bmiComment="Obese"
      
    }
    else{
      
      bmiComment="Extremely Obese"
    }
    setBmiForm({ ...bmiForm, bmiIndex: bmiIndex, bmiComment:bmiComment,calculated: true });
  };
  return (
    <div>
      <div className="heading w-full bg-blue-400 rounded text-center text-lg">
        BMI
      </div>

      <div className="data-input">
        <form onSubmit={handleSubmit}>
          {/* Weight */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Weight
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
              <input
                type="text"
                name="weight"
                id="weight"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Unit
                </label>
                <select
                  id="weightunit"
                  name="weightunit"
                  onChange={handleChange}
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value={"kg"} defaultChecked>
                    KG
                  </option>
                  <option value={"lbs"}>LBS</option>
                </select>
              </div>
            </div>
          </div>

          {/* Height */}
           <div className="mb-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Height
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
              <input
                type="text"
                name="height"
                id="height"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Unit
                </label>
                <select
                  id="heightunit"
                  name="heightunit"
                  onChange={handleChange}
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value={"kg"} defaultChecked>
                    FT
                  </option>
                  <option value={"in"}>IN</option>
                </select>
              </div>
            </div>
          </div>


          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Caculate
          </button>
        </form>

        { bmiForm.calculated&&<div className="result mt-2 bg-blue-400 py-3 rounded text-center">BMI Index: {bmiForm.bmiIndex} ({bmiForm.bmiComment})
        </div>}
        { bmiForm.calculated&&<div className="flex justify-center mt-1"><Image src={"/bmi.jpg"} width={500} height={100}/></div>}
        
      </div>
    </div>
  );
}
