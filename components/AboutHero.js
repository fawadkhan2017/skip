function AboutHero() {
    try {
        return (
            <section data-name="AboutHero" data-file="components/AboutHero.js" style={{"paddingTop":"47px","paddingRight":"24px","paddingBottom":"96px","paddingLeft":"24px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(0, 0, 0)","backgroundColor":"rgb(255, 210, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"relative","top":"0px","left":"0px","right":"0px","bottom":"0px"}} className="bg-[#FFD200] pt-28 pb-24 px-6 relative overflow-hidden">
                {/* Large circular background accent matching the screenshot */}
                <div className="absolute right-[-5%] top-[-20%] w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full bg-[#E8AE00] opacity-40 pointer-events-none transform translate-x-1/4"></div>
                
                <div style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"248px","marginBottom":"0px","marginLeft":"248px","fontSize":"16px","color":"rgb(0, 0, 0)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"400","objectFit":"fill","display":"block","position":"relative","top":"0px","left":"0px","right":"0px","bottom":"0px"}} className="max-w-4xl mx-auto text-center relative z-10 pt-10">
                    <p style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"16px","marginLeft":"0px","fontSize":"20px","color":"rgb(255, 255, 255)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"500","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-white text-xl font-normal mb-4">Why Skip?</p>
                    <h1 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"24px","marginLeft":"0px","fontSize":"65px","color":"rgb(255, 255, 255)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"center","fontWeight":"900","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-5xl md:text-[85px] font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                        You weren't meant<br />to just work and<br />do chores.
                    </h1>
                    <p className="text-white text-xl md:text-3xl font-normal opacity-90">
                        Skip to the good parts of your life every week.
                    </p>
                </div>
            </section>
        );
    } catch (error) {
        console.error('AboutHero component error:', error);
        return null;
    }
}