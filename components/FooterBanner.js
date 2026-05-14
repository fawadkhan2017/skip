function FooterBanner() {
    try {
        return (
            <section className="bg-[var(--primary)] py-20 text-center" data-name="footer-banner" data-file="components/FooterBanner.js">
                <div className="container-custom max-w-4xl">
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-black mb-8">
                        Laundry is personal—and it deserves a higher standard.<br/>
                        While others rely on third-party networks and inconsistent<br/>
                        providers, Skip keeps everything under one roof. A dedicated<br/>
                        team, a controlled process, and a professional facility—ensuring<br/>
                        your clothes are handled the same way, every time.<br/>
                        <span className="font-bold">No outsourcing. No surprises. Just care you can trust.</span>
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <div className="icon-users text-xl text-black"></div>
                        </div>
                        <div className="text-left leading-tight">
                            <p className="font-bold text-sm text-black">The Skip Team</p>
                            <p className="text-xs text-black opacity-80">Serving NJ + NYC</p>
                        </div>
                    </div>

                    <a href="plans.html" className="btn-white text-lg px-8 inline-flex">
                        Get First Skip Free <div className="icon-arrow-right ml-2 text-xl font-bold"></div>
                    </a>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FooterBanner component error:', error);
        return null;
    }
}