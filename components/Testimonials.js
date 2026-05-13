const Testimonials = () => {
    return (
        <section className="py-24 bg-white" data-name="Testimonials" data-file="components/Testimonials.js">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[13px] font-bold tracking-widest uppercase mb-4">Real Customers. Real Pickups. No Laundry.</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto">
                        See how real customers use our laundry delivery service.
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-3xl font-black text-white leading-tight">
                                I got my<br/><span className="text-[var(--primary)]">Sundays</span><br/>back
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-2xl ml-1"></i>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold flex items-center">
                                <i className="icon-clock text-gray-500 mr-1.5"></i> 1 MIN STORY
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 2 */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-3xl font-black text-white leading-tight">
                                We don't<br/><span className="text-[var(--primary)]">Think</span> about<br/>Laundry anymore
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-2xl ml-1"></i>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold flex items-center">
                                <i className="icon-clock text-gray-500 mr-1.5"></i> 1 MIN STORY
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 3 */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-3xl font-black text-white leading-tight">
                                One less<br/><span className="text-[var(--primary)]">to-do</span><br/>every week
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-2xl ml-1"></i>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold flex items-center">
                                <i className="icon-clock text-gray-500 mr-1.5"></i> 1 MIN STORY
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};