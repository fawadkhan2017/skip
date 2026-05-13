function Team() {
    try {
        const teamImages = [
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ];

        return (
            <section className="py-20 bg-[#F9FAFB] text-center" data-name="team" data-file="components/Team.js">
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {teamImages.map((img, index) => (
                            <div key={index} className="rounded-3xl overflow-hidden aspect-[4/5] shadow-md">
                                <img src={img} alt={`Team member ${index + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
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