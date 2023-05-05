"use client";
import Footer from "../components/base/Footer";
import Nav from "../components/base/nav/Nav";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Loading from "../components/landing/hero/Container";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <html lang="en">
      <head />
      <body className="flex flex-col  2xl:containers 2xl:mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Nav />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
