const Testimonials = () => {
    return (
        <section className="py-12 md:py-16 bg-white" data-name="Testimonials" data-file="components/Testimonials.js">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[13px] font-bold tracking-widest uppercase mb-4">Real Customers. Real Pickups. No Laundry.</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl mx-auto">
                        See how real customers use our laundry delivery service.
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Testimonial 1 */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://app.trickle.so/storage/public/images/usr_1f209b0398000001/3dd4c1f8-4b03-45aa-963a-a5b82386917b.png" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-2xl font-black text-white leading-tight">
                                I got my<br/><span className="text-[var(--primary)]">Sundays</span><br/>back
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-xl ml-1"></i>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold flex items-center">
                                <i className="icon-clock text-gray-500 mr-1.5"></i> 1 MIN STORY
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 2 (Couple in middle) */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://app.trickle.so/storage/public/images/usr_1f209b0398000001/731f22fb-4a24-4bd7-9f6b-af55376ecc36.png" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-2xl font-black text-white leading-tight">
                                We don't<br/><span className="text-[var(--primary)]">Think</span> about<br/>Laundry anymore
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-xl ml-1"></i>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold flex items-center">
                                <i className="icon-clock text-gray-500 mr-1.5"></i> 1 MIN STORY
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 3 */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 group cursor-pointer">
                        <img src="https://app.trickle.so/storage/public/images/usr_1f209b0398000001/16e35b76-b9c0-4323-a0dc-1c0908d80738.webp" alt="Customer" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute top-6 left-6 right-6">
                            <h3 className="text-2xl font-black text-white leading-tight">
                                One less<br/><span className="text-[var(--primary)]">to-do</span><br/>every week
                            </h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-black shadow-lg transform group-hover:scale-110 transition-transform">
                                <i className="icon-play text-xl ml-1"></i>
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