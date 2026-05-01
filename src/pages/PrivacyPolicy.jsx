

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-maroon)] mb-2">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-6">Mithila KritiKala (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.</p>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Information We Collect:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Name, email, phone number submitted via contact or admission forms</li>
                            <li>Donation details for issuing 80G tax receipts</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">How We Use It:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>To process admissions and respond to enquiries</li>
                            <li>To issue donation receipts under 80G</li>
                            <li>We do not sell or share your data with third parties</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Data Storage:</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Form data is handled securely and not stored beyond operational need</li>
                        </ul>

                        <h2 className="text-xl font-bold text-[var(--color-dark)] mt-8 mb-4">Contact:</h2>
                        <p>contact@mithilakritikala.com | +91 7903120432</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
