function OrderSummary() {
    const MiniBag = () => (
        <svg viewBox="0 0 100 130" className="w-[18px] h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 25 C 10 50, 5 80, 10 120 C 15 130, 85 130, 90 120 C 95 80, 90 50, 75 25 C 70 10, 65 5, 50 5 C 35 5, 30 10, 25 25 Z" fill="#FFD200"/>
            <path d="M25 25 C 40 30, 60 30, 75 25" stroke="#E5BD00" strokeWidth="3" strokeLinecap="round"/>
            <text x="50" y="70" fill="#ffffff" fontSize="26" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle" transform="rotate(-90 50 70)" opacity="0.9">SKIP</text>
        </svg>
    );

    return (
        <div className="bg-white rounded-[24px] shadow-sm px-7 pb-7 pt-9 lg:w-[380px] self-start sticky top-6 border border-gray-100 flex-shrink-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-black"></div>
            <h2 className="text-[19px] font-bold mb-5 flex items-center tracking-tight text-gray-900">
                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <div className="icon-sparkles text-[14px] text-gray-600"></div>
                </div>
                Order Summary
            </h2>

            <div className="border border-gray-300 rounded-[16px] p-5 mb-5 shadow-sm">
                <div className="flex items-start mb-4">
                    <div className="flex space-x-0 mr-4 bg-[#FCFBEB] px-2 py-1.5 rounded-lg border border-yellow-100 relative items-center justify-center min-w-[70px]">
                        <MiniBag />
                        <MiniBag className="-ml-2" />
                        <MiniBag className="-ml-2" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[14px] leading-tight text-gray-900">The Full House Plan</h3>
                        <p className="text-[12px] text-gray-500 mt-0.5">3 bags per pickup</p>
                    </div>
                </div>
                
                <ul className="space-y-2 text-[12px] font-medium text-gray-600">
                    <li className="flex items-center"><div className="icon-circle-check w-3.5 h-3.5 text-[#53C22B] mr-2 flex-shrink-0"></div>Wash, Dry & Fold</li>
                    <li className="flex items-center"><div className="icon-circle-check w-3.5 h-3.5 text-[#53C22B] mr-2 flex-shrink-0"></div>Free Hypoallergenic Detergent</li>
                    <li className="flex items-center"><div className="icon-circle-check w-3.5 h-3.5 text-[#53C22B] mr-2 flex-shrink-0"></div>Free Pickup & Delivery</li>
                </ul>
            </div>

            <div className="space-y-3 mb-5 text-[12px] font-medium border-b border-gray-100 pb-5 px-1">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center"><div className="icon-truck w-4 h-4 mr-2 opacity-70"></div>Frequency</span>
                    <span className="text-black font-bold">Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 flex items-center"><div className="icon-calendar w-4 h-4 mr-2 opacity-70"></div>Billing</span>
                    <span className="text-black font-bold">Monthly</span>
                </div>
            </div>

            <div className="bg-gray-50 rounded-[12px] p-3 mb-6 flex items-center border border-gray-100">
                <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center mr-3 flex-shrink-0 border border-gray-200">
                    <div className="icon-clock text-[16px] text-black leading-none m-auto flex items-center justify-center"></div>
                </div>
                <div>
                    <div className="font-bold text-[12px] text-black">Reclaim 624 hrs / year</div>
                    <div className="text-[11px] text-gray-500">That's <span className="font-bold text-black">26 extra days</span> of free time</div>
                </div>
            </div>

            <button className="text-[#FFD200] font-bold text-[13px] flex items-center mb-5 hover:text-yellow-500 transition-colors px-1">
                <div className="icon-tag w-3.5 h-3.5 mr-1.5 fill-current"></div>
                Have a promo code?
            </button>

            <div className="flex justify-between text-[13px] mb-5 px-1">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="font-bold text-gray-800">$789.99</span>
            </div>

            <div className="flex justify-between items-end mb-1 px-1">
                <span className="font-bold text-[13px] text-black">Due today</span>
                <span className="font-black text-[18px] text-black">$856.74</span>
            </div>
            <div className="text-[10px] text-gray-400 mb-5 px-1">Then $789.99/qtr + tax</div>

            <a href="plans.html" className="text-[#FFD200] text-[12px] font-bold flex items-center hover:text-yellow-500 mb-6 transition-colors px-1">
                <div className="icon-arrow-left w-3 h-3 mr-1"></div>
                Edit plan
            </a>

            <div className="bg-[#EEF9F1] text-[#29823B] rounded-[12px] p-3 flex text-[11px] font-medium border border-[#D5EEDD]">
                <div className="bg-[#53C22B] text-white rounded-full w-4 h-4 flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                    <div className="icon-check w-3 h-3"></div>
                </div>
                <div className="leading-tight pt-0.5">100% satisfaction guarantee · Cancel anytime</div>
            </div>
        </div>
    );
}
