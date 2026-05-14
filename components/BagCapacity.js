const BagCapacity = () => {
    return (
        <section className="relative py-32 bg-gray-900 flex items-center justify-center min-h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_1f209b0398000001/9eb86147-ecec-401a-9c09-96d43319c2c6.png" 
                    alt="Laundry bags"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
                <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">
                    What fits inside your bag.
                </h2>
                <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                    Each black wash & fold duffel bag in your plan includes up to 16 lbs of laundry. Here's what that typically looks like.
                </p>
                
                <button className="w-24 h-24 bg-[var(--primary)] hover:bg-[var(--primary-hover)] rounded-full flex items-center justify-center text-black mx-auto transition-transform hover:scale-105 shadow-xl group cursor-pointer">
                    <i className="icon-play text-4xl ml-2 group-hover:text-black"></i>
                </button>
            </div>
        </section>
    );
};