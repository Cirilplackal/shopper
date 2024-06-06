import React from "react";
import RouteController from "./routers";
import Header from "./components/header";
import Navbar from "./components/navbar/Navbar";
export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <RouteController />
    </div>
  );
}
