const Admission = () => {
    return (
        <div className="pt-24 min-h-[70vh] bg-white pb-20 flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Admission</h1>
                <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-8"></div>
                <div className="bg-[var(--color-cream)] p-8 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-4">Mithila Painting Course - Applications Open</h2>
                    <p className="text-gray-700 mb-6 font-medium">Please visit our center to collect the physical admission form. Bring 2 passport size photos and your Aadhaar card copy.</p>
                    <p className="text-[var(--color-maroon)] font-bold text-lg">Admissions close on 7th Oct.</p>
                </div>
            </div>
        </div>
    );
}
export default Admission;
