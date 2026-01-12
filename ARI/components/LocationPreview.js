function LocationPreview() {
    return (
        <section className="py-16 bg-white" data-name="location-preview" data-file="components/LocationPreview.js">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-[var(--secondary-color)]">
                             {/* Placeholder for Map - Using an image representation since actual iframe might need API key or be heavy */}
                             <div className="aspect-video w-full bg-gray-200 relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1559394166-3b91d780ef74?auto=format&fit=crop&q=80&w=1000"
                                    alt="Lokasi Bali"
                                    onError={window.setAltPlaceholder}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                    <a 
                                        href="https://maps.app.goo.gl/nDfVFrk4ktVfcfHx7" 
                                        target="_blank"
                                        className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 hover:bg-[var(--secondary-color)] transition-colors"
                                    >
                                        <div className="icon-map-pin"></div>
                                        Buka Google Maps
                                    </a>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-6">Lokasi Kami</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <div className="icon-map-pin text-[var(--primary-color)] text-xl"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Alamat</h3>
                                    <p className="text-gray-600">Jalan Utama Bali, Area Strategis dekat Wisata Alam.</p>
                                    <a href="https://maps.app.goo.gl/nDfVFrk4ktVfcfHx7" className="text-[var(--primary-color)] font-semibold text-sm mt-2 inline-block border-b border-[var(--primary-color)]">
                                        Klik untuk petunjuk arah
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <div className="icon-phone text-[var(--primary-color)] text-xl"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Telepon / WhatsApp</h3>
                                    <p className="text-gray-600">Siap melayani 24 Jam</p>
                                    <p className="text-xl font-bold text-[var(--primary-color)] mt-1">+62 881-0377-00795</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}