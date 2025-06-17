import { Link } from "react-router-dom";
import { Product } from "../types/Product";

const products: Product[] = [
  {
    id: "1",
    name: "Used Calculator",
    description: "Casio FX-991ES",
    price: 400,
    imageUrl: "https://via.placeholder.com/150",
    seller: {
      name: "Akhil",
      year: "3rd Year",
      phone: "9876543210"
    },
    reviews: [
      { user: "Ravi", comment: "Very helpful!" },
      { user: "Sneha", comment: "Good condition" }
    ]
  }
  // You can add more sample products here
];

export default function ProductListPage() {
  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-green-600 font-bold">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}