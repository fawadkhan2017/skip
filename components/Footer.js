function Footer() {
    try {
        const currentYear = 2026;
        
        return (
            <footer className="bg-[var(--footer-bg)] pt-16 pb-8 text-white" data-name="footer" data-file="components/Footer.js">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                        
                        {/* Brand & Info */}
                        <div className="lg:col-span-1 flex flex-col">
                            <div className="font-black text-4xl italic mb-6 tracking-tighter">SKIP</div>
                            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                                Skip to the good part<br/>
                                (908) 736-4746<br/>
                                hello@skiplaundry.co<br/>
                                Skip Laundry<br/>
                                Laundry pickup and delivery<br/>
                                service in New Jersey & NYC
                            </p>
                            <p className="text-[var(--primary)] font-bold text-sm mb-6">(908) 736-4746</p>
                            
                            <div className="flex space-x-4 font-semibold text-sm">
                                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors"><i className="icon-instagram text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors"><i className="icon-twitter text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors"><i className="icon-facebook text-xl"></i></a>
                                <a href="#" className="text-gray-400 hover:text-[var(--primary)] transition-colors"><i className="icon-youtube text-xl"></i></a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-bold mb-6 text-sm">Company</h4>
                            <ul className="space-y-4 text-xs text-gray-400">
                                <li><a href="index.html" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="plans.html" className="hover:text-white transition-colors">Laundry Service Plans</a></li>
                                <li><a href="details.html" className="hover:text-white transition-colors">Pickup Details</a></li>
                                <li><a href="index.html#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="index.html#faq" className="hover:text-white transition-colors">Questions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Your First Skip</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Service Areas */}
                        <div className="lg:col-span-2">
                            <h4 className="font-bold mb-6 text-sm">We offer Laundry Delivery<br/>Service In:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-xs text-gray-400">
                                <div><a href="#" className="hover:text-white transition-colors">Downtown Jersey city Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Edgewater Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Exchange Place Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Fort Lee Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Hoboken Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Manhattan Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Newport Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">NYC Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Palisades Park Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Summit Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Westfield Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Weehawken Laundry Service</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Laundromat Near Me</a></div>
                                <div><a href="#" className="hover:text-white transition-colors">Laundry Service Near Me</a></div>
                            </div>
                        </div>

                        {/* Getting Started */}
                        <div>
                            <h4 className="font-bold mb-6 text-sm">Getting Started:</h4>
                            <ul className="space-y-4 text-xs text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Your Laundry Bags</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Apartment Laundry Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Wash & Fold Laundry Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refer Friends</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Leaving Laundry Out for pickup</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">What Makes A Good Laundry Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Skip For Business</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="pt-8 border-t border-gray-800 text-center">
                        <p className="text-xs text-gray-500">
                            © {currentYear} Skip Laundry Service. SkipLaundry.co All rights reserved. New Jersey and NYC
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}