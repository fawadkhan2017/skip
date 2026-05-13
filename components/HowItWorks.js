const HowItWorks = () => {
    return (
        <section className="py-24 bg-white" data-name="HowItWorks" data-file="components/HowItWorks.js">
            <div className="container-custom text-center">
                <p className="font-bold text-[15px] mb-3 tracking-wide">Ridiculously easy</p>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
                    Three steps. Zero laundry.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-5xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center mb-6 relative">
                            <i className="icon-wand-sparkles text-4xl text-black"></i>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center font-bold text-lg">1</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Choose A Plan</h3>
                        <p className="text-gray-600 leading-relaxed px-4">
                            Weekly plans built around your lifestyle—no matter how much laundry you have. More time back, every week.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center mb-6 relative bg-[var(--primary)]/10">
                            <i className="icon-map-pin text-4xl text-black"></i>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center font-bold text-lg">2</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Fill Your Bag</h3>
                        <p className="text-gray-600 leading-relaxed px-4">
                            Fill your bag with everyday clothes and towels. First order? Use a kitchen trash bag—we'll return it in your free Skip duffel.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center mb-6 relative">
                            <i className="icon-check text-4xl text-black"></i>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center font-bold text-lg">3</div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Fresh Clothes, Delivered</h3>
                        <p className="text-gray-600 leading-relaxed px-4">
                            Next day, your clothes arrive at your door—fresh, crisply folded, socks paired, and ready to put away.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-10 text-[15px]">
                    <div className="flex items-center text-gray-700"><i className="icon-check text-[var(--primary)] mr-2"></i> Free Next day</div>
                    <div className="flex items-center text-gray-700"><i className="icon-check text-[var(--primary)] mr-2"></i> Free stain treatment</div>
                    <div className="flex items-center text-gray-700"><i className="icon-check text-[var(--primary)] mr-2"></i> Hypoallergenic detergent</div>
                    <div className="flex items-center text-gray-700"><i className="icon-check text-[var(--primary)] mr-2"></i> Free evening delivery</div>
                </div>

                <div className="flex flex-col items-center">
                    <button className="btn-primary mb-3">
                        Get First Skip Free <i className="icon-arrow-right ml-2"></i>
                    </button>
                    <p className="text-gray-500 text-sm">Get your Sundays back</p>
                </div>
            </div>
        </section>
    );
};