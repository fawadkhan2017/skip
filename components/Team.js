function Team() {
    try {
        const teamImages = [
            "https://app.trickle.so/storage/public/images/usr_1f209b0398000001/809ad132-63de-4965-8612-3de9daa86efd.jpeg",
            "https://app.trickle.so/storage/public/images/usr_1f209b0398000001/a1f26aed-f65f-41c3-8229-8a20b97d19b8.jpeg",
            "https://app.trickle.so/storage/public/images/usr_1f209b0398000001/bb126ddf-b5c4-4c1e-9fbc-d34418a350b0.jpeg"
        ];

        return (
            <section data-name="team" data-file="components/Team.js" className="py-20 bg-[#FFFDF3] text-center">
                <div className="container-custom">
                    <p className="text-[var(--primary-hover)] font-bold text-lg mb-2">The Team</p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
                        We wash other<br/>
                        people's clothes.
                    </h2>
                    <p className="text-xl text-black mb-16 max-w-3xl mx-auto font-medium">
                        Meet the team of professionals who decided doing other<br className="hidden md:block"/>
                        people's laundry was a good idea—and got really good at it.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
                        {teamImages.map((img, index) => (
                            <div key={index} className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-sm bg-white">
                                <img src={img} alt={`Team member ${index + 1}`} className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${index === 2 ? 'object-[80%_center]' : 'object-[center_20%]'}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team component error:', error);
        return null;
    }
}