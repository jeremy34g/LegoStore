import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrickShop - Premium LEGO Retailer",
  description: "Your premier destination for exclusive LEGO sets, rare finds, and collector's items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
