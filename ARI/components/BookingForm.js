function BookingForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        checkIn: '',
        checkInTime: '14:00',
        checkOut: '',
        checkOutTime: '12:00',
        guests: 1,
        roomType: 'Basic',
        extraBed: false,
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format message for WhatsApp
        const phoneNumber = "62881037700795";
        const message = `
*Halo Dewata Homestay, Saya ingin reservasi kamar.*

📋 *Data Pemesan:*
Nama: ${formData.name}

📅 *Detail Menginap:*
Check-in: ${formData.checkIn} ${formData.checkInTime ? formData.checkInTime + ' WITA' : ''}
Check-out: ${formData.checkOut} ${formData.checkOutTime ? formData.checkOutTime + ' WITA' : ''}
Jumlah Tamu: ${formData.guests} Orang

🛏️ *Pilihan Kamar:*
Tipe: ${formData.roomType}
Extra Bed: ${formData.extraBed ? 'Ya' : 'Tidak'}

📝 *Catatan Tambahan:*
${formData.notes || '-'}

Mohon konfirmasi ketersediaannya. Terima kasih.
        `.trim();

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="booking-form" className="py-20 bg-white relative overflow-hidden" data-name="booking-form" data-file="components/BookingForm.js">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary-color)] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    <div className="w-full animate-fade-in-up delay-200">
                        <div className="bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6 flex items-center gap-3">
                                <div className="icon-calendar-check animate-bounce"></div>
                                Formulir Pemesanan
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                        placeholder="Masukkan nama pemesan"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Tanggal Check-In</label>
                                        <input 
                                            type="date" 
                                            name="checkIn"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                        />
                                        <label className="block text-gray-700 font-bold mb-2 mt-3">Jam Check-In</label>
                                        <input
                                            type="time"
                                            name="checkInTime"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                            value={formData.checkInTime}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Tanggal Check-Out</label>
                                        <input 
                                            type="date" 
                                            name="checkOut"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                        />
                                        <label className="block text-gray-700 font-bold mb-2 mt-3">Jam Check-Out</label>
                                        <input
                                            type="time"
                                            name="checkOutTime"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                            value={formData.checkOutTime}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Tipe Kamar</label>
                                        <select 
                                            name="roomType"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all appearance-none bg-white"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                        >
                                            <option value="Basic">Basic (Rp 200.000)</option>
                                            <option value="Crown">Crown (Rp 400.000)</option>
                                            <option value="Royal">Royal (Rp 600.000)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Jumlah Tamu</label>
                                        <input 
                                            type="number" 
                                            name="guests"
                                            min="1"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                            value={formData.guests}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                    <input 
                                        type="checkbox" 
                                        id="extraBed"
                                        name="extraBed"
                                        className="w-5 h-5 text-[var(--primary-color)] rounded focus:ring-[var(--primary-color)]"
                                        checked={formData.extraBed}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="extraBed" className="text-gray-700 select-none cursor-pointer">
                                        Tambah Extra Bed (+ Rp 55.000/malam)
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Catatan Tambahan (Opsional)</label>
                                    <textarea 
                                        name="notes"
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all"
                                        placeholder="Contoh: Request kamar di lantai bawah, alergi makanan tertentu, dll."
                                        value={formData.notes}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
                                >
                                    <div className="icon-message-circle text-2xl"></div>
                                    Konfirmasi via WhatsApp
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-2">
                                    Anda akan diarahkan ke WhatsApp untuk mengirim detail pesanan ini.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}