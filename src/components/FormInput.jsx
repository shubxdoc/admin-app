const FormInput = ({ label, type, placeholder, id, handleInput }) => {
  return (
    <div className="flex flex-col w-full md:w-[48%]">
      <label htmlFor={id} className="w-full mb-2 font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleInput}
        className="p-2 border-b border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormInput;
