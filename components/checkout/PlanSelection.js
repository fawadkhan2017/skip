function PlanSelection() {
    const [frequency, setFrequency] = React.useState('weekly');
    const [billing, setBilling] = React.useState('monthly');

    const bagImage = "https://app.trickle.so/storage/public/images/usr_1f209b0398000001/ca14b966-e026-413b-a232-65a3dead6bd2.png";

    return (
        <div className="bg-white rounded-[24px] p-8 lg:p-10 shadow-sm flex-1 border border-gray-200">
            <h1 className="text-[32px] font-bold mb-1 tracking-tight text-left">Build your plan.</h1>
            <p className="text-gray-500 text-[14px] mb-8 text-left">Choose your weekly plan & billing <span className="mx-1">•</span> <span className="text-gray-400">★</span> Trusted by 1000's of NJ + NYC Households</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Plan 1 */}
                <div className="border border-gray-200 rounded-[16px] p-6 pt-8 text-center flex flex-col h-full bg-white">
                    <div className="h-24 mb-4 flex items-center justify-center">
                        <img src={bagImage} alt="1 Bag" className="w-[60px] h-auto drop-shadow-sm object-contain" />
                    </div>
                    <h3 className="text-[19px] font-bold mb-2">The Essentials</h3>
                    <p className="text-[11px] text-gray-500 mb-4 h-12 leading-relaxed">1 bag (16 lbs)<br/>Just enough to get by or light weekly loads.</p>
                    <div className="text-[28px] font-black mb-5 mt-auto tracking-tight">$38.99<span className="text-[12px] font-semibold text-gray-400 ml-1">/week</span></div>
                    <button className="w-full py-2.5 px-2 bg-[#E5E7EB] hover:bg-gray-300 rounded-full font-bold text-[12px] text-black text-center flex items-center justify-center">Start Simple</button>
                </div>

                {/* Plan 2 */}
                <div className="border-2 border-[#53C22B] rounded-[16px] text-center relative overflow-hidden flex flex-col h-full bg-[#FCFBEB]">
                    <div className="bg-[#53C22B] text-white text-[10px] font-bold py-2 uppercase tracking-widest flex justify-center items-center">
                        <div className="icon-sparkles w-3 h-3 mr-1.5 opacity-90"></div> MOST POPULAR <div className="icon-sparkles w-3 h-3 ml-1.5 opacity-90"></div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col pt-4">
                        <div className="h-24 mb-4 flex items-center justify-center relative">
                            <img src={bagImage} alt="Bag" className="w-[60px] h-auto absolute -ml-10 drop-shadow-sm object-contain z-0" />
                            <img src={bagImage} alt="Bag" className="w-[60px] h-auto absolute ml-10 drop-shadow-sm object-contain z-10" />
                        </div>
                        <h3 className="text-[19px] font-bold mb-2">The Double-Up</h3>
                        <p className="text-[11px] text-gray-500 mb-4 h-12 leading-relaxed">2 bags (32 lbs)<br/>Ideal for couples & gym-goers. Most<br/>households choose this.</p>
                        <div className="text-[28px] font-black mb-5 mt-auto tracking-tight">$64.99<span className="text-[12px] font-semibold text-gray-400 ml-1">/week</span></div>
                        <button className="w-full py-2.5 px-2 bg-[#FFD200] hover:bg-[#F2C700] rounded-full font-bold text-[12px] text-black text-center flex items-center justify-center">Get Your Week Back</button>
                    </div>
                </div>

                {/* Plan 3 */}
                <div className="border border-gray-200 rounded-[16px] text-center relative flex flex-col h-full px-4 pb-6 pt-8 bg-white">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD200] text-black text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm">
                        TOTAL FREEDOM
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="h-24 mb-4 flex items-center justify-center relative">
                            <img src={bagImage} alt="Bag" className="w-[60px] h-auto absolute -ml-16 drop-shadow-sm object-contain z-0" />
                            <img src={bagImage} alt="Bag" className="w-[60px] h-auto absolute z-10 drop-shadow-sm object-contain" />
                            <img src={bagImage} alt="Bag" className="w-[60px] h-auto absolute ml-16 drop-shadow-sm object-contain z-0" />
                        </div>
                        <h3 className="text-[19px] font-bold mb-2">The Full House</h3>
                        <p className="text-[11px] text-gray-500 mb-4 h-12 leading-relaxed">3 bags (48 lbs)<br/>Perfect for large households. Never run out<br/>of clean clothes</p>
                        <div className="text-[28px] font-black mb-5 mt-auto tracking-tight">$94.99<span className="text-[12px] font-semibold text-gray-400 ml-1">/week</span></div>
                        <button className="w-full py-2.5 px-1 bg-[#E5E7EB] hover:bg-gray-300 rounded-full font-bold text-[11.5px] text-black text-center flex items-center justify-center">Never Think About Laundry</button>
                    </div>
                </div>
            </div>

            <div className="mb-6 relative">
                <h4 className="text-[11px] font-semibold text-gray-500 mb-2 tracking-wide uppercase text-left">PICKUP FREQUENCY</h4>
                <div className="bg-[#53C22B] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full absolute top-5 left-[90px] z-10 shadow-sm">First Skip Free</div>
                <div className="bg-[#E5E7EB] rounded-full p-1 relative flex items-center h-12 w-full max-w-full">
                    <button 
                        onClick={() => setFrequency('weekly')}
                        className={`flex-1 h-full rounded-full font-bold text-[14px] flex items-center justify-center transition-all duration-200 ${frequency === 'weekly' ? 'bg-[#FFD200] shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                    >
                        Weekly (SAVE)
                    </button>
                    <button 
                        onClick={() => setFrequency('biweekly')}
                        className={`flex-1 h-full rounded-full font-bold text-[14px] flex items-center justify-center transition-all duration-200 ${frequency === 'biweekly' ? 'bg-[#FFD200] shadow-sm text-black' : 'text-gray-500 hover:text-black'}`}
                    >
                        Every 2 Weeks
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <h4 className="text-[11px] font-semibold text-gray-500 mb-2 tracking-wide uppercase text-left">BILLING FREQUENCY</h4>
                <div className="flex space-x-3">
                    <button 
                        onClick={() => setBilling('per_pickup')}
                        className={`flex-1 py-3 border rounded-[12px] bg-white flex flex-col items-center justify-center transition-all duration-200 ${billing === 'per_pickup' ? 'border-black shadow-sm text-black' : 'border-gray-200 text-gray-700 hover:border-gray-400'}`}
                    >
                        <div className={`text-[14px] ${billing === 'per_pickup' ? 'font-bold' : 'font-semibold'}`}>Per Pickup</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">Pay as you go</div>
                    </button>
                    <button 
                        onClick={() => setBilling('monthly')}
                        className={`flex-1 py-3 border rounded-[12px] bg-white flex flex-col items-center justify-center relative transition-all duration-200 ${billing === 'monthly' ? 'border-black shadow-sm text-black' : 'border-gray-200 text-gray-700 hover:border-gray-400'}`}
                    >
                        <div className={`text-[14px] ${billing === 'monthly' ? 'font-bold' : 'font-semibold'}`}>Monthly</div>
                        <div className="text-[10px] text-gray-500 mt-0.5 flex items-center justify-center">Most popular <div className="icon-star w-2.5 h-2.5 text-[#FFD200] ml-1 fill-current"></div></div>
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-[10px] font-medium text-gray-600 mb-6">
                <span className="flex items-center"><div className="icon-circle-check w-3 h-3 text-[#53C22B] mr-1.5"></div>Cancel anytime, no fees</span>
                <span className="flex items-center"><div className="icon-star w-3 h-3 text-[#FFD200] mr-1.5 fill-current"></div>Fast 24-hr turnaround</span>
                <span className="flex items-center"><div className="icon-circle-check w-3 h-3 text-[#53C22B] mr-1.5"></div>No long-term contract</span>
            </div>

            <a href="details.html" className="block w-full py-3.5 bg-[#FFD200] hover:bg-[#F2C700] rounded-full text-center font-bold text-[17px] shadow-sm transition-all flex items-center justify-center text-black">
                Continue to Pickup Info <div className="icon-chevron-right w-5 h-5 ml-1"></div>
            </a>
        </div>
    );
}