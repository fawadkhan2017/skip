const Header = () => {
    return (
        <header className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="index.html" className="text-3xl font-black italic tracking-tighter hover:text-[var(--primary)] transition-colors">SKIP</a>
                </div>
                
                <nav className="hidden md:flex items-center space-x-8 text-[13px] font-semibold tracking-wide">
                    <a href="index.html#how-it-works" className="hover:text-[var(--primary)] transition-colors">How It Works</a>
                    <a href="plans.html" className="hover:text-[var(--primary)] transition-colors">Plans</a>
                    <a href="about.html" className="hover:text-[var(--primary)] transition-colors">About</a>
                    <a href="index.html#faq" className="hover:text-[var(--primary)] transition-colors">FAQs</a>
                </nav>

                <div className="hidden lg:flex items-center space-x-6 text-[13px] font-semibold">
                    <a href="#" className="hover:text-[var(--primary)] transition-colors">Client Login</a>
                    <div className="flex items-center text-[var(--primary)]">
                        <i className="icon-phone mr-2"></i>
                        <span>(908) 736-4746</span>
                    </div>
                    <button className="bg-[var(--primary)] text-black px-6 py-2.5 rounded-full font-bold hover:bg-[var(--primary-hover)] transition-colors">
                        First Skip Free
                    </button>
                </div>
            </div>
        </header>
    );
};