const PickupEssentials = () => {
    return (
        <section data-name="PickupEssentials" data-file="components/PickupEssentials.js" style={{"paddingTop":"49px","paddingRight":"0px","paddingBottom":"49px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(250, 250, 250)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="py-24 bg-[#FAFAFA]">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="flex justify-center md:justify-end pr-0 md:pr-10">
                    <h2 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"72px","color":"rgb(0, 0, 0)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"500","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-6xl md:text-[72px] font-black tracking-tighter leading-[1.05] text-center md:text-left text-black">
                        Your first<br />Pickup<br />essentials.
                    </h2>
                </div>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-3">
                        <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                            <i className="icon-clock text-xl font-bold"></i>
                        </div>
                        <p className="text-[19px] text-gray-700 font-normal leading-snug pt-2 max-w-sm">
                            You Valet will arrive between 7:30a-12p
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                            <i className="icon-message-circle text-xl font-bold"></i>
                        </div>
                        <p className="text-[19px] text-gray-700 font-normal leading-snug pt-2 max-w-sm">
                            We'll text you when your driver is enroute.
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                            <i className="icon-shopping-bag text-xl font-bold"></i>
                        </div>
                        <p className="text-[19px] text-gray-700 font-normal leading-snug pt-1 max-w-sm">
                            Your Valet will bring your personalized Skip duffel—just have your laundry ready by the door
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                            <i className="icon-map-pin text-xl font-bold"></i>
                        </div>
                        <p className="text-[19px] text-gray-700 font-normal leading-snug pt-2 max-w-sm">
                            We'll send you a link to track your order once your bags are picked up
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
