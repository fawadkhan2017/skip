function ProgressBar({ currentStep }) {
    const steps = [
        { id: 1, name: 'Your Plan' },
        { id: 2, name: 'Pickup Info' },
        { id: 3, name: 'Payment' }
    ];

    return (
        <div className="border-b border-gray-100">
            <div className="max-w-[1300px] mx-auto px-8 md:px-12 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold ${currentStep === step.id ? 'bg-black text-white' : 'bg-[#A3A3A3] text-white'}`}>
                                        {step.id}
                                    </div>
                                    <span className={`text-[11px] mt-1.5 font-medium ${currentStep === step.id ? 'text-black' : 'text-gray-400'}`}>
                                        {step.name}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-12 h-[1px] mb-5 mx-3 ${currentStep > step.id ? 'bg-black' : 'bg-gray-300'}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-gray-500 text-[12px] font-medium pt-1">
                        Step {currentStep} of 3
                    </div>
                </div>
            </div>
        </div>
    );
}
