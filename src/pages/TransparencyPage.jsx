import { ShieldCheck, FileText, Download, Clock, Landmark, Users } from 'lucide-react';

const TransparencyPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">
                        Verified, Transparent & Accountable
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We believe in complete transparency. Our operations are fully compliant with the legal and financial regulations of the Government of India.
                    </p>
                </div>

                {/* Registration Cards Grid */}
                <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6 flex items-center gap-2">
                    <ShieldCheck className="text-[var(--color-maroon)]" />
                    Legal Registrations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {/* 12A Registration */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-[var(--color-dark)]">12A Registration</h3>
                            <p className="text-sm text-gray-500 mb-2">Registration No: AAKTM3093ME20251</p>
                            <div className="text-sm bg-gray-50 p-2 rounded text-gray-700 border border-gray-100">
                                <span className="font-medium">Note:</span> Exempts NGO income from tax.
                            </div>
                        </div>
                    </div>

                    {/* 80G Registration */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-[var(--color-dark)]">80G Registration</h3>
                            <p className="text-sm text-gray-500 mb-2">Registration No: AAKTM3093MF20251</p>
                            <div className="text-sm bg-blue-50 p-2 rounded text-blue-800 border border-blue-100">
                                <span className="font-medium">Tax Benefit:</span> Your donation qualifies for 50% tax deduction under Section 80G of the Income Tax Act.
                            </div>
                        </div>
                    </div>

                    {/* NGO Darpan */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <Landmark size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-[var(--color-dark)]">NGO Darpan ID</h3>
                            <p className="text-sm text-gray-500 mb-2">Unique ID: BR/2025/0781443</p>
                            <p className="text-sm text-gray-600">Registered with NITI Aayog, Govt. of India.</p>
                        </div>
                    </div>

                    {/* Trust Registration */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-[var(--color-dark)]">Trust Registration</h3>
                            <p className="text-sm text-gray-500 mb-2">Registration process completed in Madhubani, Bihar. Certificate available on request.</p>
                            <p className="text-sm text-gray-600">Legally registered public charitable trust.</p>
                        </div>
                    </div>

                    {/* PAN Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-[var(--color-dark)]">Permanent Account Number (PAN)</h3>
                            <p className="text-sm text-gray-500 mb-2">PAN: AAKTM3093M</p>
                            <p className="text-sm text-gray-600">Issued by Income Tax Department, Govt of India.</p>
                        </div>
                    </div>

                    {/* CSR Registration */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 bg-amber-50/30 flex items-start gap-4">
                        <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0 animate-pulse">
                            <Clock size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg text-amber-900">CSR Registration</h3>
                                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-medium border border-amber-200">In Progress</span>
                            </div>
                            <p className="text-sm text-amber-800/80">
                                We are actively working towards CSR-1 registration on the MCA portal. We will update this as soon as it is complete.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certificate Downloads */}
                <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6">Certificate Downloads</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                    <a href="#" className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between hover:border-[var(--color-maroon)] hover:shadow-md transition-all group">
                        <span className="font-medium text-gray-700 group-hover:text-[var(--color-maroon)]">12A Certificate</span>
                        <Download size={20} className="text-gray-400 group-hover:text-[var(--color-maroon)]" />
                    </a>
                    <a href="#" className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between hover:border-[var(--color-maroon)] hover:shadow-md transition-all group">
                        <span className="font-medium text-gray-700 group-hover:text-[var(--color-maroon)]">80G Certificate</span>
                        <Download size={20} className="text-gray-400 group-hover:text-[var(--color-maroon)]" />
                    </a>
                    <a href="#" className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between hover:border-[var(--color-maroon)] hover:shadow-md transition-all group">
                        <span className="font-medium text-gray-700 group-hover:text-[var(--color-maroon)]">NGO Darpan Doc</span>
                        <Download size={20} className="text-gray-400 group-hover:text-[var(--color-maroon)]" />
                    </a>
                </div>

                {/* How We Use Funds */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
                    <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-4">How We Use Funds</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We pride ourselves on lean operations, ensuring that the maximum possible amount goes directly to our core programs. Our funds primarily support training materials, instructor stipends, and outreach in rural communities to bring more women into our programs.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-1">
                                        <span>Training Materials & Art Supplies</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div className="bg-[var(--color-maroon)] h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-1">
                                        <span>Community Outreach & Expansion</span>
                                        <span>20%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div className="bg-[var(--color-gold)] h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-1">
                                        <span>Operations & Admin</span>
                                        <span>20%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual breakdown donut/pie representation using pure CSS/HTML */}
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64 rounded-full flex items-center justify-center shrink-0"
                                style={{ background: 'conic-gradient(var(--color-maroon) 0% 60%, var(--color-gold) 60% 80%, #9CA3AF 80% 100%)' }}>
                                <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-inner">
                                    <span className="font-serif text-2xl font-bold text-[var(--color-maroon)]">100%</span>
                                    <span className="text-xs text-gray-500 max-w-[80px] leading-tight">Impact Focused</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trustees & Annual Reports Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Trustees */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6 flex items-center gap-2">
                            <Users className="text-[var(--color-maroon)]" />
                            Our Trustees
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Vishal Kumar Thakur</h4>
                                    <p className="text-sm text-gray-500">President / Managing Trustee</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Rakesh Kumar Thakur</h4>
                                    <p className="text-sm text-gray-500">Trustee / Secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Annual Reports */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-[var(--color-dark)] mb-6 flex items-center gap-2">
                            <FileText className="text-[var(--color-maroon)]" />
                            Annual Reports
                        </h2>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Annual Report 2025-26 will be published after financial year completion.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TransparencyPage;
