function App() {
    try {
        return (
            <div data-name="App" data-file="about-app.js" className="min-h-screen flex flex-col font-sans">
                <Header />
                <main className="flex-grow">
                    <AboutHero />
                    <Problem />
                    <Values />
                    <HowItWorks />
                    <Team />
                    <FooterBanner />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);