const AnnouncementBanner = () => {
    // Config array
    // Example: ["Admission for Mithila Painting has started!", "New sewing classes starting soon."]
    const announcements = [];

    if (announcements.length === 0) return null;

    return (
        <div className="bg-[var(--color-maroon)] text-[var(--color-cream)] py-2 px-4 shadow-sm overflow-hidden whitespace-nowrap overflow-x-hidden flex items-center justify-center">
            <div className="animate-marquee inline-block hover:[animation-play-state:paused] w-full text-center sm:text-left">
                {announcements.map((ann, i) => (
                    <span key={i} className="mx-8 font-medium text-sm md:text-base">
                        {ann}
                        {i !== announcements.length - 1 && <span className="mx-8 text-[var(--color-gold)]">|</span>}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementBanner;
