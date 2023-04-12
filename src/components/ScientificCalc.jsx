import React from "react";
import { useState } from "react";

const ScientificCalc = () => {
  const [input, setInput] = useState("");

  function handleClick(string, clear) {
    if (clear) {
      setInput("");
    } else {
      setInput(input + string);
    }
  }

  const handleBackSpace=(e)=>{
    if(input.length===0){
      return
    }
    if(input[input.length-1]==='n' || input[input.length-1]==='s'){
      setInput(input.slice(0,input.length-3));
      return;
    }
    setInput(input.slice(0,input.length-1));
  }
  const calculate = (e) => {
    // Replace trig functions in input string with their evaluated values
    let inputWithTrigEvaluated = input.replace(/sin|cos|tan/g, (match) => {
      return `Math.${match}`;
    });
  
    // Replace square root operator with Math.sqrt function
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(
      /√(\d+)/g,
      (match, p1) => {
        return `Math.sqrt(${p1})`;
      }
    );
  
    // Replace caret symbol (^) with double asterisk (**) for exponentiation
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(
      /\d+\^\d+/g,
      (match) => {
        return match.replace("^", "**");
      }
    );
  
    // Replace squared operator with **2
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(/\d+\^2/g, (match, p1) => {
      return `${p1}**2`;
    });
  
    // Handle x^3 operator
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(/(\d+)\^3/g, (match, p1) => {
      return `${p1}**3`;
    });
  
    // Replace log operator with Math.log function
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(/log(\d+)/g, (match, p1) => {
      return `Math.log(${p1})`;
    });
  
    // Replace log10 operator with Math.log10 function
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(/log10(\d+)/g, (match, p1) => {
      return `Math.log10(${p1})`;
    });
  
    // Replace pi with Math.PI
    inputWithTrigEvaluated = inputWithTrigEvaluated.replace(/π/g, () => {
      return `Math.PI`;
    });
  
    // Evaluate the input string and convert to string
    setInput(eval(inputWithTrigEvaluated).toString());
  };
  
  
  
  
  

  return (
    <div className="container   text-center  ">
      <div className="heading w-full bg-blue-400 rounded text-center text-lg">
        Calculator
      </div>
      <div className="mt-1 mb-2">
        <input
          className=" w-4/5 py-3 px-2 rounded "
          type="text "
          value={input}
        />
      </div>
      <div className="grid grid-cols-1 ml-auto gap-2 justify-end w-auto mb-2">

      <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg "
          onClick={handleBackSpace}
        >
          Backspace
        </button>
          </div>
      <div className=" grid grid-cols-4 gap-2 justify-center w-auto">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("(");
          }}
        >
          (
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick(")");
          }}
        >
          )
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("", true);
          }}
        >
          C
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("/");
          }}
        >
          /
        </button>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("7");
          }}
        >
          7
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("8");
          }}
        >
          8
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("9");
          }}
        >
          9
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("*");
          }}
        >
          *
        </button>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("4");
          }}
        >
          4
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("5");
          }}
        >
          5
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("6");
          }}
        >
          6
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("-");
          }}
        >
          -
        </button>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("1");
          }}
        >
          1
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("2");
          }}
        >
          2
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("3");
          }}
        >
          3
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("+");
          }}
        >
          +
        </button>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg col-span-2"
          value="="
          onClick={calculate}
        >
          =
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg "
          onClick={() => {
            handleClick(".");
          }}
        >
          .
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("sin(");
          }}
        >
          sin
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("cos(");
          }}
        >
          cos
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("tan(");
          }}
        >
          tan
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("log10(");
          }}
        >
          log10
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("^2");
          }}
        >
          x^2
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("√");
          }}
        >
          {" "}
          √{" "}
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("^3");
          }}
        >
          x³
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-center py-2 rounded-lg"
          onClick={() => {
            handleClick("π");
          }}
        >
          pi
        </button>
      
        
       
      </div>
    </div>
  );
};

export default ScientificCalc;
