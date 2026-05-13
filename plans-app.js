const root = ReactDOM.createRoot(document.getElementById('root'));

function PlansApp() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50">
            <CheckoutHeader />
            <ProgressBar currentStep={1} />
            <div className="max-w-[1300px] mx-auto px-8 py-8 pb-20 w-full flex flex-col lg:flex-row gap-8">
                <PlanSelection />
                <OrderSummary />
            </div>
            <footer className="mt-auto py-6 text-center text-[12px] text-gray-400 bg-white border-t border-gray-200">
                <div className="max-w-[1300px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2026 Skip Laundry Co. All rights reserved.</p>
                    <div className="space-x-3 mt-3 md:mt-0">
                        <a href="#" className="hover:text-gray-600">Terms of Service</a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                        <span>|</span>
                        <span>NJ & NYC</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

root.render(<PlansApp />);