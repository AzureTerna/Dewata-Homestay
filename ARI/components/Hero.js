function Hero() {
    return (
        <div className="relative h-[600px] flex items-center justify-center text-center text-white" data-name="hero" data-file="components/Hero.js">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1938" 
                    alt="Bali Atmosphere" 
                    onError={window.setAltPlaceholder}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="animate-fade-in-up">
                    <h2 className="text-[var(--secondary-color)] text-xl md:text-2xl tracking-[0.2em] mb-4 font-bold uppercase animate-fade-in-up">Selamat Datang di</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg font-serif animate-fade-in-scale delay-100">Dewata Homestay</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 animate-fade-in-up delay-200">
                        Rasakan kedamaian dan kehangatan budaya Bali dalam setiap momen menginap Anda.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <button 
                            onClick={() => document.getElementById('room-packages')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Lihat Kamar
                        </button>
                        <a 
                            href="https://wa.me/62881037700795" 
                            target="_blank"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[var(--primary-color)] transition-all flex items-center justify-center gap-2"
                        >
                            <div className="icon-message-circle"></div>
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}