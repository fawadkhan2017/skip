const FAQ = () => {
    const questions = [
        "How does laundry pickup and delivery work?",
        "Which neighborhoods does Skip serve?",
        "Do you pick up from apartments?",
        "What happens if I'm not home during pickup or delivery?",
        "Is laundry pickup and delivery really free?",
        "Isn't this a bit much just for laundry?"
    ];

    const filters = ["Getting Started", "Pricing & Billing", "Your Laundry", "Scheduling & Delivery", "Account & Policies"];

    return (
        <section className="py-[50px] bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-[12px] font-bold tracking-widest uppercase mb-4 text-gray-500">WE'VE HEARD IT ALL</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                        No fluff. Just answers.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter, idx) => (
                            <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${idx === 0 ? 'bg-[var(--primary)] text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-100 rounded-3xl p-4 md:p-8">
                    {questions.map((q, idx) => (
                        <React.Fragment key={idx}>
                            <div className="bg-transparent hover:bg-gray-200 transition-colors rounded-2xl px-6 py-5 flex justify-between items-center cursor-pointer">
                                <span className="font-medium text-gray-800 text-base">{q}</span>
                                <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 text-black">
                                    <i className="icon-plus text-sm font-bold"></i>
                                </div>
                            </div>
                            {idx < questions.length - 1 && (
                                <div className="h-[1px] bg-gray-200 mx-6 my-1"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};