function Stats() {
    try {
        const stats = [
            { id: 1, label: 'Founded', value: '2015', icon: 'icon-calendar' },
            { id: 2, label: 'Employees', value: '250+', icon: 'icon-users' },
            { id: 3, label: 'Countries Served', value: '45+', icon: 'icon-globe' },
            { id: 4, label: 'Revenue Growth', value: '300%', icon: 'icon-chart-line' },
        ];

        return (
            <section className="py-16 bg-white border-b border-gray-100" data-name="stats" data-file="components/Stats.js">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {stats.map(stat => (
                            <div key={stat.id} className="text-center group">
                                <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors duration-300">
                                    <div className={`${stat.icon} text-2xl text-[var(--primary)] group-hover:text-white transition-colors duration-300`}></div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-2">{stat.value}</h3>
                                <p className="text-[var(--text-muted)] font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Stats component error:', error);
        return null;
    }
}