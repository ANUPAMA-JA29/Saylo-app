import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    console.log("OTP entered:", otp);
    // Normally you'd verify the OTP here
    navigate("/basic-details");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-xl font-semibold mb-6">Enter OTP</h2>

      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full max-w-sm mb-6 px-4 py-2 border border-gray-300 rounded"
      />

      <button
        onClick={handleVerifyOTP}
        className="bg-[#6F3F2A] text-white px-6 py-2 rounded w-full max-w-sm"
      >
        Verify & Continue
      </button>
    </div>
  );
}