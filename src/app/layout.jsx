import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Farhan - Portfolio",
  description: "Personal Portfolio of Muhammad Farhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>

        {/* Ionicons Scripts */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}
