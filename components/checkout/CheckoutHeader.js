function CheckoutHeader() {
    return (
        <header className="bg-black py-4 px-6 md:px-12 flex items-center justify-between">
            <a href="index.html" className="text-white text-3xl font-black italic tracking-tighter">SKIP</a>
            <div className="flex items-center text-sm font-medium text-white">
                <div className="icon-lock w-4 h-4 text-green-500 mr-2"></div>
                Secure checkout
            </div>
        </header>
    );
}