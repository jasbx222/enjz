"use client";
import React, { useActionState } from "react";
import Input from "./Input/Input";
import { loginAuth } from "./Input/loginAuth";

const Page = () => {
  const [state, action, isPending] = useActionState(loginAuth, undefined);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-indigo-900">
            تسجيل الدخول
          </h2>
          <p className="text-gray-600 mt-2">أدخل بياناتك للمتابعة</p>
        </div>

        <form action={action}>
          <Input
            label={"ادخل الايميل الخاص بك"}
            placeholder={"email"}
            name={"email"}
            id={"1"}
            type={"email"}
          />

          <Input
            label={"ادخل الباسورد"}
            placeholder={"password"}
            id={"1"}
            name={"password"}
            type={"paswword"}
          />

          <button
            type="submit"
            className="w-full py-3 relative top-5 bg-indigo-700 h-[40px] hover:bg-indigo-800 text-white font-bold rounded-lg shadow-md transition duration-200"
          >
            {isPending ? "جاري الارسال..." : "       تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
