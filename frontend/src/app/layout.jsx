import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-serif-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "OWASP URL Vulnerability Scanner",
  description: "Scan any URL and detect common OWASP vulnerabilities in headers and page content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-gray-900 bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
