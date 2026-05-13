function Problem() {
    try {
        return (
            <section className="py-24 bg-white text-center" data-name="problem" data-file="components/Problem.js">
                <div className="container-custom max-w-3xl">
                    <p className="text-[22px] mb-4 font-normal text-gray-800">Sound familiar?</p>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
                        Every week.<br/>
                        Same pile. Same dread.
                    </h2>
                    <p className="text-[19px] text-[var(--text-gray)] mb-10 leading-relaxed font-normal">
                        It's not just Sundays. It's a cycle. Monday it's in the way. Thursday you're down to whatever's left. Friday you promise you'll take care of it this weekend. Laundry day starts the moment the last load is done.
                    </p>
                    <p className="text-2xl font-bold mb-10">
                        What if laundry day just... <span className="text-[var(--primary)]">stopped?</span>
                    </p>
                    <a href="plans.html" className="btn-primary">
                        Get First Skip Free <div className="icon-arrow-right ml-2 text-xl"></div>
                    </a>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Problem component error:', error);
        return null;
    }
}