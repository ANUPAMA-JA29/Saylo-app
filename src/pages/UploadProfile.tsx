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
    console.log("Profile image:", imagePreview);
    // Save image to context/storage here if needed
    navigate("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h2 className="text-xl font-semibold mb-6">Upload your Profile Photo</h2>

      <div className="relative mb-6">
        <div
          className="w-32 h-32 rounded-full border-4 border-[#6F3F2A] overflow-hidden bg-gray-100 cursor-pointer flex items-center justify-center"
          onClick={handleUploadClick}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-500 text-sm">Choose Image</span>
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

      <button
        onClick={handleContinue}
        className="bg-[#6F3F2A] text-white px-6 py-2 rounded w-full max-w-sm"
      >
        Continue
      </button>
    </div>
  );
}