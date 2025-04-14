import Button from "@/app/components/inputs/Button";
import InputField from "../form/InputField";

export default function Page() {
  return (
    <div className=" h-[100vh] flex justify-center items-center bg-[#0A1B3D] w-[100vw] ">
      <form className="max-w-4xl mx-auto p-6 md:p-10 bg-[#]  shadow-xl rounded-2xl relative top-12 ">
        <h2 className="text-2xl relative bottom-4 font-bold text-gray-200  mb-8 text-center">
          بيانات الموظف
        </h2>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <InputField
            lable={"اسم الموظف"}
            type={"text"}
            placeholder={"ادخل اسم الموظف"}
            id={"emp_name"}
          />
          <InputField
            lable={"الايميل  "}
            type={"email"}
            placeholder={"ادخل ايميل الموظف"}
            id={"emp_email"}
          />
          <InputField
            lable={"رقم الهاتف "}
            type={"text"}
            placeholder={"ادخل رقم الهاتف "}
            id={"emp_num"}
          />
        </div>
          <InputField
            lable={"عنوان الموظف"}
            type={"text"}
            placeholder={"ادخل عنوان الموظف"}
            id={"adress"}
          />
          <InputField
            lable={"كلمة المرور"}
            type={"password"}
            placeholder={"ادخل كلمة المرور"}
            id={"emp_pass"}
          />
          <InputField
            lable={"كلمة المرور"}
            type={"password"}
            placeholder={"ادخل كلمة المرور"}
            id={"emp_pass"}
          />

      <Button label={'اضافة موظف'}/>
      </form>
    </div>
  );
}

// يمكنك إضافة هذا في ملف CSS/Tailwind لتنسيق الحقول بشكل موحّد
// أو تضيفه كـ className="input-style" كما هو في الأعلى
