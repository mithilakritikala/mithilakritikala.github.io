document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Set Active Link in Navigation ---
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links a');

    navAnchors.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Scroll Animation using Intersection Observer ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Terms and Conditions Modal ---
    const modalOverlay = document.getElementById('terms-modal');
    const termsLink = document.getElementById('terms-link');
    const closeButton = document.querySelector('.close-button');

    if (termsLink && modalOverlay && closeButton) {
        termsLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('visible');
        });

        closeButton.addEventListener('click', () => {
            modalOverlay.classList.remove('visible');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('visible');
            }
        });
    }
    
    // --- Donate Page: Payment Method Toggle ---
    const paymentToggles = document.querySelectorAll('.toggle-details');
    paymentToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const detailsPanel = toggle.parentElement.nextElementSibling;
            const isVisible = detailsPanel.style.display === 'block';
            
            detailsPanel.style.display = isVisible ? 'none' : 'block';
            toggle.textContent = isVisible ? 'Show Details' : 'Hide Details';
        });
    });

    // --- Donate Page: Amount Selection ---
    const amountContainer = document.querySelector('.amount-buttons');
    const selectedAmountDisplay = document.querySelector('.selected-amount strong');
    const customAmountInput = document.getElementById('custom-amount-input');
    const customAmountWrapper = document.getElementById('custom-amount-wrapper');

    if (amountContainer && selectedAmountDisplay && customAmountInput && customAmountWrapper) {
        const amountButtons = amountContainer.querySelectorAll('.amount-btn');

        amountButtons.forEach(button => {
            button.addEventListener('click', () => {
                amountButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                if (button.classList.contains('custom')) {
                    customAmountWrapper.style.display = 'block';
                    customAmountInput.focus();
                    selectedAmountDisplay.textContent = `₹${customAmountInput.value || 0}`;
                } else {
                    customAmountWrapper.style.display = 'none';
                    const amount = button.textContent.replace('₹', '');
                    selectedAmountDisplay.textContent = `₹${amount}`;
                }
            });
        });

        customAmountInput.addEventListener('input', () => {
            const amount = customAmountInput.value || 0;
            selectedAmountDisplay.textContent = `₹${amount}`;
        });
    }
});
