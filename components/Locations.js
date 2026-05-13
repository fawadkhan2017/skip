const Locations = () => {
    const locations = [
        "Downtown Jersey city", "Edgewater", "Hoboken", 
        "Fort Lee", "Weehawken/Waterfront Port Imperial", "Palisades Park", 
        "Tribeca NYC", "Summit", "Westfield"
    ];

    return (
        <section className="py-24 bg-[var(--primary)] text-black">
            <div className="max-w-[1100px] mx-auto px-6 text-center">
                <p className="text-[12px] font-bold tracking-widest uppercase mb-4">FIND YOUR CITY</p>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                    Laundry Delivery Service Near Me
                </h2>
                <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
                    From Downtown Jersey city to Hoboken & Westfield—all the way to Tribeca and Battery Park NYC. Our laundry delivery service is serving customers in your neighborhood every week!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-full px-6 py-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex items-center text-sm font-bold">
                                <i className="icon-map-pin mr-3 text-gray-500"></i>
                                {loc}
                            </div>
                            <i className="icon-chevron-right text-gray-400"></i>
                        </div>
                    ))}
                </div>

                <button className="btn-white text-lg px-10">
                    Get First Skip Free <i className="icon-arrow-right ml-2 text-gray-400"></i>
                </button>
            </div>
        </section>
    );
};