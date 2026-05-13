const Plans = () => {
    const BagIcon = ({ className }) => (
        <svg viewBox="0 0 100 130" className={`drop-shadow-sm ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25 C 10 50, 5 80, 10 120 C 15 130, 85 130, 90 120 C 95 80, 90 50, 75 25 C 70 10, 65 5, 50 5 C 35 5, 30 10, 25 25 Z" fill="#FFD200"/>
            <path d="M25 25 C 40 30, 60 30, 75 25" stroke="#E5BD00" strokeWidth="3" strokeLinecap="round"/>
            <path d="M22 28 C 40 33, 60 33, 78 28" stroke="#E5BD00" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <text x="50" y="70" fill="#ffffff" fontSize="24" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle" transform="rotate(-90 50 70)" opacity="0.95" letterSpacing="1">SKIP</text>
        </svg>
    );

    return (
        <section className="py-24 bg-white border-t border-gray-100" data-name="Plans" data-file="components/Plans.js">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[14px] font-bold tracking-widest uppercase mb-4">PLANS FOR EVERY PILE</p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                        Pick your plan.<br/>Ditch the pile.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The week feels lighter when laundry does itself. Get back your weekends with our laundry service.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Plan 1 */}
                    <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80" alt="1 Bag" className="w-32 h-32 object-cover rounded-xl mb-6 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">The Essentials</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">1 bag (16 lbs). Just enough to get by or light weekly loads.</p>
                        <div className="mt-auto">
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-4xl font-black">$38.99</span>
                                <span className="text-gray-500">/week</span>
                            </div>
                            <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 rounded-full font-bold transition-colors">Start Simple</button>
                        </div>
                    </div>
                    
                    {/* Plan 2 - Most Popular */}
                    <div className="border-2 border-green-500 rounded-3xl p-8 flex flex-col items-center text-center relative shadow-lg transform md:-translate-y-4">
                        <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-xs font-bold py-1.5 tracking-wider flex justify-center items-center gap-2">
                            <i className="icon-sparkles text-[10px]"></i> MOST POPULAR <i className="icon-sparkles text-[10px]"></i>
                        </div>
                        <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80" alt="2 Bags" className="w-40 h-32 object-cover rounded-xl mb-6 mt-4 opacity-90" />
                        <h3 className="text-2xl font-bold mb-2">The Double-Up</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">2 bags (32 lbs). Ideal for couples & gym-goers. Most households choose this.</p>
                        <div className="mt-auto w-full">
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-4xl font-black">$64.99</span>
                                <span className="text-gray-500">/week</span>
                            </div>
                            <button className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-full font-bold transition-colors">Get Your Week Back</button>
                        </div>
                    </div>
                    
                    {/* Plan 3 */}
                    <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-full">
                            TOTAL FREEDOM
                        </div>
                        <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80" alt="3 Bags" className="w-48 h-32 object-cover rounded-xl mb-6 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">The Full House</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10">3 bags (48 lbs). Perfect for large households. Never run out of clean clothes.</p>
                        <div className="mt-auto w-full">
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-4xl font-black">$94.99</span>
                                <span className="text-gray-500">/week</span>
                            </div>
                            <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 rounded-full font-bold transition-colors">Never Think About Laundry</button>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-8">
                    Built for weekly use. Skip anytime when life gets in the way.
                </p>
            </div>
        </section>
    );
};