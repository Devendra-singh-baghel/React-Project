import React from 'react'

function About() {
  return (
    <div className="bg-white text-gray-800 p-8 md:p-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
        Welcome to <span className='text-gray-600 font-bold'>Wander</span>
        <span className='text-red-700 font-bold'>Wise</span> – your trusted travel partner. From booking flights to discovering unforgettable destinations, we help make every journey seamless and memorable.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🌟 Who We Are</h2>
          <p className="text-gray-700">
            Founded by passionate explorers, WanderWise is a travel platform designed to make planning easier, faster, and more exciting. We believe in the power of travel to connect, inspire, and rejuvenate.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">✈️ What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Flight & Hotel Bookings</li>
            <li>Custom Holiday Packages</li>
            <li>Travel Itinerary Planning</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💡 Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Best Price Guarantee</li>
            <li>User-Friendly Experience</li>
            <li>Verified Reviews</li>
            <li>Secure & Private Bookings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🌐 Our Mission</h2>
          <p className="text-gray-700">
            Our goal is to empower travelers to explore the world confidently and effortlessly. We’re here to support every journey – from weekend getaways to bucket-list adventures.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium mb-2">Ready to Explore?</h3>
        <p className="text-gray-700">
          Start your journey with <span className='text-gray-600 font-bold'>Wander</span>
          <span className='text-red-700 font-bold'>Wise</span> – Where Every Trip Begins With a Click!
        </p>
      </div>
    </div>
  );
}

export default About
