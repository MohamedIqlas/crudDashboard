export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  brandId: string;
  status: 'active' | 'inactive';
  stock: number;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  brandId: string;
  status: 'active' | 'inactive';
  stock: number;
}