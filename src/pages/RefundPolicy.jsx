

const RefundPolicy = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-2">Refund Policy</h1>
                    <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Admission Fee (₹500):</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>The ₹500 admission fee is a one-time registration fee paid at the time of enrollment.</li>
                            <li>It is non-refundable once the admission process is complete.</li>
                            <li>In case a batch is cancelled by Mithila KritiKala before commencement, the fee will be fully refunded.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Donations:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Donations made to Mithila KritiKala are voluntary and non-refundable.</li>
                            <li>All donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Contact for queries:</h2>
                        <p>contact@mithilakritikala.com | +91 7903120432</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
