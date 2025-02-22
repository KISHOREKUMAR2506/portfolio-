import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kishore Kumar - Portfolio",
  description: "AI & IoT Solutions Architect Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#090909] text-gray-100`}>
        {/* Technical Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-grid opacity-[0.02]" />
          <div className="absolute inset-0 bg-noise opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#090909] opacity-80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Circuit Board Pattern */}
        <div className="fixed inset-0 pointer-events-none z-20">
          <div className="absolute inset-0 circuit-pattern opacity-[0.02]" />
        </div>
      </body>
    </html>
  );
}
