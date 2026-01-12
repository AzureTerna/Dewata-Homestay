function Reservation() {
    return (
        <div className="animate-fade-in pt-6" data-name="reservation-page" data-file="pages/Reservation.js">
            <div className="container mx-auto px-4 mb-8">
                <div className="bg-[var(--primary-color)] text-white p-8 rounded-xl text-center shadow-lg">
                    <h1 className="text-4xl font-bold font-serif mb-2">Reservasi Kamar</h1>
                    <p className="opacity-80">Amankan jadwal liburan Anda sekarang</p>
                </div>
            </div>
            <RoomPackages />
            
            
        </div>
    );
}