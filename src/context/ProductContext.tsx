import React, { createContext, useContext, useState } from 'react';
import { Product, ProductFormData } from '../types/product';

interface ProductContextType {
  products: Product[];
  addProduct: (data: ProductFormData) => void;
  updateProduct: (id: string, data: ProductFormData) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (data: ProductFormData) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...data,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (id: string, data: ProductFormData) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...data, updatedAt: new Date().toISOString() } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};