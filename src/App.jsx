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
    <div className=" max-[1560px]:">
      <Navbar />
      <Routes>
        <Route path={`/whyqubit`} element={<WhyQubit />} />
        <Route path="/home" element={<Home />} />
        <Route path={`/products`} element={<Products />} />
        <Route path={`/customers`} element={<Customers />} />
        <Route path={`/solutions`} element={<Solutions />} />
        <Route path={`/caseStudie`} element={<CaseStudies />} />
        <Route path={`/more`} element={<More />} />
        <Route path={`/resources`} element={<Resources />} />
        <Route path={`/login`} element={<Login />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
