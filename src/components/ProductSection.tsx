import React from 'react';

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  color: string;
}

export default function ProductSection({ id, title, description, price, image, color }: ProductSectionProps) {
  return (
    <section 
      id={id}
      className={`min-h-screen ${color} flex items-center justify-center snap-start`}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-5xl font-bold tracking-tight">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl">{description}</p>
          <p className="text-xl">From {price}</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
          <img 
            src={image} 
            alt={title}
            className="w-full max-w-3xl mt-10 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}