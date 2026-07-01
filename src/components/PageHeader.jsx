import { KachniDivider } from './MithilaMotif';
import Reveal from './Reveal';

// Shared H1 header block for every non-Home page — keeps the eyebrow +
// Fraunces headline + kachni-divider pattern established on Home
// consistent site-wide instead of each page rolling its own gold bar.
// eslint-disable-next-line react/prop-types
const PageHeader = ({ eyebrow, title, subtitle }) => (
    <Reveal className="text-center mb-16">
        {eyebrow && (
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-3">
                {eyebrow}
            </p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--color-maroon)]">{title}</h1>
        <KachniDivider className="w-40 h-3 mx-auto mt-5 mb-6" />
        {subtitle && (
            <p className="text-lg text-[var(--color-ink)]/70 max-w-2xl mx-auto">{subtitle}</p>
        )}
    </Reveal>
);

export default PageHeader;
