import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const Admission = () => {
    return (
        <div className="pt-24 min-h-[70vh] bg-white pb-20 flex flex-col items-center">
            <SEO
                title="Admission — Join Our Mithila Painting or Stitching Course"
                description="How to apply for the Mithila Painting or Cutting & Stitching course at Mithila KritiKala in Benipatti, Madhubani, Bihar."
                path="/admission"
            />
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <PageHeader
                    title="Admission"
                    subtitle="Next batch starts May 4, 2026. Visit our center to collect the physical admission form. Bring 2 passport size photos and your Aadhaar card copy."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {/* Mithila Painting Card */}
                    <Reveal className="bg-[var(--color-paper)] p-8 rounded-sm shadow-sm flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4 gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Mithila Painting Course</h2>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Admissions Open</span>
                        </div>
                        <p className="text-[var(--color-ink)]/70 mb-6 flex-grow">
                            3rd batch starting May 4, 2026. Visit our center to collect the physical admission form. Bring 2 passport size photos and your Aadhaar card copy.
                        </p>
                    </Reveal>

                    {/* Cutting & Stitching Card */}
                    <Reveal delay={120} className="bg-[var(--color-paper)] p-8 rounded-sm shadow-sm flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4 gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Cutting & Stitching Course</h2>
                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Batch In Progress</span>
                        </div>
                        <p className="text-[var(--color-ink)]/70 mb-6 flex-grow">
                            2nd batch (Feb – May 2026) is currently in progress. Next batch dates will be announced soon. Register your interest to get notified.
                        </p>
                        <Link to="/contact" className="inline-block text-center bg-[var(--color-maroon)] text-white font-medium py-3 px-6 rounded-sm hover:bg-[#6b1414] transition-colors mt-auto self-start">
                            Register Interest &rarr;
                        </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export default Admission;
