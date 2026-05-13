const App = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans pt-[72px]">
            <Header />
            <Problem />
            <Stats />
            <Values />
            <Team />
            <FooterBanner />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);