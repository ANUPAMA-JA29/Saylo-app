export default function ProductPage() {
    const product = {
      title: "Casio Calculator",
      price: 300,
      description:
        "Lightly used Casio fx-991ES calculator. Perfect for engineering students. Fully functional and in great condition.",
      image: "https://via.placeholder.com/300",
      seller: {
        name: "Rahul Sharma",
        phone: "+91 9876543210",
      },
    };
  
    return (
      <div className="min-h-screen px-4 py-6 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md h-64 object-cover rounded-lg mx-auto mb-6"
        />
  
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-[#6F3F2A] font-semibold mb-4">
            ₹{product.price}
          </p>
  
          <p className="text-gray-700 mb-6">{product.description}</p>
  
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-1">Seller Info:</h3>
            <p className="text-gray-600">{product.seller.name}</p>
            <p className="text-gray-600">{product.seller.phone}</p>
          </div>
  
          <button className="w-full bg-[#6F3F2A] text-white py-2 rounded hover:bg-[#5a3423] transition">
            Contact Seller
          </button>
        </div>
      </div>
    );
  }