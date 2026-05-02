import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext"; // 👈 add

export const metadata = {
  title: "Qurbani Hat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body className="flex flex-col min-h-screen">

        <AuthProvider> {/* 👈 wrap start */}

          <Navbar />

          <main className="flex-grow px-4">
            {children}
          </main>

          <Footer />

          <Toaster position="top-center" />

        </AuthProvider> {/* 👈 wrap end */}

      </body>
    </html>
  );
}