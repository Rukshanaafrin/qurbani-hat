export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-3">QurbaniHat</h2>
          <p className="text-sm">
            Buy your Qurbani animals easily and safely. আমরা আপনাদের জন্য
            সেরা পশু সরবরাহ করি।
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p>Email: support@qurbanihat.com</p>
          <p>Phone: 017XXXXXXXX</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">Facebook</a>
            <a href="#" className="hover:text-gray-200">Instagram</a>
            <a href="#" className="hover:text-gray-200">YouTube</a>
          </div>
        </div>

      </div>

      <div className="text-center py-4 bg-green-800 text-sm">
        © 2026 QurbaniHat | All rights reserved
      </div>
    </footer>
  );
}