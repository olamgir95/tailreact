import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CaseStudies from "./pages/CaseStudies";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import More from "./pages/More";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
import WhyQubit from "./pages/WhyQubit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/WhyQubit`} element={<WhyQubit />} />
        <Route path="/home" element={<Home />} />
        <Route path={`/Products`} element={<Products />} />
        <Route path={`/Customers`} element={<Customers />} />
        <Route path={`/Solutions`} element={<Solutions />} />
        <Route path={`/CaseStudie`} element={<CaseStudies />} />
        <Route path={`/More`} element={<More />} />
        <Route path={`/Resources`} element={<Resources />} />
        <Route path={`/Login`} element={<Login />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
