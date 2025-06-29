import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Roller Scale",
    price: 25,
    description: "a specialized type of ruler that has a cylindrical design...",
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

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate("/product/${id}");
  };

  return (
    <div className="min-h-screen bg-[#fdf5ef] px-4 py-6">
      <h1 className="text-center text-xl font-semibold text-[#6F3F2A] mb-6">
        Home
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 shadow-md text-center cursor-pointer hover:shadow-lg transition"
            onClick={() => handleClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-contain mb-2"
            />
            <h2 className="font-semibold text-sm text-black">{product.name}</h2>
            <p className="text-xs text-gray-600 truncate">
              {product.description}
            </p>
            <p className="text-[#6F3F2A] font-bold mt-1 text-sm">
              Rs. {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
