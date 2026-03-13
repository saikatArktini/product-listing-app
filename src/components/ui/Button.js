export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}