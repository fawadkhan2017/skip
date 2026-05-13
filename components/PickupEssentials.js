const PickupEssentials = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]" data-name="PickupEssentials" data-file="components/PickupEssentials.js">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
                        Your first<br />Pickup<br />essentials.
                    </h2>
                </div>
                
                <div className="space-y-10">
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm text-[var(--primary)]">
                            <i className="icon-clock text-xl"></i>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 font-medium leading-tight pt-2">
                            You Valet will arrive between 7:30a-12p
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm text-[var(--primary)]">
                            <i className="icon-message-square text-xl"></i>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 font-medium leading-tight pt-2">
                            We'll text you when your driver is enroute.
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)] border border-[var(--primary)] flex items-center justify-center flex-shrink-0 shadow-sm text-black">
                            <i className="icon-shopping-bag text-xl"></i>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 font-medium leading-tight pt-2">
                            Your Valet will bring your personalized Skip duffel—just have your laundry ready by the door
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm text-[var(--primary)]">
                            <i className="icon-map-pin text-xl"></i>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 font-medium leading-tight pt-2">
                            We'll send you a link to track your order once your bags are picked up
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};