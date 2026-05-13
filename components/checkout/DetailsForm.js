function DetailsForm() {
    return (
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 flex-1">
            <h1 className="text-3xl font-bold mb-2">Pickup information.</h1>
            <p className="text-gray-500 mb-8">Where should we pick up? Takes about 60 seconds.</p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">First Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Email <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                        <p className="text-xs text-gray-400 mt-1">For order confirmation</p>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Phone <span className="text-red-500">*</span></label>
                        <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                        <p className="text-xs text-gray-400 mt-1">Required for pickup/delivery coordination</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Street address <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2">Apt/Suite</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">State <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">ZIP Code <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                    </div>
                </div>

                <div>
                    <button type="button" className="text-[var(--primary)] text-sm font-bold hover:text-yellow-600 transition-colors">+ Add delivery instructions</button>
                    <div className="mt-4">
                        <label className="block text-sm font-bold mb-2">Additional Instructions For Valet</label>
                        <input type="text" placeholder="E.g. Leave with doorman/Apt 5/Back porch" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all" />
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl flex items-start border border-gray-100">
                    <input type="checkbox" id="sms" className="mt-1 w-4 h-4 text-[var(--primary)] focus:ring-[var(--primary)] border-gray-300 rounded" defaultChecked />
                    <label htmlFor="sms" className="ml-3 block text-sm">
                        <span className="font-bold text-black block">Receive SMS updates for pickup reminders & delivery notifications</span>
                        <span className="text-gray-500 text-xs">Msg & data rates may apply. Reply STOP anytime to opt out.</span>
                    </label>
                </div>

                <p className="text-xs text-gray-500">
                    By continuing, you agree to Skip's <a href="#" className="text-[var(--primary)] font-bold">Terms of Service</a> and <a href="#" className="text-[var(--primary)] font-bold">Privacy Policy</a>, and authorize recurring charges.
                </p>

                <button type="button" className="w-full py-4 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold text-lg shadow-sm transition-all text-center">
                    Continue to Payment
                </button>
            </form>
        </div>
    );
}