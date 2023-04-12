import React, { useState ,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showSuccessChangeToast, setShowSuccessChangeToast] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const router = useRouter();
  const {token}=router.query;

  const handleChange = (e) => {
    setEmail(e.target.value);
    setShowErrorToast(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsWaiting(true)
   try{
    setShowErrorToast(false);
    let res = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/forgotPassword`, {
      method: "POST",
      body: JSON.stringify(email),
    });
    let response = await res.json();
    setIsWaiting(false)
    if(response.success && res.status===200){
        setShowEmailSent(true)
    }
    else{
        setShowErrorToast(true)
    }
}
catch(err){
    setIsWaiting(false);
       setShowErrorToast(true)

   }

  };


  const handlePassChange = (e) => {
    setNewPassword(e.target.value);
    setShowErrorToast(false);
  };


  const handlePassSubmit = async (e) => {
    e.preventDefault();
    setIsWaiting(true)
   try{
    setShowErrorToast(false);
    let res = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/updatePassword`, {
      method: "POST",
      body: JSON.stringify({newPassword,token}),
    });
    let response = await res.json();
    setIsWaiting(false)
    if(response.success && res.status===200){
        setShowSuccessChangeToast(true)
        setTimeout(()=>{router.push(process.env.NEXT_PUBLIC_DOMAINNAME+"/"+"AdminLogin")},1000);

    }
    else{
        setShowErrorToast(true)
    }
}
catch(err){
    console.log(err);
    setIsWaiting(false);
       setShowErrorToast(true)

   }

  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="/p2plogo.png"
            alt="p2plogo"
            width={150}
            height={150}
          />
        </a>
        {/* Emial  */}
        {!token && <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-12">
            {showErrorToast && (
              <div
                className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                  No User with this email or Internet Error
                </span>
              </div>
            )}

            {showSuccessChangeToast && (
              <div
                className="p-4  text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Successfully Successfully Changed!</span>
              </div>
            )}
            {showEmailSent && (
              <div
                className="p-4  text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Reset link has beens sent on your mail!</span>
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              
              
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-500"
                disabled={isWaiting===true}
              >
                {!isWaiting&&"Verify"}
                {isWaiting&&"Please Wait..."}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </form>
          </div>
        </div>}

                {/* New Password  */}
        {token && <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-12">
            {showErrorToast && (
              <div
                className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                 Something went wrong
                </span>
              </div>
            )}

            {showSuccessChangeToast && (
              <div
                className="p-4  text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Password Successfully Changed!</span>
              </div>
            )}
          
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handlePassSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  onChange={handlePassChange}
                  type="password"
                  name="newpassword"
                  id="newpassword"
                  value={newPassword}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              
              
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-500"
                disabled={isWaiting===true}
              >
                {!isWaiting&&"Verify"}
                {isWaiting&&"Please Wait..."}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </form>
          </div>
        </div>}
      </div>
      <Footer/>
    </section>
  );
};

export default ForgotPassword;
