export function TextArea({ value, label, onChange }) {
  return (
    <textarea
      rows={6}
      placeholder={label}
      value={value}
      onChange={onChange}
      className="p-5 border relative top-5  border-gray-500 rounded-lg text-center text-xl text-white bg-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
}

export function Button() {
  return (
    <button className="bg-blue-500 h-[50px] w-[200px] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xl">
      إضافة
    </button>
  );
}
