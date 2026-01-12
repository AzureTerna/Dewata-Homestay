function RoomPackages() {
    const packages = [
        {
            name: "Basic",
            size: "4 x 5 Meter",
            units: "4 Unit",
            price: "200.000",
            color: "bg-gray-100",
            features: ["Kenyamanan Dasar", "Kamar Mandi Dalam", "Kipas Angin"],
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Crown",
            size: "5 x 6 Meter",
            units: "3 Unit",
            price: "400.000",
            color: "bg-yellow-50",
            features: ["Ruangan Lebih Luas", "AC Dingin", "TV LED", "Water Heater"],
            highlight: true,
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Royal",
            size: "6 x 7 Meter",
            units: "2 Unit",
            price: "600.000",
            color: "bg-red-50",
            features: ["Sangat Luas", "Private Balcony", "Smart TV", "Bathtub", "Welcome Drink"],
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="room-packages" className="py-20 bg-[var(--background-color)]" data-name="room-packages" data-file="components/RoomPackages.js">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-color)] font-bold tracking-widest uppercase text-sm">Akomodasi</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--primary-color)] mt-2">Pilihan Kamar</h2>
                    <div className="w-20 h-1 bg-[var(--secondary-color)] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div 
                            key={index} 
                            className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col hover:-translate-y-2 animate-fade-in-up ${pkg.highlight ? 'border-2 border-[var(--secondary-color)] transform md:-translate-y-4 z-10' : 'bg-white'}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 inset-x-0 bg-[var(--secondary-color)] text-[var(--primary-color)] text-center py-1 text-xs font-bold uppercase tracking-wider z-20">
                                    Paling Populer
                                </div>
                            )}
                            <div className="h-56 relative">
                                <img src={pkg.image} alt={pkg.name} onError={window.setAltPlaceholder} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <h3 className="text-2xl font-bold text-white font-serif">{pkg.name}</h3>
                                    <p className="text-gray-300 text-sm">{pkg.size} | {pkg.units} Tersedia</p>
                                </div>
                            </div>
                            <div className={`p-6 flex-grow flex flex-col ${pkg.color}`}>
                                <div className="mb-6">
                                    <span className="text-xs text-gray-500 uppercase font-bold">Harga per Malam</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm text-[var(--primary-color)] font-bold">Rp</span>
                                        <span className="text-4xl font-bold text-[var(--primary-color)]">{pkg.price}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="icon-circle-check text-[var(--secondary-color)]"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    onClick={() => window.location.hash = "#booking-form"}
                                    className={`w-full py-3 rounded-lg font-bold transition-colors ${pkg.highlight ? 'bg-[var(--primary-color)] text-white hover:bg-red-900' : 'bg-white border border-gray-300 text-gray-700 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]'}`}
                                >
                                    Pilih {pkg.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto border-l-4 border-[var(--primary-color)]">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="icon-bed text-[var(--primary-color)] text-xl"></div>
                        <h4 className="text-xl font-bold text-gray-800">Butuh Kasur Tambahan?</h4>
                    </div>
                    <p className="text-gray-600">
                        Extra Bed tersedia dengan biaya <span className="font-bold text-[var(--primary-color)]">Rp 55.000</span> / malam
                    </p>
                </div>
            </div>
        </section>
    );
}