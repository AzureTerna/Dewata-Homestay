function HistorySection() {
    return (
        <section className="py-20 bg-[var(--background-color)]" data-name="history-section" data-file="components/HistorySection.js">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="icon-flower text-[var(--primary-color)] text-5xl mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--primary-color)] mb-8">Sejarah Kami</h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-serif italic relative px-8">
                        <span className="absolute top-0 left-0 text-6xl text-[var(--secondary-color)] opacity-40">"</span>
                        Dewata Homestay didirikan oleh sebuah keluarga lokal yang ingin membagikan keindahan dan keunikan budaya Bali dengan wisatawan.
                        <span className="absolute bottom-0 right-0 text-6xl text-[var(--secondary-color)] opacity-40">"</span>
                    </p>
                    <div className="w-24 h-1 bg-[var(--secondary-color)] mx-auto mt-10"></div>
                </div>
            </div>
        </section>
    );
}