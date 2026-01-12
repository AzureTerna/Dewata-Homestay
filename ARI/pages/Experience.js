function Experience() {
    return (
        <div className="animate-fade-in pt-6" data-name="experience-page" data-file="pages/Experience.js">
             <div className="container mx-auto px-4 mb-8">
                <div className="bg-[var(--primary-color)] text-white p-8 rounded-xl text-center shadow-lg">
                    <h1 className="text-4xl font-bold font-serif mb-2">Cerita & Aktivitas</h1>
                    <p className="opacity-80">Mengenal lebih dekat Dewata Homestay</p>
                </div>
            </div>
            <HistorySection />
            <ActivitiesSection />
        </div>
    );
}