import Navbar from "@/components/widgets/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="p-6 sm:p-8 md:p-10">
        {children}
      </main>
    </>
  );
}

export default layout;