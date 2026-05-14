const Hero = () => {
    return (
        <section className="relative pt-[180px] pb-16 md:pt-[200px] md:pb-20 bg-black overflow-hidden flex items-center min-h-[55vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_1f209b0398000001/f85f551e-6e77-4651-90c6-c21bbdeaf729.jpeg" 
                    alt="Happy customer with laundry"
                    className="w-full h-full object-cover object-top"
                />
                {/* Dark overlay without mix-blend to keep colors true but text readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
            </div>

            <div className="container-custom relative z-10 text-center flex flex-col items-center -translate-y-[130px]">
                {/* Rating Badge */}
                <div className="inline-flex items-center border border-white/30 rounded-full px-5 py-1.5 mb-8 backdrop-blur-sm bg-black/20">
                    <div className="flex text-[var(--primary)] text-lg mr-3 space-x-1 tracking-widest">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <span className="text-white text-sm font-medium">Weekly Laundry Service You'll Love</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-[84px] font-black text-white mb-6 leading-[1.05] max-w-5xl tracking-tight">
                    Make Laundry<br />Someone Else's<br />Problem.
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-[22px] text-gray-100 mb-10 max-w-3xl font-medium leading-relaxed">
                    You're not behind. You're just too busy to fold laundry.<br className="hidden md:block" />
                    Leave the bag out—we pick it up, wash it, fold it, and<br className="hidden md:block" />
                    bring it back the next day. Every week. Plans from $38.99
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="btn-primary w-full sm:w-auto px-8 py-4 text-[17px]">
                        Get First Skip Free <i className="icon-arrow-right ml-2 text-xl"></i>
                    </button>
                    <button className="w-full sm:w-auto inline-flex items-center justify-center border border-white text-white font-semibold px-8 py-4 rounded-full text-[17px] hover:bg-white/10 transition-colors">
                        See How It Works
                    </button>
                </div>
                
                {/* Footer Text */}
                <p className="text-white/80 text-[13px] mt-5 font-medium tracking-wide">
                    Cancel anytime. No commitments.
                </p>
            </div>
        </section>
    );
};