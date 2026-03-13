export default function Select({
  value,
  onChange,
  options = [],
  placeholder = "Select",
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}