import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
export function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100">{children}</div>
      <Toaster />
    </>
  );
};

