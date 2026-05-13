const Guarantee = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="flex justify-center text-[var(--primary)] text-2xl mb-8 space-x-2">
                    <i className="icon-star fill-current"></i>
                    <i className="icon-star fill-current"></i>
                    <i className="icon-star fill-current"></i>
                    <i className="icon-star fill-current"></i>
                    <i className="icon-star fill-current"></i>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
                    The Skip Fresh & Ready-to-put Away Guarantee
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                    Every order arrives at your doorstep neatly folded & ready to put away. If your clothes is not fresh, we'll re-wash them—free. No questions asked.
                </p>

                <div className="flex flex-col items-center space-y-4 text-left max-w-lg mx-auto">
                    <div className="flex items-center w-full">
                        <i className="icon-circle-check text-2xl text-white mr-4"></i>
                        <span className="text-xl font-medium">24-hour turnaround</span>
                    </div>
                    <div className="flex items-center w-full">
                        <i className="icon-circle-check text-2xl text-white mr-4"></i>
                        <span className="text-xl font-medium">Free re-wash if anything isn't right</span>
                    </div>
                    <div className="flex items-center w-full">
                        <i className="icon-circle-check text-2xl text-white mr-4"></i>
                        <span className="text-xl font-medium">Pocket checks to avoid damages</span>
                    </div>
                    <div className="flex items-center w-full">
                        <i className="icon-circle-check text-2xl text-white mr-4"></i>
                        <span className="text-xl font-medium">Allergen-free, premium detergents</span>
                    </div>
                </div>
            </div>
        </section>
    );
};