import React, { createContext, useContext, useState } from 'react';
import { Brand, BrandFormData } from '../types/brand';

interface BrandContextType {
  brands: Brand[];
  addBrand: (data: BrandFormData) => void;
  updateBrand: (id: string, data: BrandFormData) => void;
  deleteBrand: (id: string) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brands, setBrands] = useState<Brand[]>([]);

  const addBrand = (data: BrandFormData) => {
    const newBrand: Brand = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setBrands((prev) => [...prev, newBrand]);
  };

  const updateBrand = (id: string, data: BrandFormData) => {
    setBrands((prev) =>
      prev.map((brand) =>
        brand.id === id ? { ...brand, ...data, updatedAt: new Date().toISOString() } : brand
      )
    );
  };

  const deleteBrand = (id: string) => {
    setBrands((prev) => prev.filter((brand) => brand.id !== id));
  };

  return (
    <BrandContext.Provider value={{ brands, addBrand, updateBrand, deleteBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export const useBrands = () => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrands must be used within a BrandProvider');
  }
  return context;
};