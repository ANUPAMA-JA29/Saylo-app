export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    seller: {
      name: string;
      year: string;
      phone: string;
    };
    reviews: {
      user: string;
      comment: string;
    }[];
  }