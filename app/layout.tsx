import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Transnational Law Academy",
  description: "Shaping the global legal landscape through innovative education, research, and collaboration.",
};

const RootLayout: React.FC<{ children: Readonly<React.ReactNode>; }> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className="h-full flex flex-col justify-between">
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;