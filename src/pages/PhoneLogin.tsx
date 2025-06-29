import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneEntry() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    console.log("Sending OTP to:", phone);
    // Navigate to OTP verification
    navigate("/otp-verification");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf5ef] px-4">
      {/* Welcome Text */}
      <div className="text-center mb-12">
        <p className="text-base text-gray-600 mb-1">Welcome to</p>
        <h1 className="text-5xl font-bold text-black">Saylo</h1>
      </div>

      {/* Input + Button Box */}
      <div className="bg-white p-6 w-full max-w-md rounded-xl shadow">
        <input
          type="tel"
          placeholder="Phone Number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#f3f3f3] text-black placeholder-gray-500 rounded-md focus:outline-none"
        />

        <button
          onClick={handleSendOTP}
          className="w-full bg-[#875C29] text-white text-base font-medium py-3 rounded-md hover:bg-[#704b21] transition"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
}
