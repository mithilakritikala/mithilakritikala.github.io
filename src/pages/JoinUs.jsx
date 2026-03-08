const JoinUs = () => {
    return (
        <div className="pt-24 min-h-[70vh] bg-white pb-20 flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Join Us / Volunteer</h1>
                <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-8"></div>
                <div className="bg-[var(--color-cream)] p-8 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[var(--color-dark)] mb-4">Become a Volunteer</h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We are always looking for passionate individuals to help with teaching, workshops, and digital marketing. Join our team and share your skills for a great cause.
                    </p>
                    <a href="mailto:mithilakritikala@gmail.com" className="inline-block bg-[var(--color-maroon)] text-[var(--color-cream)] px-8 py-3 rounded font-bold hover:bg-[#6b1414] transition-colors">
                        Email Us to Volunteer
                    </a>
                </div>
            </div>
        </div>
    );
}
export default JoinUs;
