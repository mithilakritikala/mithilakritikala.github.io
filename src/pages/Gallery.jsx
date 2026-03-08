const Gallery = () => {
    const images = [
        "/photos/Work In action.jpg",
        "/photos/gallery3.jpg",
        "/photos/gallery2.jpg",
        "/photos/gallery7.jpg",
        "/photos/gallery1.jpg",
        "/photos/gallery4.jpg",
        "/photos/gallery5.jpg",
        "/photos/gallery6.jpg"
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--color-cream)] pb-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-maroon)] mb-4">Our Gallery</h1>
                    <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A collection of moments from our classes, workshops, and the beautiful art created by our talented students.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative shadow-sm">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white bg-[var(--color-maroon)]/80 p-3 rounded-full">🔍</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
