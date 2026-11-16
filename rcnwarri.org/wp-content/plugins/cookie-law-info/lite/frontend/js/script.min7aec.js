/* Cookie banner disabled */
window.cookieyes = window.cookieyes || {};
window.cookieyes._ckyConsentStore = new Map();
window.cookieyes._ckyGetFromStore = function(key) {
    if (key === "action") return "yes";
    if (key === "consent") return "yes";
    return "yes";
};
window.cookieyes._ckySetInStore = function() {};
window.cookieyes._ckyGetCookie = function() { return null; };
window.cookieyes._ckySetCookie = function() {};
window.revisitCkyConsent = function() {};
window.getCkyConsent = function() {
    return {
        activeLaw: "gdpr",
        categories: { necessary: true, functional: true, analytics: true, performance: true, advertisement: true },
        isUserActionCompleted: true,
        consentID: "disabled",
        languageCode: "en"
    };
};

(function() {
    var style = document.createElement('style');
    style.id = 'cky-disabled-style';
    style.innerHTML = '.cky-consent-container, .cky-btn-revisit-wrapper, .cky-overlay, .cky-modal, [data-cky-tag="notice"], [data-cky-tag="revisit-consent"], #cookie-law-info-bar, #cookie-law-info-again { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }';
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.head.appendChild(style);
        });
    }
})();
