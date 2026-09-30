import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx"
import Footer from "../Footer.jsx"
export default function RootLayout() {
  return (<div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
    <Navbar />
    <main className="flex-grow">
    <Outlet />
    </ main>
    <Footer />
  </div>
  )
}