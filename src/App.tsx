import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneLogin from "./pages/PhoneLogin";
import OTPVerification from "./pages/OTPVerification";
import UploadProfile from "./pages/UploadProfile";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import BasicDetails from "./pages/BasicDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneLogin />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/upload-profile" element={<UploadProfile />} />
        <Route path="/basic-details" element={<BasicDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}
