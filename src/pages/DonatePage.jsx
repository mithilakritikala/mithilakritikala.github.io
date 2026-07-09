import { ShieldCheck, Landmark, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import { KachniDivider } from '../components/MithilaMotif';
import SEO from '../components/SEO';

const DonatePage = () => {
    return (
        <div className="pt-24 min-h-[80vh] flex flex-col items-center justify-center bg-[var(--color-paper)] pb-20">
            <SEO
                title="Donate — Support Rural Women's Livelihoods"
                description="Donate to Mithila KritiKala, a 12A/80G registered NGO training rural women in Mithila painting and tailoring in Madhubani, Bihar. Your donation is tax-deductible."
                path="/donate"
            />
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-semibold text-[var(--color-maroon)] mb-4">Support Our Cause</h1>
                    <KachniDivider className="w-40 h-3 mx-auto mb-6" />
                    <p className="text-lg text-[var(--color-ink)]/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Your contribution empowers rural women with valuable skills, preserves the ancient art of Mithila painting, and helps build lasting financial independence for families in Madhubani.
                    </p>
                </Reveal>

                <Reveal delay={120} className="bg-white p-8 md:p-12 rounded-sm shadow-xl mb-8 max-w-xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-[var(--color-ink)]">Make a secure donation</h2>
                    <a
                        href="https://rzp.io/l/RUIvneXN"
                        className="block w-full bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-4 rounded-sm font-bold text-lg transition-colors shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Donate Now via Razorpay
                    </a>
                </Reveal>

                {/* Trust Badge Strip */}
                <Reveal delay={240} className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8">
                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-green-100 w-36">
                        <ShieldCheck className="text-green-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-[var(--color-ink)]">80G Certified</span>
                        <span className="text-[10px] text-[var(--color-ink)]/60 text-center">Tax Deductible</span>
                    </div>

                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-blue-100 w-36">
                        <Landmark className="text-blue-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-[var(--color-ink)]">NITI Aayog</span>
                        <span className="text-[10px] text-[var(--color-ink)]/60 text-center">Registered</span>
                    </div>

                    <div className="flex flex-col items-center bg-white px-4 py-3 rounded-sm shadow-sm border border-emerald-100 w-36">
                        <ShieldCheck className="text-emerald-600 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-[var(--color-ink)]">12A Certified</span>
                        <span className="text-[10px] text-[var(--color-ink)]/60 text-center">Registered NGO</span>
                    </div>

                    <div className="flex flex-col items-center bg-amber-50 px-4 py-3 rounded-sm shadow-sm border border-amber-100 w-36">
                        <Clock className="text-amber-500 mb-2" size={24} />
                        <span className="font-bold text-xs text-center text-amber-900">CSR Registration</span>
                        <span className="text-[10px] text-amber-700 text-center">In Progress</span>
                    </div>
                </Reveal>

            </div>
        </div>
    );
};

export default DonatePage;
