"use client";

import { useState } from "react";
import { TextArea, Button } from "./InputField";
import { TableQ } from "./TableQ";

export default function Page() {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  return (
    <div
      dir="rtl"
      className="min-h-screen relative md:right-24  right-12 lg:right-62 container w-[70%] top-24 py-12 px-6 flex justify-center"
    >
      <div className="w-full max-w-6xl space-y-8">
        {/* العنوان */}
        <h1 className="text-4xl relative bottom-5 font-bold text-white text-right">
          إدارة الأسئلة الشائعة
        </h1>
        {/* هنا حقول اضافة السؤال  والجواب */}
        <div className="bg-gray-700 h-[200px] rounded-lg shadow-md p-8 border border-gray-600 space-y-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <TextArea
              label={"السؤال"}
              onChange={(e) => setNewQuestion(e.target.value)}
              value={newQuestion}
            />
            <TextArea
              label={"الجواب"}
              onChange={(e) => setNewAnswer(e.target.value)}
              value={newAnswer}
            />
          </div>
          <div className="text-center relative top-12">
            {/* زر الاضافه */}
            <Button />
          </div>
        </div>

        {/* جدول الأسئلة */}
        <TableQ />
      </div>
    </div>
  );
}
