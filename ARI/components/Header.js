function Header({ currentPage, setCurrentPage }) {
    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'experience', label: 'Sejarah & Aktivitas' },
        { id: 'reservation', label: 'Reservasi' }
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="bg-[var(--primary-color)] text-[var(--secondary-color)] shadow-lg sticky top-0 z-50 border-b-2 border-[var(--secondary-color)]" data-name="header" data-file="components/Header.js">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div 
                        className="text-2xl font-bold font-serif cursor-pointer flex items-center gap-2"
                        onClick={() => setCurrentPage('home')}
                    >
                        <div className="icon-flower text-3xl"></div>
                        <span>DEWATA HOMESTAY</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`text-lg font-medium hover:text-white transition-colors duration-200 relative group ${currentPage === item.id ? 'text-white' : ''}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--secondary-color)] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${currentPage === item.id ? 'scale-x-100' : ''}`}></span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setCurrentPage(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`text-left text-lg font-medium py-2 px-4 rounded hover:bg-red-900 transition-colors ${currentPage === item.id ? 'bg-red-900 text-white' : ''}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}