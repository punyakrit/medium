
function LabelInput({ label, placeholder, onChange, type }: any) {
    return (
        <div className=" my-4">
          <label className="block mb-2 text-lg font-extrabold text-gray-900">
            {label}
          </label>
          <input
            type={type || "text"}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={placeholder}
            required
            typeof=""
            onChange={onChange}
          />
        </div>
      );
}

export default LabelInput
