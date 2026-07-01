// A small illustrated, gently-animated avatar for the "Maithili" chat
// assistant — replaces a generic message-bubble icon with an actual face,
// drawn in the same hand-line style as the site's Mithila motifs (bindi,
// bun, dupatta drape) so the assistant reads as a person, not a UI widget.
// eslint-disable-next-line react/prop-types
const MaithiliAvatar = ({ size = 40, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`maithili-avatar-bob ${className}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* dupatta / shoulder drape */}
        <path
            d="M12 92c2-22 14-34 38-34s36 12 38 34"
            fill="#F3E6C9"
            stroke="#2A1810"
            strokeWidth="2"
        />
        <path d="M20 88c3-14 8-22 14-26M80 88c-3-14-8-22-14-26" stroke="#C9922A" strokeWidth="1.4" fill="none" opacity="0.7" />

        {/* hair / bun */}
        <path
            d="M22 46c0-18 12-30 28-30s28 12 28 30c0 4-1 8-3 12H25c-2-4-3-8-3-12Z"
            fill="#2A1810"
        />
        <circle cx="50" cy="12" r="7" fill="#2A1810" />
        <circle cx="50" cy="12" r="3" fill="#C9922A" />

        {/* face */}
        <circle cx="50" cy="50" r="26" fill="#F0C29A" stroke="#2A1810" strokeWidth="2" />

        {/* bindi */}
        <circle cx="50" cy="30" r="2.2" fill="#8B1A1A" />

        {/* eyes (blink via CSS) */}
        <g className="maithili-avatar-blink" style={{ transformOrigin: '50px 48px' }}>
            <path d="M38 48c2.5-3 7-3 9 0" stroke="#2A1810" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M53 48c2.5-3 7-3 9 0" stroke="#2A1810" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* smile */}
        <path d="M43 60c3 3 11 3 14 0" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
);

export default MaithiliAvatar;
