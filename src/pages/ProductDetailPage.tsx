import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../types/Product";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Used Calculator",
    description: "Casio FX-991ES",
    price: 400,
    imageUrl: "https://via.placeholder.com/300",
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
];

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = mockProducts.find(p => p.id === productId);

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4">&larr; Back</button>
      <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-bold text-green-700 mt-4">₹{product.price}</p>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold">Seller Info</h2>
        <p><strong>Name:</strong> {product.seller.name}</p>
        <p><strong>Year:</strong> {product.seller.year}</p>
        <p><strong>Phone:</strong> {product.seller.phone}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Message Seller</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Buy Now</button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Reviews</h2>
        {product.reviews.map((review, i) => (
          <div key={i} className="border-b py-2">
            <p className="font-medium">{review.user}</p>
            <p className="text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}