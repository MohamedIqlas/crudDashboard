import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { BrandProvider } from './context/BrandContext';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardPage } from './pages/Dashboard';
import { ProductsPage } from './pages/Products';
import { BrandsPage } from './pages/Brands';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <BrandProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardLayout />
                  </PrivateRoute>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="brands" element={<BrandsPage />} />
              </Route>
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </BrandProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;