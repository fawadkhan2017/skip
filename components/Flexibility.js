const Flexibility = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]" data-name="Flexibility" data-file="components/Flexibility.js">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-[14px] font-bold tracking-widest uppercase mb-4">ON YOUR TERMS</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
                        Worried you'll get charged for a week you're not home?
                    </h2>
                </div>
                
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 text-yellow-800">
                            <i className="icon-plane text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Going somewhere?</h3>
                            <p className="text-gray-600">Request a change at least 24-hrs before pickup & that week is skipped. No charge.*</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-800">
                            <i className="icon-clock text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Life got busy?</h3>
                            <p className="text-gray-600">Reschedule or skip at least 24 hours ahead. No fee. No explanation needed.*</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 text-black">
                            <i className="icon-x text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Want out?</h3>
                            <p className="text-gray-600">Cancel anytime. No cancellation fees/contracts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};