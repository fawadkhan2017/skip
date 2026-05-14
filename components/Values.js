function Values() {
    try {
        const values = [
            {
                id: 1,
                title: 'Treat Every Bag Like Our Own',
                description: "Your favorite hoodie, your lucy interview shirt, your kid's blanket. Washed in a dedicated machine, handled with care, and returned neatly folded—socks paired.",
                icon: 'icon-heart',
            },
            {
                id: 2,
                title: 'Give People Their Time Back',
                description: "The average person spends 5 hours a week on laundry. That's 13 full weekends a year. We exist to give you every single one of those back.",
                icon: 'icon-clock',
            },
            {
                id: 3,
                title: 'Speed Without Shortcuts',
                description: '24-hour turnaround—guaranteed. Engineered for speed. No shortcuts. No upcharges. Just laundry done right—fast.',
                icon: 'icon-zap',
            },
            {
                id: 4,
                title: 'Built for Real Life',
                description: 'Reschedule a week with a click. Pause when you travel. Evening deliveries. Skip fits your life, not the other way around.',
                icon: 'icon-target',
            }
        ];

        return (
            <section data-name="values" data-file="components/Values.js" style={{"paddingTop":"50px","paddingRight":"0px","paddingBottom":"50px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(0, 0, 0)","backgroundColor":"lightyellow","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="py-24">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-[#ECAE00] font-semibold text-lg mb-2">What We Stand For</p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                            Our values aren't on a wall.<br/>
                            They're in every bag.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {values.map(value => (
                            <div key={value.id} className="bg-white p-10 rounded-[20px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
                                <div className="w-[46px] h-[46px] rounded-xl bg-[#FFF9CC] flex items-center justify-center mb-6">
                                    <div className={`${value.icon} text-[22px] text-[#ECAE00]`}></div>
                                </div>
                                <h3 className="text-[19px] font-bold mb-3">{value.title}</h3>
                                <p className="text-[var(--text-gray)] leading-relaxed text-[15px]">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Values component error:', error);
        return null;
    }
}