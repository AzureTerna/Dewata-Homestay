function Home() {
    return (
        <div className="animate-fade-in" data-name="home-page" data-file="pages/Home.js">
            <Hero />
            <div id="location-preview">
                <LocationPreview />
            </div>
            <div className="bg-[var(--secondary-color)] py-12 text-center text-[var(--primary-color)]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-serif italic">"Experience the Real Bali"</h2>
                </div>
            </div>
            <RoomPackages />
        </div>
    );
}