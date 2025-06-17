import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    console.log("Phone Number entered:", phone);
    // Normally you'd trigger OTP sending here
    navigate("/verify");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-xl font-semibold mb-6">Enter your Phone Number</h2>

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full max-w-sm mb-6 px-4 py-2 border border-gray-300 rounded"
      />

      <button
        onClick={handleSendOTP}
        className="bg-[#6F3F2A] text-white px-6 py-2 rounded w-full max-w-sm"
      >
        Send OTP
      </button>
    </div>
  );
}