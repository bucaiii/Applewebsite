import React from 'react';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

const products = [
  {
    id: 'iphone',
    title: 'iPhone 15 Pro',
    description: 'Titanium. So strong. So light. So Pro.',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?auto=format&fit=crop&q=80',
    color: 'bg-gray-100'
  },
  {
    id: 'ipad',
    title: 'iPad Pro',
    description: 'Supercharged by M2 chip.',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80',
    color: 'bg-white'
  },
  {
    id: 'mac',
    title: 'MacBook Pro',
    description: 'Mind-blowing. Head-turning.',
    price: '$1999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80',
    color: 'bg-gray-50'
  },
  {
    id: 'watch',
    title: 'Apple Watch Series 9',
    description: 'Smarter. Brighter. Mightier.',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80',
    color: 'bg-white'
  }
];

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-12 snap-y snap-mandatory h-screen overflow-y-auto">
        {products.map((product) => (
          <ProductSection key={product.id} {...product} />
        ))}
      </main>
    </div>
  );
}

export default App;