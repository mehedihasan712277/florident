import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

// Load the Poppins and Dancing Script fonts
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-poppins',
});

const dancingScript = Dancing_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: "Florident",
  description: "Built by Md. Mehedi Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} ${dancingScript.variable} antialiased`}>
        <div className="max-w-[1550px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
