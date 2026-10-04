import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  // कॅटेगरीचा डेटा (अलाईनमेंट फिक्ससह)
  const categories = [
    { id: 1, name: 'उदबत्ती (Udbatti)', image: 'https://unsplash.com' },
    { id: 2, name: 'अगरबत्ती (Agarbatti)', image: 'https://unsplash.com' },
    { id: 3, name: 'धूप (Dhup)', image: 'https://unsplash.com' },
    { id: 4, name: 'अत्तर (Attar)', image: 'https://unsplash.com' },
  ];

  // Best Sellers साठी डमी डेटा (पुढे हा डेटाबेस मधून येईल)
  const bestSellers = [
    { id: 1, name: 'Premium Chandan Agarbatti', price: 150, originalPrice: 200, discount: '25% OFF', rating: 5, image: 'https://unsplash.com' },
    { id: 2, name: 'Royal Mogra Dhoop Sticks', price: 120, originalPrice: 160, discount: '25% OFF', rating: 4, image: 'https://unsplash.com' },
    { id: 3, name: 'Luxury Rose Attar (12ml)', price: 350, originalPrice: 500, discount: '30% OFF', rating: 5, image: 'https://unsplash.com' },
    { id: 4, name: 'Sandalwood Festive Combo', price: 499, originalPrice: 699, discount: '28% OFF', rating: 5, image: 'https://unsplash.com' },
  ];

  return (
    <div className="bg-spiritualCream min-h-screen">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-spiritualMaroon text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://unsplash.com')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 text-center">
          <span className="text-spiritualGold font-medium tracking-widest uppercase text-sm block mb-3">
            Pure & Natural Fragrances ✨
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Experience Divine Fragrances <br />
            <span className="text-spiritualGold font-normal italic text-3xl md:text-5xl">मनाचा आनंद, घराची शुद्धता!</span>
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-200 mb-8 font-light">
            आमच्या १००% चारकोल-मुक्त नैसर्गिक उदबत्ती, अगरबत्ती, धूप आणि प्रिमियम अत्तराने तुमच्या घराला आणि मनाला द्या एक आध्यात्मिक अनुभूती.
          </p>
          <button className="inline-flex items-center gap-2 bg-spiritualGold text-spiritualMaroon font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-white hover:text-spiritualMaroon transition-all duration-300">
            Shop Now (खरेदी करा)
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY (अलाईनमेंट फिक्ससह) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-spiritualMaroon relative inline-block pb-3">
            Shop by Category
            <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-spiritualGold"></span>
          </h3>
          <p className="text-spiritualMaroon/60 text-sm mt-2">तुमच्या आवडीनुसार आमची उत्पादने निवडा</p>
        </div>

        {/* ग्रिड आणि फ्लेक्स अलाईनमेंट सुधारली */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-2xl shadow-sm border border-spiritualGold/10 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-spiritualGold/30 shadow-inner mb-4 flex items-center justify-center bg-gray-50">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-spiritualMaroon">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEST SELLERS SECTION (नवीन प्रॉडक्ट ग्रिड) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-3xl shadow-sm border border-spiritualGold/5 mb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-serif font-bold text-spiritualMaroon relative inline-block pb-3">
            Best Sellers
            <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-spiritualGold"></span>
          </h3>
          <p className="text-spiritualMaroon/60 text-sm mt-2">आमची सर्वात जास्त पसंती मिळवणारी उत्पादने</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-spiritualCream border border-spiritualGold/10 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group">
              {/* Discount Tag */}
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                {product.discount}
              </span>
              
              {/* Product Image */}
              <div className="h-48 w-full rounded-xl overflow-hidden mb-4 bg-white">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Product Info */}
              <div>
                <h4 className="font-semibold text-spiritualMaroon text-base mb-1 line-clamp-1">{product.name}</h4>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-spiritualGold text-spiritualGold" />
                  ))}
                </div>
                
                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-spiritualMaroon">₹{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>
              </div>

              {/* High-Contrast WhatsApp Button */}
              <button 
                onClick={() => {
                  const message = encodeURIComponent(`नमस्कार, मला "${product.name}" हे प्रॉडक्ट ऑर्डर करायचे आहे. कृपया किंमत आणि डिलिव्हरीबद्दल सांगा.`);
                  window.open(`https://wa.me/{message}`, '_blank');
                }}
                className="w-full bg-emerald-600 text-white font-medium py-2.5 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                Buy on WhatsApp 💬
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUE & FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-spiritualMaroon text-white rounded-2xl mb-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <span className="text-3xl block mb-2">🌿</span>
            <h5 className="font-serif font-bold text-spiritualGold text-lg mb-1">100% Charcoal-Free</h5>
            <p className="text-sm text-gray-300">आरोग्यासाठी पूर्णपणे सुरक्षित आणि नैसर्गिक घटकांपासून बनवलेले.</p>
          </div>
          <div className="p-4">
            <span className="text-3xl block mb-2">✨</span>
            <h5 className="font-serif font-bold text-spiritualGold text-lg mb-1">Long-lasting Aroma</h5>
            <p className="text-sm text-gray-300">सुगंध दीर्घकाळ टिकून राहतो आणि घर प्रसन्न ठेवतो.</p>
          </div>
          <div className="p-4">
            <span className="text-3xl block mb-2">💧</span>
            <h5 className="font-serif font-bold text-spiritualGold text-lg mb-1">Natural Essential Oils</h5>
            <p className="text-sm text-gray-300">शुद्ध फुलांच्या आणि नैसर्गिक तेलांच्या अर्कापासून तयार केलेले.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
