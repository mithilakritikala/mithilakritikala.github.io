import { Link } from 'react-router-dom';

const Admission = () => {
    return (
        <div className="pt-24 min-h-[70vh] bg-white pb-20 flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Admission</h1>
                <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-12"></div>
                
                <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                    Next batch starts May 4, 2026. Visit our center to collect the physical admission form. Bring 2 passport size photos and your Aadhaar card copy.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* Mithila Painting Card */}
                    <div className="bg-[var(--color-cream)] p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4 gap-4">
                            <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)]">Mithila Painting Course</h2>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Admissions Open</span>
                        </div>
                        <p className="text-gray-700 mb-6 flex-grow">
                            3rd batch starting May 4, 2026. Visit our center to collect the physical admission form. Bring 2 passport size photos and your Aadhaar card copy.
                        </p>
                    </div>

                    {/* Cutting & Stitching Card */}
                    <div className="bg-[var(--color-cream)] p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4 gap-4">
                            <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)]">Cutting & Stitching Course</h2>
                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Batch In Progress</span>
                        </div>
                        <p className="text-gray-700 mb-6 flex-grow">
                            2nd batch (Feb – May 2026) is currently in progress. Next batch dates will be announced soon. Register your interest to get notified.
                        </p>
                        <Link to="/contact" className="inline-block text-center bg-[var(--color-maroon)] text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all mt-auto self-start">
                            Register Interest &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admission;
