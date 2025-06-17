const products = [
    {
      id: 1,
      title: "Casio Calculator",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Engineering Drawing Board",
      price: 450,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Used Laptop",
      price: 25000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Backpack",
      price: 900,
      image: "https://via.placeholder.com/150",
    },
  ];
  
  export default function Home() {
    return (
      <div className="min-h-screen bg-white px-4 py-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#6F3F2A]">
          Explore Listings
        </h1>
  
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium truncate">{product.title}</h3>
                <p className="text-[#6F3F2A] font-semibold">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }