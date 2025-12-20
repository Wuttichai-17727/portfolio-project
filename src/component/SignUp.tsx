// import React from 'react'

const SignUp = () => {
  return (
    <>
      <form className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3
            className="mt-10 text-center text-2xl/9 text-[#008ECC] tracking-tight font-bold text-[32px] justify-center flex"
          >Register</h3>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          {/* Firstname */}
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Firstname
              </label>
           <div className="mt-2">
                <input
                  id="Firstname"
                  name="Firstname"
                  type="text"
                  required
                  autoComplete="Firstname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
              {/* Surname */}
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Surname
              </label>
           <div className="mt-2">
                <input
                  id="Surname"
                  name="Surname"
                  type="text"
                  required
                  autoComplete="Surname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
          {/* select birthday */}
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                select birthday
              </label>
           <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
          {/* Email */}
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Email address
              </label>
           <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
              {/* Password */}
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Password
              </label>
           <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
              <div>
                <button
                type="submit"
                className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                SignUp
              </button>
              </div>
        </div>
      </form>
      
    </>
  );
};

export default SignUp;
