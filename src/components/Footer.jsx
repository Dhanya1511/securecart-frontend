import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold">
                SC
              </div>
              <span className="font-bold text-white">SecureCart</span>
            </div>
            <p className="text-sm text-gray-400">
              Shop with confidence. Every review and transaction is continuously analyzed for suspicious activity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Orders</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@securecart.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91-800-SECURE
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 SecureCart. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
