function CheckoutHeader() {
    return (
        <header className="bg-black text-white py-4 px-6 sticky w-full top-0 z-50">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between w-full">
                <a href="index.html" className="text-white text-3xl font-black italic tracking-tighter hover:text-[var(--primary)] transition-colors">SKIP</a>
                <div className="flex items-center text-sm font-medium text-white">
                    <div className="icon-lock w-4 h-4 text-green-500 mr-2"></div>
                    Secure checkout
                </div>
            </div>
        </header>
    );
}
