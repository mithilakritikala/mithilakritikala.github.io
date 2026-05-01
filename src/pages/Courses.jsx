import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';

const Courses = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Courses</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer specialized training programs designed to empower women with practical skills for financial independence.
                    </p>
                </div>

                {/* Fee Banner */}
                <div className="flex items-start gap-3 bg-[#C9922A]/10 border border-[#C9922A]/40 rounded-xl p-4 mb-12 max-w-3xl mx-auto text-center">
                    <Info size={20} className="text-[var(--color-maroon)] mt-0.5 flex-shrink-0" />
                    <p className="text-[var(--color-maroon)] text-sm font-medium">
                        <strong>₹500 admission fee applies to all courses</strong> — paid once at the time of enrollment to ensure commitment to the program.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Mithila Painting Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <img src="/photos/mithila-painting.png" alt="Mithila Painting" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)]">Mithila Painting</h3>
                                    <span className="text-green-700 bg-green-50 border border-green-200 font-medium px-3 py-1 rounded-full text-sm flex-shrink-0">
                                        ✦ Admissions Open
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">Learn the ancient art of Mithila with traditional techniques and natural colors. This course covers everything from basic patterns to complex traditional compositions. By the end of the program, students can create commercial-grade artwork.</p>

                                <ul className="space-y-2 mb-10 text-sm text-gray-600">
                                    <li className="flex gap-2"><span>⏱</span> <strong>Duration:</strong> 4 Months</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> <strong>Instructor:</strong> Babita Devi</li>
                                    <li className="flex gap-2"><span>💰</span> <strong>Admission Fee:</strong> ₹500 (one-time registration)</li>
                                    <li className="flex gap-2 ml-6 text-xs text-gray-400 italic"><span></span>A nominal fee to ensure commitment to the course</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>1st Batch:</strong> Nov 2025 – Feb 2026 ✓ Completed</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>2nd Batch:</strong> Feb – Apr 2026 ✓ Completed</li>
                                    <li className="flex gap-2"><span>📅</span> <strong>3rd Batch:</strong> Starting May 4, 2026 → Admissions Open</li>
                                </ul>
                            </div>
                            <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-3 rounded font-bold transition-colors">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* Cutting & Stitching Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                        <img src="/photos/stiching.png" alt="Cutting & Stitching" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)]">Cutting &amp; Stitching</h3>
                                    <span className="text-amber-700 bg-amber-50 border border-amber-200 font-medium px-3 py-1 rounded-full text-sm flex-shrink-0">
                                        ⚡ Batch In Progress
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">Master cutting and stitching to create beautiful garments and textiles. This practical course provides women with immediate skills to start their own tailoring business or find employment in the textile industry.</p>

                                <ul className="space-y-2 mb-10 text-sm text-gray-600">
                                    <li className="flex gap-2"><span>⏱</span> <strong>Duration:</strong> 4 Months per batch</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> <strong>Instructor:</strong> Experienced Tailors</li>
                                    <li className="flex gap-2"><span>💰</span> <strong>Admission Fee:</strong> ₹500 (one-time registration)</li>
                                    <li className="flex gap-2 ml-6 text-xs text-gray-400 italic"><span></span>A nominal fee to ensure commitment to the course</li>
                                    <li className="flex gap-2"><span>✅</span> <strong>1st Batch:</strong> Sep – Dec 2025 ✓ Completed</li>
                                    <li className="flex gap-2"><span>🔄</span> <strong>2nd Batch:</strong> Feb – May 2026 → In Progress</li>
                                    <li className="flex gap-2"><span>📅</span> <strong>3rd Batch:</strong> Dates will be announced soon</li>
                                </ul>
                            </div>
                            <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)]/80 text-[var(--color-cream)] hover:bg-[var(--color-maroon)] py-3 rounded font-bold transition-colors">
                                Register Interest
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
