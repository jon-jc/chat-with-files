import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900 border-gray-200 py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
        <nav className="flex flex-col gap-2 md:flex-row md:ml-auto md:gap-4 lg:gap-6">
          <Link
            className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Contact Us
          </Link>
          <Link
            className="text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Privacy Policy
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
          <Link
            className="inline-block text-xl font-bold text-gray-500 dark:text-gray-400"
            href="#"
          >
            FileMagic AI
          </Link>
          <p className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
            Copyright © 2023 FileMagic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
