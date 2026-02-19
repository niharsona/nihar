/* ============================================
   കട്ടിടീച്ചേഴ്സ് - COMMON JS (SHARED)
   ============================================
   
   This file is SHARED across all pages.
   Handles: Header, Footer, Navigation, Social Links
   
   DO NOT add page-specific logic here!
*/

let SITE_CONFIG = {};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    setupHeader();
    setupFooter();
    setupHamburgerMenu();
});

/* ============================================
   LOAD CONFIG FROM config.json
   ============================================ */

async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if (!response.ok) throw new Error('Config not found');
        SITE_CONFIG = await response.json();
        console.log('✅ Config loaded:', SITE_CONFIG);
    } catch (error) {
        console.error('❌ Error loading config:', error);
        // Fallback to default values
        SITE_CONFIG = getDefaultConfig();
    }
}

function getDefaultConfig() {
    return {
        site: {
            name: "കട്ടിടീച്ചേഴ്സ്",
            nameEnglish: "KuttyTeachers",
            logo: "assets/images/logo.png",
            email: "contact@kuttyteachers.in",
            location: "പാലക്കാട്, കേരളം"
        },
        navigation: [
            { label: "വീട്", href: "index.html" },
            { label: "ഫോട്ടോ", href: "pages/photography.html" },
            { label: "പരിശീലനം", href: "pages/tutoring.html" },
            { label: "സംഗീതം", href: "pages/piano.html" },
            { label: "തോട്ടം", href: "pages/gardening.html" },
            { label: "ഞങ്ങളെക്കുറിച്ച്", href: "pages/about.html" }
        ],
        socialMedia: {
            instagram: { icon: "📷", url: "https://instagram.com/kuttyteachers", enabled: true },
            facebook: { icon: "👤", url: "https://facebook.com/kuttyteachers", enabled: true },
            youtube: { icon: "▶️", url: "https://youtube.com/@kuttyteachers", enabled: true },
            whatsapp: { icon: "💬", url: "https://wa.me/919XXXXXXXXXX", enabled: true }
        }
    };
}

/* ============================================
   SETUP HEADER
   ============================================ */

function setupHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    // Wait for config to load
    setTimeout(() => {
        if (!SITE_CONFIG.site) {
            console.warn('Config not loaded yet, retrying...');
            setTimeout(setupHeader, 500);
            return;
        }

        const logoImg = SITE_CONFIG.site.logo || 'assets/images/logo.png';
        const siteName = SITE_CONFIG.site.nameEnglish || 'KuttyTeachers';
        const siteNameMl = SITE_CONFIG.site.name || 'കട്ടിടീച്ചേഴ്സ്';

        headerContainer.innerHTML = `
            <header class="header">
                <a href="index.html" class="logo" style="text-decoration: none;">
                    <img src="${logoImg}" alt="${siteName}" class="logo-img" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Crect fill=%22%2340916c%22 width=%2240%22 height=%2240%22 rx=%228%22/%3E%3Ctext x=%2220%22 y=%2224%22 text-anchor=%22middle%22 font-size=%2220%22 fill=%22white%22%3E🌱%3C/text%3E%3C/svg%3E'">
                    <div class="logo-text">
                        <div class="logo-english">${siteName}</div>
                        <div class="logo-malayalam">${siteNameMl}</div>
                    </div>
                </a>

                <nav class="nav" id="desktop-nav"></nav>

                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <nav class="mobile-menu" id="mobile-menu"></nav>
        `;

        // Populate navigation
        populateNavigation();
    }, 100);
}

/* ============================================
   POPULATE NAVIGATION
   ============================================ */

function populateNavigation() {
    if (!SITE_CONFIG.navigation) return;

    const desktopNav = document.getElementById('desktop-nav');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!desktopNav || !mobileMenu) return;

    let navHTML = '';
    SITE_CONFIG.navigation.forEach(item => {
        const isActive = isCurrentPage(item.href) ? 'active' : '';
        navHTML += `<a href="${item.href}" class="nav-item ${isActive}">${item.label}</a>`;
    });

    desktopNav.innerHTML = navHTML;
    mobileMenu.innerHTML = navHTML;
}

function isCurrentPage(href) {
    const currentPath = window.location.pathname;
    const hrefPath = href.split('/').pop() || 'index.html';
    const currentPage = currentPath.split('/').pop() || 'index.html';
    return currentPage === hrefPath || (hrefPath === 'index.html' && currentPath.endsWith('/'));
}

/* ============================================
   SETUP FOOTER
   ============================================ */

function setupFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    setTimeout(() => {
        if (!SITE_CONFIG.site) {
            setTimeout(setupFooter, 500);
            return;
        }

        const site = SITE_CONFIG.site;
        const year = site.year || new Date().getFullYear();

        footerContainer.innerHTML = `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-col">
                        <h4>${site.name}</h4>
                        <p>${site.description || ''}</p>
                    </div>

                    <div class="footer-col">
                        <h4>സേവനങ്ങൾ</h4>
                        <div id="footer-nav"></div>
                    </div>

                    <div class="footer-col">
                        <h4>സമ്പർക്കം</h4>
                        <p>📧 <a href="mailto:${site.email}">${site.email}</a></p>
                        <p>📍 ${site.location}</p>
                    </div>

                    <div class="footer-col">
                        <h4>സോഷ്യൽ മീഡിയ</h4>
                        <div class="social-links" id="footer-social"></div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>© ${year} ${site.nameEnglish} — ${site.location} 🌱 നിർമ്മിതം</p>
                </div>
            </footer>
        `;

        // Populate footer nav
        populateFooterNav();

        // Populate social links
        populateSocialLinks();
    }, 100);
}

/* ============================================
   POPULATE FOOTER NAVIGATION
   ============================================ */

function populateFooterNav() {
    if (!SITE_CONFIG.navigation) return;

    const footerNav = document.getElementById('footer-nav');
    if (!footerNav) return;

    let navHTML = '';
    SITE_CONFIG.navigation.forEach(item => {
        navHTML += `<p><a href="${item.href}">${item.label}</a></p>`;
    });

    footerNav.innerHTML = navHTML;
}

/* ============================================
   POPULATE SOCIAL LINKS
   ============================================ */

function populateSocialLinks() {
    if (!SITE_CONFIG.socialMedia) return;

    const socialContainer = document.getElementById('footer-social');
    if (!socialContainer) return;

    let socialHTML = '';
    Object.values(SITE_CONFIG.socialMedia).forEach(social => {
        if (social.enabled !== false) {
            socialHTML += `
                <a href="${social.url}" 
                   class="social-link" 
                   title="${social.name}" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    ${social.icon}
                </a>
            `;
        }
    });

    socialContainer.innerHTML = socialHTML;
}

/* ============================================
   SETUP HAMBURGER MENU
   ============================================ */

function setupHamburgerMenu() {
    setTimeout(() => {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        if (!hamburger || !mobileMenu) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const mobileMenuItems = mobileMenu.querySelectorAll('.nav-item');
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('header') && !e.target.closest('#mobile-menu')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }, 200);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    return path.split('/').pop() || 'index.html';
}

// Log config (for debugging)
function logConfig() {
    console.log('Current Site Config:', SITE_CONFIG);
}

// Export for use in other scripts
window.SITE_CONFIG_GLOBAL = SITE_CONFIG;
