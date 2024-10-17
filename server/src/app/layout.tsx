import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "WOL Manager"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
