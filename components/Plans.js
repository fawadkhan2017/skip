const Plans = () => {
    const bagImage = "https://app.trickle.so/storage/public/images/usr_1f209b0398000001/ca14b966-e026-413b-a232-65a3dead6bd2.png";

    return (
        <section data-name="Plans" data-file="components/Plans.js" className="py-24 bg-white border-t border-gray-100">
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
                    <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden bg-white">
                        <div className="h-40 mb-6 flex justify-center items-center w-full">
                            <img src={bagImage} alt="1 Bag" className="h-full object-contain drop-shadow-sm" />
                        </div>
                        <h3 className="text-[22px] font-bold mb-2">The Essentials</h3>
                        <p className="text-[13px] text-gray-500 mb-6 h-12 leading-relaxed">1 bag (16 lbs).<br/>Just enough to get by or light weekly loads.</p>
                        <div className="mt-auto w-full">
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-[34px] font-black tracking-tight">$38.99</span>
                                <span className="text-gray-500 text-sm font-semibold">/week</span>
                            </div>
                            <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-[15px] transition-colors">Start Simple</button>
                        </div>
                    </div>
                    
                    {/* Plan 2 - Most Popular */}
                    <div className="border-2 border-green-500 rounded-[24px] text-center relative shadow-lg transform md:-translate-y-4 flex flex-col bg-[#FCFBEB]">
                        <div className="bg-green-500 text-white text-xs font-bold py-2 tracking-wider flex justify-center items-center gap-2 rounded-t-[20px] w-full">
                            <i className="icon-sparkles text-[10px]"></i> MOST POPULAR <i className="icon-sparkles text-[10px]"></i>
                        </div>
                        <div className="p-8 pt-6 flex-1 flex flex-col items-center">
                            <div className="h-40 mb-6 flex justify-center items-center relative w-full">
                                <img src={bagImage} alt="Bag" className="h-full object-contain absolute transform -translate-x-8 drop-shadow-md z-0" />
                                <img src={bagImage} alt="Bag" className="h-full object-contain absolute transform translate-x-8 drop-shadow-md z-10" />
                            </div>
                            <h3 className="text-[22px] font-bold mb-2">The Double-Up</h3>
                            <p className="text-[13px] text-gray-500 mb-6 h-12 leading-relaxed">2 bags (32 lbs).<br/>Ideal for couples & gym-goers. Most households choose this.</p>
                            <div className="mt-auto w-full">
                                <div className="flex items-baseline justify-center gap-1 mb-6">
                                    <span className="text-[34px] font-black tracking-tight">$64.99</span>
                                    <span className="text-gray-500 text-sm font-semibold">/week</span>
                                </div>
                                <button className="w-full py-3.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-full font-bold text-[15px] transition-colors shadow-sm">Get Your Week Back</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Plan 3 */}
                    <div className="border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden bg-white">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-black text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap z-20">
                            TOTAL FREEDOM
                        </div>
                        <div className="h-40 mb-6 mt-4 flex justify-center items-center relative w-full">
                            <img src={bagImage} alt="Bag" className="h-full object-contain absolute transform -translate-x-12 drop-shadow-sm z-0" />
                            <img src={bagImage} alt="Bag" className="h-full object-contain absolute z-10 drop-shadow-md" />
                            <img src={bagImage} alt="Bag" className="h-full object-contain absolute transform translate-x-12 drop-shadow-sm z-0" />
                        </div>
                        <h3 className="text-[22px] font-bold mb-2">The Full House</h3>
                        <p className="text-[13px] text-gray-500 mb-6 h-12 leading-relaxed">3 bags (48 lbs).<br/>Perfect for large households. Never run out of clean clothes.</p>
                        <div className="mt-auto w-full">
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-[34px] font-black tracking-tight">$94.99</span>
                                <span className="text-gray-500 text-sm font-semibold">/week</span>
                            </div>
                            <button className="w-full py-3.5 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-[15px] transition-colors">Never Think About Laundry</button>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-gray-500 text-sm mt-8 font-medium">
                    Built for weekly use. Skip anytime when life gets in the way.
                </p>
            </div>
        </section>
    );
};
