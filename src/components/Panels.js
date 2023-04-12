import Link from "next/link";

const Panels = ({
  setHealth,
  setUsher,
  setZakat,
  setConversion,
  setScientific,
  setBMI,
}) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-2  ">
      {/* Panel Cards */}

      {/* Health  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300  " onClick={()=>{setHealth(true);setUsher(false);setConversion(false);setZakat(false),setScientific(false);setBMI(false)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Editable-Health-Logo-Design-Template-2048x2048.png"
            width={100}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-6  ">
          <div className="text text-black text-xl mr-auto mt-10  mx-32 font-bold ">
            Health
          </div>
        </div>
      </a>
      {/* usher  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300   " onClick={()=>{setHealth(false);setUsher(true);setConversion(false);setZakat(false),setScientific(false);setBMI(false)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="https://www.clipartkey.com/mpngs/m/248-2485612_islamic-logo-free-png.png"
            width={110}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-6  ">
          <div className="text text-black text-xl mr-auto mt-12  mx-32 font-bold ">
            Usher
          </div>
        </div>
      </a>

      {/* zakat  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300  " onClick={()=>{setHealth(false);setUsher(false);setConversion(false);setZakat(true),setScientific(false);setBMI(false)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="https://thumbs.dreamstime.com/z/zakat-icon-vector-ramadan-concept-thin-line-illustration-zakat-editable-stroke-zakat-linear-sign-use-web-zakat-192180454.jpg"
            width={100}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-6  ">
          <div className="text text-black text-xl mr-auto mt-8  mx-32 font-bold ">
            Zakat
          </div>
        </div>
      </a>
      {/* conversion  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300  " onClick={()=>{setHealth(false);setUsher(false);setConversion(true);setZakat(false),setScientific(false);setBMI(false)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="https://icon-library.com/images/icon-convert/icon-convert-12.jpg"
            width={100}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-6  ">
          <div className="text text-black text-xl mr-auto mt-8  mx-32 font-bold ">
            Conversion
          </div>
        </div>
      </a>
      {/* Body mass index  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300  " onClick={()=>{setHealth(false);setUsher(false);setConversion(false);setZakat(false),setScientific(false);setBMI(true)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.kA4LfFT2XVCTNA3eVyOD6wHaHa&pid=Api&P=0"
            width={100}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-9  ">
          <div className="text text-black text-xl mr-auto mt-8  mx-32 font-bold ">
            BMI
          </div>
        </div>
      </a>
      {/* Scientific Calculator  */}
      <a className=" border-2 border-black rounded-xl h-100 hover:bg-slate-600 w-40 bg-indigo-300  " onClick={()=>{setHealth(false);setUsher(false);setConversion(false);setZakat(false),setScientific(true);setBMI(false)}}>
        <div className="icon mr-auto w-60  ">
          <img
            src="/calcutter.jpg"
            width={90}
            className="  bg-white object-fit-cover rounded-full mx-8 mt-2 "
          />
        </div>
        <div className="card   flex justify-center box-border w-9  ">
          <div className="text text-black text-xl mr-auto mt-6  mx-32 font-bold ">
            Sciencetific
          </div>
        </div>
      </a>
    </div>
  );
};

export default Panels;
