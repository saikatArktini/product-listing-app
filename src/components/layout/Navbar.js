export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Title */}
        <h1 className="text-xl font-semibold text-gray-800">
          Product Dashboard
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-gray-600">
          <a href="/" className="hover:text-black transition">
            Home
          </a>

          <a href="/products" className="hover:text-black transition">
            Products
          </a>
        </div>

      </div>
    </nav>
  );
}