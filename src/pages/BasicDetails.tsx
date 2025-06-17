import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicDetails() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    console.log({ fullName, email, admissionNumber });
    // You could save this in context or localStorage
    navigate("/upload-profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-xl font-semibold mb-6">Enter Your Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full max-w-sm mb-4 px-4 py-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-sm mb-4 px-4 py-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Admission Number"
        value={admissionNumber}
        onChange={(e) => setAdmissionNumber(e.target.value)}
        className="w-full max-w-sm mb-6 px-4 py-2 border border-gray-300 rounded"
      />

      <button
        onClick={handleNext}
        className="bg-[#6F3F2A] text-white px-6 py-2 rounded w-full max-w-sm"
      >
        Next
      </button>
    </div>
  );
}