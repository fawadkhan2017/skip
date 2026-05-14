const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="bg-black text-white py-4 px-6 sticky w-full top-0 z-50">
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

                <div className="hidden lg:flex items-center text-[14px] font-bold">
                    <a href="#" className="text-white hover:text-[var(--primary)] transition-colors mr-3">Client Login</a>
                    <span className="text-white mr-3 font-normal">|</span>
                    <div className="flex items-center text-white mr-6">
                        <i className="icon-phone text-[var(--primary)] mr-2 text-lg"></i>
                        <span>(908) 736-4746</span>
                    </div>
                    <button className="bg-[var(--primary)] text-black px-6 py-2.5 rounded-full font-bold hover:bg-[var(--primary-hover)] transition-colors">
                        First Skip Free
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white hover:text-[var(--primary)] transition-colors p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`text-2xl ${isMenuOpen ? 'icon-x' : 'icon-menu'}`}></i>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 py-4 px-6 flex flex-col space-y-5 shadow-xl">
                    <a href="index.html#how-it-works" className="text-white hover:text-[var(--primary)] font-semibold text-[15px]" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                    <a href="plans.html" className="text-white hover:text-[var(--primary)] font-semibold text-[15px]" onClick={() => setIsMenuOpen(false)}>Plans</a>
                    <a href="about.html" className="text-white hover:text-[var(--primary)] font-semibold text-[15px]" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="index.html#faq" className="text-white hover:text-[var(--primary)] font-semibold text-[15px]" onClick={() => setIsMenuOpen(false)}>FAQs</a>
                    <div className="h-px bg-gray-800 w-full"></div>
                    <a href="#" className="text-[var(--primary)] font-semibold text-[15px]">Client Login</a>
                    <button className="bg-[var(--primary)] text-black px-6 py-3 rounded-full font-bold hover:bg-[var(--primary-hover)] transition-colors w-full mt-2">
                        First Skip Free
                    </button>
                </div>
            )}
        </header>
    );
};