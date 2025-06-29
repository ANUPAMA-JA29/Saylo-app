import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(80);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // allow only digits
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // auto-focus next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerifyOTP = () => {
    console.log("Entered OTP:", otp.join(""));
    navigate("/basic-details");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf5ef] px-4">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold text-black mb-2">OTP Verification</h2>
        <p className="text-sm text-black">
          OTP has been sent to <span className="font-semibold">+91**53</span>
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        {/* OTP Input Boxes */}
        <div className="flex justify-between gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-xl bg-[#f3f3f3] rounded-md outline-none"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-black mb-6">{timer} seconds left</p>

        {/* Verify OTP Button */}
        <button
          onClick={handleVerifyOTP}
          className="w-full bg-[#875C29] text-white text-base font-medium py-3 rounded-md hover:bg-[#704b21] transition mb-4"
        >
          Verify OTP
        </button>

        {/* Resend OTP Button */}
        <button
          disabled={timer > 0}
          onClick={() => setTimer(80)}
          className="w-full border border-[#875C29] text-[#875C29] text-base font-medium py-3 rounded-md hover:bg-[#f9f4f1] transition"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
