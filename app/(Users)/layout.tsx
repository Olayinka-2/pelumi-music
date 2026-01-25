import type { Metadata } from "next";
import Header from "./component/header";
import Footer from "./component/footer";

export const metadata: Metadata = {
  title: "Child of YHWH",
  description: "Spirit-filled gospel music platform",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {<Header />}
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
