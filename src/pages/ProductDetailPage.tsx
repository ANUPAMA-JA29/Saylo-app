import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Roller Scale",
    price: 25,
    description:
      "A specialized type of ruler that has a cylindrical design, allowing it to 'roll' across a surface while drawing parallel lines, circles, angles, and other geometric shapes with ease.",
    image: "https://i.imgur.com/2YQlZsE.png",
  },
  {
    id: 2,
    name: "Used Calculator",
    price: 400,
    description: "Scientific calculator perfect for exams",
    image: "https://i.imgur.com/MaWyUeu.png",
  },
  {
    id: 3,
    name: "Drawing Tools Set",
    price: 150,
    description: "Contains compass, divider, protractor…",
    image: "https://i.imgur.com/gzI9X3K.png",
  },
  {
    id: 4,
    name: "A4 Notes Bundle",
    price: 120,
    description: "Handwritten A4 notes for semester 1–3",
    image: "https://i.imgur.com/dtv94C0.png",
  },
  {
    id: 5,
    name: "Lab Coat",
    price: 200,
    description: "White lab coat for engineering labs",
    image: "https://i.imgur.com/pkBr2XM.png",
  },
  {
    id: 6,
    name: "Used Graph Book",
    price: 40,
    description: "Barely used – perfect for new semester",
    image: "https://i.imgur.com/m1yt3iY.png",
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return <p className="text-center mt-10 text-red-600">Product not found.</p>;

  return (
    <div className="min-h-screen bg-[#fdf5ef] px-4 py-6">
      <h2 className="text-center text-lg font-semibold text-[#6F3F2A] mb-4">
        {product.name}
      </h2>

      <div className="flex items-center justify-center gap-2 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-auto object-contain"
        />
      </div>

      <p className="text-center text-sm mb-2 text-gray-800">
        Sold by{" "}
        <span className="text-[#6F3F2A] font-medium">Seller Profile</span>
      </p>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-yellow-500 text-sm">★★★★☆</p>
      </div>

      <p className="text-sm text-gray-700 mt-2 text-center">
        {product.description}
      </p>

      <hr className="my-6" />

      <div className="text-center">
        <button
          onClick={() => alert("Buy action goes here")}
          className="bg-[#6F3F2A] text-white font-semibold px-8 py-2 rounded"
        >
          Buy Now!
        </button>
      </div>
    </div>
  );
}
