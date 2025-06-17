import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneLogin from "./pages/PhoneLogin";
import OTPVerification from "./pages/OTPVerification";
import BasicDetails from "./pages/BasicDetails";
import UploadProfile from "./pages/UploadProfile";
import ProductListPage from "./pages/ProductListPage";  // Your product page
import ProductDetailPage from "./pages/ProductDetailPage";  // New detail page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneLogin />} />
        <Route path="/verify" element={<OTPVerification />} />
        <Route path="/basic-details" element={<BasicDetails />} />
        <Route path="/upload-profile" element={<UploadProfile />} />
        <Route path="/products" element={<ProductListPage />} />           {/* Product Page */}
        <Route path="/product/:productId" element={<ProductDetailPage />} /> {/* Detail Page */}
      </Routes>
    </Router>
  );
}

export default App;