import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadProfile() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = () => {
    console.log("Profile image uploaded:", imagePreview);
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf5ef] px-4">
      <h2 className="text-xl font-bold text-black mb-6">Upload Profile</h2>

      <div className="relative mb-4">
        <div
          className="w-36 h-36 rounded-full bg-white border-4 border-[#6F3F2A] flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={handleUploadClick}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#6F3F2A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM4 19a8 8 0 1116 0H4z"
              />
              <circle cx="18" cy="18" r="2" fill="#6F3F2A" />
              <path d="M18 16v4M16 18h4" stroke="#fdf5ef" strokeWidth={2} />
            </svg>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>

      <p className="text-center text-sm mb-6 text-black">
        Upload a photo where your <br />
        <span className="font-semibold">face is clearly visible</span>
      </p>

      <button
        onClick={handleContinue}
        className="bg-[#6F3F2A] text-white px-6 py-2 rounded w-full max-w-sm"
      >
        Upload Photo
      </button>
    </div>
  );
}
