"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClothesOpen, setIsClothesOpen] = useState(false);
  const [isShoesOpen, setIsShoesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleClothes = () => setIsClothesOpen(!isClothesOpen);
  const toggleShoes = () => setIsShoesOpen(!isShoesOpen);

  return (
    <header className="bg-header-pink shadow-md">
      <div className="container mx-auto px-2 py-2">
        {/* logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/image/logo (1).svg"
              alt="MB Logo"
              width={80}
              height={80}
            />
            {/*<span className="ml-2 text-2xl font-bold text-pink-600">MB</span>*/}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 ">
            <Link href="/" className="text-gray-700 hover:text-pink-600">
              Home
            </Link>
            <Link href="/all_products" className="text-gray-700 hover:text-pink-600">
              All products
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-pink-600"
                onClick={toggleClothes}
              >
                Clothes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isClothesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/clothes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </Link>
                    <Link
                      href="/clothes/pants"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pants
                    </Link>
                    <Link
                      href="/clothes/t-shirt"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      T-Shirt
                    </Link>
                    <Link
                      href="/clothes/local_brand"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Local Brand
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-pink-600"
                onClick={toggleShoes}
              >
                Shoes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShoesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/shoes/all"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All
                    </Link>
                    <Link
                      href="/shoes/sneakers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sneakers
                    </Link>
                    <Link
                      href="/shoes/boots"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Crocs
                    </Link>
                    <Link
                      href="/shoes/sandals"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Slippers
                    </Link>
                    <Link
                      href="/shoes/sandals"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Slides
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-pink-600">
              Contact us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="text-gray-700 hover:text-pink-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-pink-600">
              <Heart className="h-6 w-6" />
            </button>
            <Link href="/login" className="text-gray-700 hover:text-pink-600">
              Log in
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-pink-600"
            >
              Home
            </Link>
            <Link
              href="/all_products"
              className="block py-2 text-gray-700 hover:text-pink-600"
            >
              All products
            </Link>

            <div>
              <button
                className="flex items-center w-full py-2 text-gray-700 hover:text-pink-600"
                onClick={toggleClothes}
              >
                Clothes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isClothesOpen && (
                <div className="pl-4">
                  <Link
                    href="/clothes"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    All
                  </Link>
                  <Link
                    href="/clothes/pants"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Pants
                  </Link>
                  <Link
                    href="/clothes/t-shirt"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    T-Shirt
                  </Link>
                  <Link
                    href="/clothes/local_brand"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Local Brand
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className=" flex items-center w-full py-2 text-gray-700 hover:text-pink-600"
                onClick={toggleShoes}
              >
                Shoes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShoesOpen && (
                <div className="pl-4">
                  <Link
                    href="/shoes/all"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    All
                  </Link>
                  <Link
                    href="/shoes/sneakers"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Sneakers
                  </Link>
                  <Link
                    href="/shoes/boots"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Crocs
                  </Link>
                  <Link
                    href="/shoes/sandals"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Slippers
                  </Link>
                  <Link
                    href="/shoes/sandals"
                    className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                  >
                    Slides
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-pink-600"
            >
              Contact us
            </Link>

            {/* Search */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Icon */}
              <div className="flex justify-between mt-4">
                <button className="text-gray-700 hover:text-pink-600">
                  <ShoppingCart className="h-6 w-6" />
                </button>
                <button className="text-gray-700 hover:text-pink-600">
                  <Heart className="h-6 w-6" />
                </button>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-pink-600"
                >
                  Log in
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
