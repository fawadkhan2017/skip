const Hero = () => {
    return (
        <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 bg-[#1A1A1A] overflow-hidden flex items-center min-h-[600px]">
            {/* Background Image - Using a placeholder pattern that matches the vibe since we can't use the exact image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80" 
                    alt="Happy customer with laundry"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container-custom relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center border border-white/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm bg-black/20">
                    <div className="flex text-[var(--primary)] text-sm mr-2">
                        <i className="icon-star fill-current"></i>
                        <i className="icon-star fill-current"></i>
                        <i className="icon-star fill-current"></i>
                        <i className="icon-star fill-current"></i>
                        <i className="icon-star fill-current"></i>
                    </div>
                    <span className="text-white text-sm font-medium">Weekly Laundry Service You'll Love</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] max-w-4xl tracking-tight">
                    Make Laundry<br />Someone Else's<br />Problem.
                </h1>

                <p className="text-lg md:text-[21px] text-gray-200 mb-10 max-w-2xl font-medium leading-relaxed">
                    You're not behind. You're just too busy to fold laundry.
                    Leave the bag out—we pick it up, wash it, fold it, and 
                    bring it back the next day. Every week. Plans from $38.99
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="btn-primary w-full sm:w-auto">
                        Get First Skip Free <i className="icon-arrow-right ml-2"></i>
                    </button>
                    <button className="flex items-center text-white font-bold px-6 py-4 hover:text-gray-300 transition-colors">
                        <i className="icon-circle-play mr-2 text-2xl"></i> See How It Works
                    </button>
                </div>
                
                <p className="text-white/60 text-xs mt-4">Cancel anytime. No commitments.</p>
            </div>
        </section>
    );
};