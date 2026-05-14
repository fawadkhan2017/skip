function HowItWorks() {
    const steps = [
        {
            id: 1,
            icon: 'icon-search',
            title: 'We inspect your clothes and check your pockets',
            description: 'We do "pocket inspections" for you so nothing ends up in the wash that shouldn\'t. All pockets and clothes are inspected before being washed.'
        },
        {
            id: 2,
            icon: 'icon-washing-machine',
            title: 'We wash your items with extra care',
            description: 'Your lights and darks are separated and all your clothes are washed using cold water to preserve color (and save energy).'
        },
        {
            id: 3,
            icon: 'icon-sparkles',
            title: 'Tons of extras included at no extra charge',
            description: 'Free hypoallergenic detergent, stain treatment, and evening delivery—everything included, at no added cost.'
        },
        {
            id: 4,
            icon: 'icon-shirt',
            title: 'We fold everything so that you don\'t have to',
            description: 'Your clothes are crisply folded, and your socks are paired, ready to be worn or put away when we deliver your clothes to your door!'
        }
    ];

    return (
        <section data-name="HowItWorks" data-file="components/HowItWorks.js" style={{"paddingTop":"50px","paddingRight":"0px","paddingBottom":"50px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(0, 0, 0)","backgroundColor":"white","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">How it works</h2>
                    <p className="text-[19px] text-gray-800 leading-relaxed font-normal">
                        Skip will pick up your laundry, wash it according to best practices and your preferences, and deliver it back neatly folded—right to your door.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto mb-16">
                    {/* Connecting arrows for desktop */}
                    <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] z-0">
                        <div className="w-full flex justify-between px-12">
                            <div className="icon-arrow-right text-gray-300 text-xl transform translate-x-4"></div>
                            <div className="icon-arrow-right text-gray-300 text-xl transform translate-x-4"></div>
                            <div className="icon-arrow-right text-gray-300 text-xl transform translate-x-4"></div>
                        </div>
                        {/* Gray lines connecting the spaces */}
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 -z-10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-start lg:items-center text-left lg:text-center">
                                <div className="w-14 h-14 rounded-xl border-2 border-[var(--primary)] flex items-center justify-center bg-white mb-6 lg:mx-auto relative z-10 shadow-sm">
                                    <div className={`${step.icon} text-xl text-black font-bold`}></div>
                                </div>
                                <h3 className="text-lg font-bold mb-3 leading-snug">{step.title}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <a href="plans.html" className="btn-primary">
                        Get First Skip Free <div className="icon-arrow-right ml-2 text-xl font-bold"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}