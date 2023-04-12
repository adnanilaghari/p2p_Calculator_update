import React,{useState} from 'react'
import AdminLayout from '../Layout/AdminLayout';
import Footer from '@/components/Footer';


const CreateAdmin = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" ,confirmpass:""});
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showPasswordErr, setShowPasswordErr] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
  
    const handleChange = (e) => {
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
      setShowErrorToast(false);
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsWaiting(true)
      setShowErrorToast(false);
      setShowPasswordErr(false)
      setShowSuccessToast(false);

      if(loginForm.password!==loginForm.confirmpass){
        setShowPasswordErr(true)
        setIsWaiting(false)
        return;
      }

      let res = await fetch(`${process.env.NEXT_PUBLIC_DOMAINNAME}/api/createUser`, {
        method: "POST",
        body: JSON.stringify(loginForm),
      });
      let response = await res.json();
      if (response.success || res.status === 200) {
        setShowSuccessToast(true);
        setLoginForm({ email: "", password: "" ,confirmpass:"" })
        setIsWaiting(false)
      } else {
        setShowErrorToast(true);
        setIsWaiting(false)
      }
    };
  return (
    <AdminLayout>
          <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="h-12">
            {showErrorToast && (
              <div
                className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                  User Exists or Internet Error
                </span>
              </div>
            )}
            {showPasswordErr && (
              <div
                className="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">
                  Password Should Be Same
                </span>
              </div>
            )}

            {showSuccessToast && (
              <div
                className="p-4  text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Successfully Created!</span>
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={loginForm.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  value={loginForm.password}
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="confirmpass"
                  id="confirmpass"
                  value={loginForm.confirmpass}
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-500"
                disabled={isWaiting===true}
              >
                {!isWaiting&&"Create"}
                {isWaiting&&"Please Wait..."}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    </AdminLayout>
  )
}

export default CreateAdmin;
