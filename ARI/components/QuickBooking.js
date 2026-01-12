function QuickBooking() {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        checkIn: '',
        checkInTime: '14:00',
        checkOut: '',
        checkOutTime: '12:00',
        roomType: 'Basic',
        guests: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "62881037700795";
        const message = `
*Halo Dewata Homestay, Saya ingin reservasi kamar.*

👤 *Nama:* ${formData.name}
📱 *No. HP:* ${formData.phone}
📅 *Check-In:* ${formData.checkIn} ${formData.checkInTime ? formData.checkInTime + ' WITA' : ''}
📅 *Check-Out:* ${formData.checkOut} ${formData.checkOutTime ? formData.checkOutTime + ' WITA' : ''}
🛏️ *Tipe Kamar:* ${formData.roomType}
👥 *Jumlah Tamu:* ${formData.guests}

Mohon info ketersediaan. Terima kasih.
        `.trim();

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-16 bg-gray-50 relative z-30" data-name="quick-booking" data-file="components/QuickBooking.js">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Side - Contact Info (Themed Color) */}
                    <div className="lg:w-2/5 bg-[var(--primary-color)] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-[var(--secondary-color)] opacity-20 rounded-full"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 font-serif">Informasi Kontak</h3>
                            <p className="mb-8 opacity-90 leading-relaxed">
                                Hubungi kami langsung untuk pertanyaan cepat atau bantuan reservasi.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="icon-phone text-[var(--secondary-color)] text-xl"></div>
                                    <span className="font-semibold text-lg">+62 881-0377-00795</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="icon-map-pin text-[var(--secondary-color)] text-xl"></div>
                                    <span>Dewata Homestay, Bali</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="icon-clock text-[var(--secondary-color)] text-xl"></div>
                                    <span>Respon Cepat 24 Jam</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 relative z-10 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                            <p className="text-sm font-bold mb-3">Sudah Booking via WA?</p>
                            <a 
                                href="https://forms.gle/ULBsyCNELvPkbrQMA" 
                                target="_blank"
                                className="block w-full bg-white text-[var(--primary-color)] text-center font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                            >
                                Isi Form Konfirmasi
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Booking Form */}
                    <div className="lg:w-3/5 p-10 bg-white">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 font-serif">Formulir Reservasi</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        placeholder="Masukkan nama anda"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nomor Telepon / WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        placeholder="08xxxxxxxxxx"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Check In</label>
                                    <input 
                                        type="date" 
                                        name="checkIn"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                    />
                                    <label className="block text-sm font-bold text-gray-700 mb-2 mt-3">Jam Check In</label>
                                    <input
                                        type="time"
                                        name="checkInTime"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        value={formData.checkInTime}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Check Out</label>
                                    <input 
                                        type="date" 
                                        name="checkOut"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                    />
                                    <label className="block text-sm font-bold text-gray-700 mb-2 mt-3">Jam Check Out</label>
                                    <input
                                        type="time"
                                        name="checkOutTime"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        value={formData.checkOutTime}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Tipe Kamar</label>
                                    <div className="relative">
                                        <select 
                                            name="roomType"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50 appearance-none"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                        >
                                            <option value="Basic">Basic</option>
                                            <option value="Crown">Crown</option>
                                            <option value="Royal">Royal</option>
                                        </select>
                                        <div className="icon-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Jumlah Tamu</label>
                                    <input 
                                        type="number" 
                                        name="guests"
                                        min="1"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all bg-gray-50"
                                        value={formData.guests}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-[#E85D04] hover:bg-[#d05202] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg transform hover:-translate-y-1 duration-200"
                            >
                                <div className="icon-send"></div>
                                Kirim Reservasi via WhatsApp
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-2">
                                Anda akan diarahkan ke WhatsApp untuk mengirim detail pesanan ini.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}