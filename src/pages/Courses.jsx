import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { FishMotif } from '../components/MithilaMotif';

// NOTE: batch dates/headcounts below are not yet mapped to the org's internal
// reference codes (MKK-SB1 / MKK-MP / MKK-SB2). Confirm exact dates and
// trainee counts per batch before treating this copy as final.
const Courses = () => {
    return (
        <div className="pt-24 min-h-screen bg-[var(--color-paper)] pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <PageHeader
                    eyebrow="What We Do"
                    title="Our Courses"
                    subtitle="We offer specialized training programs designed to empower women with practical skills for financial independence."
                />

                {/* Fee Banner */}
                <Reveal className="flex items-start gap-3 bg-white border border-[var(--color-gold)]/40 rounded-sm p-4 mb-12 max-w-3xl mx-auto text-center">
                    <Info size={20} className="text-[var(--color-maroon)] mt-0.5 flex-shrink-0" />
                    <p className="text-[var(--color-maroon)] text-sm font-medium">
                        <strong>₹500 admission fee applies to all courses</strong> — paid once at the time of enrollment to ensure commitment to the program.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* Mithila Painting Card */}
                    <Reveal className="bg-white shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <img src="/photos/mithila-painting.png" alt="Mithila Painting" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4 gap-3">
                                    <div className="flex items-center gap-2">
                                        <FishMotif className="w-8 h-4 text-[var(--color-terracotta)]" />
                                        <h3 className="text-2xl font-semibold text-[var(--color-ink)]">Mithila Painting</h3>
                                    </div>
                                    <span className="text-green-700 bg-green-50 border border-green-200 font-medium px-3 py-1 rounded-full text-sm flex-shrink-0">
                                        ✦ Admissions Open
                                    </span>
                                </div>
                                <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">Learn the ancient art of Mithila with traditional techniques and natural colors. This course covers everything from basic patterns to complex traditional compositions. By the end of the program, students can create commercial-grade artwork.</p>

                                <ul className="space-y-2 mb-10 text-sm text-[var(--color-ink)]/70">
                                    <li className="flex gap-2"><span>⏱</span> <strong>Duration:</strong> 4 Months</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> <strong>Instructor:</strong> Babita Devi</li>
                                    <li className="flex gap-2"><span>💰</span> <strong>Admission Fee:</strong> ₹500 (one-time registration)</li>
                                    <li className="flex gap-2 ml-6 text-xs text-[var(--color-ink)]/40 italic"><span></span>A nominal fee to ensure commitment to the course</li>
                                    {/* likely MKK-MP — confirm code + headcount */}
                                    <li className="flex gap-2"><span>✅</span> <strong>1st Batch:</strong> Nov 2025 – Feb 2026 ✓ Completed</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>2nd Batch:</strong> Feb – Apr 2026 ✓ Completed</li>
                                    <li className="flex gap-2"><span>📅</span> <strong>3rd Batch:</strong> Starting May 4, 2026 → Admissions Open</li>
                                </ul>
                            </div>
                            <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-3 rounded-sm font-bold transition-colors">
                                Apply Now
                            </Link>
                        </div>
                    </Reveal>

                    {/* Cutting & Stitching Card */}
                    <Reveal delay={150} className="bg-white shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                        <img src="/photos/stiching.png" alt="Cutting & Stitching" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4 gap-3">
                                    <div className="flex items-center gap-2">
                                        <FishMotif className="w-8 h-4 text-[var(--color-terracotta)]" />
                                        <h3 className="text-2xl font-semibold text-[var(--color-ink)]">Cutting &amp; Stitching</h3>
                                    </div>
                                    <span className="text-amber-700 bg-amber-50 border border-amber-200 font-medium px-3 py-1 rounded-full text-sm flex-shrink-0">
                                        ⚡ Batch In Progress
                                    </span>
                                </div>
                                <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">Master cutting and stitching to create beautiful garments and textiles. This practical course provides women with immediate skills to start their own tailoring business or find employment in the textile industry.</p>

                                <ul className="space-y-2 mb-10 text-sm text-[var(--color-ink)]/70">
                                    <li className="flex gap-2"><span>⏱</span> <strong>Duration:</strong> 4 Months per batch</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> <strong>Instructor:</strong> Experienced Tailors</li>
                                    <li className="flex gap-2"><span>💰</span> <strong>Admission Fee:</strong> ₹500 (one-time registration)</li>
                                    <li className="flex gap-2 ml-6 text-xs text-[var(--color-ink)]/40 italic"><span></span>A nominal fee to ensure commitment to the course</li>
                                    {/* likely MKK-SB1 / MKK-SB2 — confirm which code maps to which batch + headcount */}
                                    <li className="flex gap-2"><span>✅</span> <strong>1st Batch:</strong> Sep – Dec 2025 ✓ Completed</li>
                                    <li className="flex gap-2"><span>🔄</span> <strong>2nd Batch:</strong> Feb – May 2026 → In Progress</li>
                                    <li className="flex gap-2"><span>📅</span> <strong>3rd Batch:</strong> Dates will be announced soon</li>
                                </ul>
                            </div>
                            <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)]/80 text-[var(--color-cream)] hover:bg-[var(--color-maroon)] py-3 rounded-sm font-bold transition-colors">
                                Register Interest
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Courses;
