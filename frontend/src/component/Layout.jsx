import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // pehle se bana hua
import Footer from "./Footer"; // pehle se bana hua

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
