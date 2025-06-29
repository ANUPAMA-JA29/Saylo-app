import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicDetails() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    console.log({ fullName, email, admissionNumber });
    navigate("/upload-profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf5ef] px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 md:p-8">
        <h2 className="text-center text-xl font-bold text-black mb-8">
          Enter your Basic Details
        </h2>
  
        <div className="space-y-6">
          <div>
            <label className="block text-base font-semibold text-black mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Input Value.."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-[#f1f1f1] text-black placeholder-gray-500 rounded-md focus:outline-none"
            />
          </div>
  
          <div>
            <label className="block text-base font-semibold text-black mb-2">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Input Value.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#f1f1f1] text-black placeholder-gray-500 rounded-md focus:outline-none"
            />
          </div>
  
          <div>
            <label className="block text-base font-semibold text-black mb-2">
              Admission Number
            </label>
            <input
              type="text"
              placeholder="Input Value.."
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              className="w-full px-4 py-3 bg-[#f1f1f1] text-black placeholder-gray-500 rounded-md focus:outline-none"
            />
          </div>
        </div>
  
        <button
          onClick={handleNext}
          className="mt-8 bg-[#875C29] text-white text-base font-medium py-3 w-full rounded-md hover:bg-[#704b21] transition"
        >
          Next
        </button>
      </div>
    </div>
  );}