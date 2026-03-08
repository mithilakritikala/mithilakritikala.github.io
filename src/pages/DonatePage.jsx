import { ShieldCheck, Landmark, Clock } from 'lucide-react';

const DonatePage = () => {
    return (
        <div className="pt-24 min-h-[80vh] flex flex-col items-center justify-center bg-[var(--color-cream)] pb-20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-6">Support Our Cause</h1>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Your contribution empowers rural women with valuable skills, preserves the ancient art of Mithila painting, and helps build lasting financial independence for families in Madhubani.
                </p>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mb-8 max-w-xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--color-dark)]">Make a secure donation</h2>
                    <a
                        href="https://rzp.io/l/RUIvneXN"
                        className="block w-full bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Donate Now via Razorpay
                    </a>
                </div>

                {/* Trust Badge Strip */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8">
                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-green-100 w-36">
                        <ShieldCheck className="text-green-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-gray-800">80G Certified</span>
                        <span className="text-[10px] text-gray-500 text-center">Tax Deductible</span>
                    </div>

                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-blue-100 w-36">
                        <Landmark className="text-blue-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-gray-800">NITI Aayog</span>
                        <span className="text-[10px] text-gray-500 text-center">Registered</span>
                    </div>

                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-emerald-100 w-36">
                        <ShieldCheck className="text-emerald-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-gray-800">12A Certified</span>
                        <span className="text-[10px] text-gray-500 text-center">Registered NGO</span>
                    </div>

                    <div className="flex flex-col items-center bg-amber-50 px-4 py-3 rounded-lg shadow-sm border border-amber-100 w-36">
                        <Clock className="text-amber-500 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-amber-900">CSR Registration</span>
                        <span className="text-[10px] text-amber-700 text-center">In Progress</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DonatePage;
