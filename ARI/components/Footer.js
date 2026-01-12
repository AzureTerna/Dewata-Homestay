function Footer() {
    return (
        <footer className="bg-stone-900 text-[var(--background-color)] py-8 border-t-4 border-[var(--secondary-color)]" data-name="footer" data-file="components/Footer.js">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-4">Dewata Homestay</h3>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Membagikan keindahan dan keunikan budaya Bali dengan kenyamanan seperti di rumah sendiri.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-4">Kontak</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <div className="icon-phone text-[var(--secondary-color)]"></div>
                                <span>+62881037700795</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="icon-map-pin text-[var(--secondary-color)] mt-1"></div>
                                <a href="https://maps.app.goo.gl/nDfVFrk4ktVfcfHx7" target="_blank" className="hover:text-[var(--secondary-color)] transition-colors">
                                    Lihat di Google Maps
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-4">Lokasi</h3>
                        <p className="text-sm opacity-80 mb-4">
                            Bali, Indonesia
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center text-[var(--primary-color)]">
                                <div className="icon-instagram"></div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center text-[var(--primary-color)]">
                                <div className="icon-facebook"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-stone-700 mt-8 pt-6 text-center text-sm opacity-60">
                    &copy; 2026 Dewata Homestay. All rights reserved.
                </div>
            </div>
        </footer>
    );
}