import Button from "@/app/components/inputs/Button";
import { Inputs } from "./Inputs";

export default function Page() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50   backdrop-blur-3xl">
      <div className="bg-white backdrop-blur-3xl  h-[400px] rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <form className="relative grid top-12 grid-cols-1 md:grid-cols-2 gap-4">
          {/* Inputs */}
          <Inputs label="ادخل الايميل" type="email" name="email" />
          <Inputs label="ادخل الاسم" type="text" name="name" />
          <Inputs label="ادخل رقم الهاتف" type="tel" name="phone" />
          <Inputs label="ادخل العنوان" type="text" name="adress" />
          <Inputs label="ادخل كلمة السر" type="password" name="password" />

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center items-center mt-4">
            <Button label="ارسل البيانات" />
          </div>
        </form>
      </div>
    </div>
  );
}
