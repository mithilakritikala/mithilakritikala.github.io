

const PaymentTerms = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-2">Payment Terms</h1>
                    <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Admission Fee:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>₹500 one-time registration fee per course, paid in cash at our center.</li>
                            <li>Kataiya Road, Benipatti, Madhubani, Bihar</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Donations:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Accepted via cash, bank transfer, or UPI at our center.</li>
                            <li>An 80G receipt will be issued for all donations.</li>
                            <li>Online donation gateway coming soon.</li>
                        </ul>

                        <p className="mb-6 font-medium">Mithila KritiKala is a registered public charitable trust (12A & 80G).</p>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Contact:</h2>
                        <p>contact@mithilakritikala.com | +91 7903120432</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentTerms;
