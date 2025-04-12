"use client";
export  function Form () {

  return (
<div className="flex  container w-[100%] justify-center items-center relative top-44 text-white">
<form
     
     className="flex  w-full h-full max-w-md flex-col gap-4 p-4  shadow-md rounded-lg"
   >
     {/* Email Field */}
     <div>
       <label
         htmlFor="email1"
         className="mb-2 block text-sm font-medium text-gray-200"
       >
         Your email
       </label>
       <input
         id="email1"
         name="email"
         type="email"
         placeholder="name@example.com"
         required
         className="w-full rounded-lg border h-[40px] border-gray-200 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
       />
    
     </div>

     {/* Password Field */}
     <div>
       <label
         htmlFor="password1"
         className="mb-2 block text-sm font-medium text-gray-200"
       >
         Your password
       </label>
       <input
         name="password"
         id="password1"
         type="password"
         required
         className="w-full rounded-lg h-[40px] border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
       />

     </div>

     {/* Submit Button */}
     <button
       type="submit"
       className="w-full rounded-lg h-[50px] bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
     >
       Submit
     </button>

  
   </form>
</div>
  );
};

