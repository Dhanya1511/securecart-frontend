import React from 'react';
import { ShoppingCart, User, Home, LogOut, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../hooks';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();
  const cartQuantity = getTotalQuantity();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
              SC
            </div>
            <span className="font-bold text-lg text-gray-800 hidden sm:inline">
              SecureCart
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              <Home size={20} className="inline mr-1" /> Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition">
              Products
            </Link>
            {user && (
              <>
                <Link to="/orders" className="text-gray-700 hover:text-blue-600 transition">
                  Orders
                </Link>
              </>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Security Badge */}
            <div className="hidden lg:flex items-center gap-1 text-xs bg-green-50 px-3 py-1 rounded-full border border-green-200">
              <Lock size={14} className="text-green-600" />
              <span className="text-green-700 font-medium">Protected</span>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart size={24} />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </Link>

            {/* User Profile / Login */}
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-blue-600"
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
              >
                <User size={18} /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
