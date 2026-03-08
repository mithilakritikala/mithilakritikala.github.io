import { Link } from 'react-router-dom';

const courseStatus = {
    mithilaPainting: { status: "open", label: "Admissions Open" },
    cuttingStitching: { status: "closed", label: "Admissions Closed" }
};

const Courses = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Courses</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer specialized training programs designed to empower women with practical skills for financial independence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Mithila Painting Card */}
                    <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-gray-100 ${courseStatus.mithilaPainting.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                        <img src="/photos/mithila-painting.png" alt="Mithila Painting" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)]">Mithila Painting</h3>
                                    <span className={`${courseStatus.mithilaPainting.status === 'open' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'} font-medium px-3 py-1 rounded-full text-sm flex-shrink-0`}>
                                        {courseStatus.mithilaPainting.label}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">Learn the ancient art of Mithila with traditional techniques and natural colors. This course covers everything from basic patterns to complex traditional compositions. By the end of the program, students can create commercial-grade artwork.</p>

                                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                                    <li className="flex gap-2"><span>⏱</span> Duration: 6 Months</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> Instructor: Babita Devi</li>
                                    <li className="flex gap-2"><span>📝</span> Certification: Included</li>
                                </ul>
                            </div>
                            <div>
                                {courseStatus.mithilaPainting.status === 'open' ? (
                                    <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-3 rounded font-bold transition-colors">
                                        Apply Now
                                    </Link>
                                ) : (
                                    <button disabled className="block w-full text-center bg-gray-200 text-gray-500 py-3 rounded font-bold cursor-not-allowed">
                                        Admissions Closed
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Cutting & Stitching Card */}
                    <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-gray-100 ${courseStatus.cuttingStitching.status === 'closed' ? 'opacity-60 grayscale-[0.2]' : ''}`}>
                        <img src="/photos/stiching.png" alt="Cutting & Stitching" className="w-full h-64 object-cover" />
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-[var(--color-dark)]">Cutting & Stitching</h3>
                                    <span className={`${courseStatus.cuttingStitching.status === 'open' ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'} font-medium px-3 py-1 rounded-full text-sm flex-shrink-0`}>
                                        {courseStatus.cuttingStitching.label}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">Master cutting and stitching to create beautiful garments and textiles. This practical course provides women with immediate skills to start their own tailoring business or find employment in the textile industry.</p>

                                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                                    <li className="flex gap-2"><span>⏱</span> Duration: 3 Months</li>
                                    <li className="flex gap-2"><span>👩‍🏫</span> Experienced Tailors</li>
                                    <li className="flex gap-2"><span>📝</span> Equipment: Provided during class</li>
                                </ul>
                            </div>
                            <div>
                                {courseStatus.cuttingStitching.status === 'open' ? (
                                    <Link to="/admission" className="block w-full text-center bg-[var(--color-maroon)] text-[var(--color-cream)] hover:bg-[#6b1414] py-3 rounded font-bold transition-colors">
                                        Apply Now
                                    </Link>
                                ) : (
                                    <button disabled className="block w-full text-center bg-gray-200 text-gray-500 py-3 rounded font-bold cursor-not-allowed">
                                        Admissions Closed
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
