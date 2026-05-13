const App = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <Hero />
            <HowItWorks />
            <PickupEssentials />
            <Testimonials />
            <Plans />
            <Flexibility />
            <BagCapacity />
            <Locations />
            <Guarantee />
            <FAQ />
            <BottomCTA />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);