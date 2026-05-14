const BottomCTA = () => {
    return (
        <section className="py-[50px] bg-[var(--primary)] text-center text-black">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                    Ready to get started with<br/>laundry delivery service?
                </h2>
                <p className="text-xl font-bold mb-2">
                    Plans for every lifestyle. Cancel anytime.
                </p>
                <p className="text-lg font-medium mb-10">
                    No contracts. Satisfaction guaranteed.
                </p>

                <div className="flex flex-col items-center">
                    <button className="btn-white text-lg px-10 mb-4">
                        Get First Skip Free <i className="icon-arrow-right ml-2 text-gray-400"></i>
                    </button>
                    <p className="text-sm font-medium mb-6">
                        Join 2,000+ happy customers in NJ + NYC
                    </p>
                    <p className="text-xl font-black italic tracking-tighter">
                        Skip to the good part
                    </p>
                </div>
            </div>
        </section>
    );
};