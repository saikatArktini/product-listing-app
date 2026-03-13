export default function EmptyState({ message = "No data found" }) {
  return (
    <div className="text-center py-16">
      <h2 className="text-lg font-semibold text-gray-600">
        {message}
      </h2>
    </div>
  );
}