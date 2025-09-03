import React from 'react';

export default function AnimatedForm() {
  return (
    <div className="p-4 sm:p-8 animated-form-container ">
      <div className="animated-form">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-8">We'd love to hear from you. Plan your next adventure with us!</p>
        <form action="" className="flex flex-col gap-6 w-[400px] mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}