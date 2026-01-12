function ActivitiesSection() {
    const activities = [
        {
            title: "Welcome Drink & Snack Lokal",
            icon: "coffee",
            description: "Bikin tamu ngerasa 'disambut', bukan cuma check-in.",
            details: ["Teh sereh / es jeruk nipis / kopi tubruk", "Pisang goreng / klepon / cookies"],
            tag: "Gratis untuk Tamu",
            image: "https://picsum.photos/seed/welcome/800/600"
        },
        {
            title: "Mini Breakfast Experience",
            icon: "utensils",
            description: "Hotel feel dengan biaya minim. Mulai harimu dengan kenyang.",
            details: ["Nasi goreng / roti bakar + telur", "Mie tek-tek", "Self-service atau diantar"],
            tag: "Menu Sarapan",
            image: "https://picsum.photos/seed/breakfast/800/600"
        },
        {
            title: "Bike / Walking Tour",
            icon: "bike",
            description: "Jelajahi sekitar homestay dengan rute menarik.",
            details: ["Peminjaman sepeda", "Peta rute jalan kaki", "Spot foto & warung legend"],
            tag: "Adventure",
            image: "https://picsum.photos/seed/bike/800/600"
        },
        {
            title: "Movie Night / Chill Night",
            icon: "film",
            description: "Cocok buat tamu keluarga atau teman nongkrong.",
            details: ["Proyektor kecil / TV + speaker", "Netflix / film lokal", "Popcorn gratis"],
            tag: "Night Activity",
            image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "BBQ & Grill Night Bareng",
            icon: "flame",
            description: "Malam keakraban dengan hidangan panggang yang lezat.",
            details: ["Sewa alat BBQ", "Bakar sosis, ayam, jagung", "Musik santai"],
            tag: "Favorit Grup",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Late Checkout / Coffee Hour",
            icon: "clock",
            description: "Nikmati waktu santai lebih lama sebelum pulang.",
            details: ["Jam ngopi gratis (1 jam)", "Late checkout +30 menit (by request)"],
            tag: "Extra Service",
            image: "https://picsum.photos/seed/coffee/800/600"
        }
    ];

    return (
        <section className="py-16 bg-white" data-name="activities-section" data-file="components/ActivitiesSection.js">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">Aktivitas & Fasilitas</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Beragam kegiatan menarik dan layanan spesial untuk kenyamanan maksimal Anda.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div 
                            key={index} 
                            className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col animate-fade-in-scale"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={activity.image} 
                                    alt={activity.title} 
                                    onError={window.setAltPlaceholder}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-[var(--secondary-color)] text-[var(--primary-color)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {activity.tag}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[var(--primary-color)]">
                                        <div className={`icon-${activity.icon} text-lg`}></div>
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-800 leading-tight">{activity.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 italic">
                                    "{activity.description}"
                                </p>
                                <ul className="space-y-2 mt-auto">
                                    {activity.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="icon-check text-[var(--accent-green)] w-4 h-4 mt-0.5"></div>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}