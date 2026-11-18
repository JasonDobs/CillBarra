// Footer component for Cill Barra Community Sports Centre
// Builds and injects the site footer (opening hours, social links, map and legal links)
// Include this file with <script src="components/Footer.js"></script> at the end of <body>.

(function () {
    // Opening hours shown under the "Opening Hours" heading
    const openingHours = [
        { day: "Monday", time: "7:00am\u20139pm" },
        { day: "Tuesday", time: "7:00am\u20139pm" },
        { day: "Wednesday", time: "7:00am\u20139pm" },
        { day: "Thursday", time: "7:00am\u20139pm" },
        { day: "Friday", time: "7:00am\u20139pm" },
        { day: "Saturday", time: "7:00am\u20136pm" },
        { day: "Sunday", time: "10:00am\u20134pm" }
    ];

    // Social media links
    const socialLinks = {
        facebook: "https://www.facebook.com/cillbarra",
        strava: "https://www.strava.com/clubs/cillbarra",
        instagram: "https://www.instagram.com/cillbarra.ie"
    };

    // Address used for the embedded map and the "get directions" link
    const mapAddress = "Cill Barra Sports Centre Ballybeg Waterford X91 NP60 Ireland";
    const encodedAddress = encodeURIComponent(mapAddress);
    const mapEmbedSrc = "https://maps.google.com/maps?q=" + encodedAddress + "&t=k&z=15&output=embed";
    const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodedAddress;

    // Simple inline icons so no external icon library/request is needed
    const icons = {
        facebook: '<svg viewBox="0 0 24 24" width="30" height="50" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M13.3 21v-7.2h2.2l.3-2.6h-2.5V9.5c0-.75.2-1.25 1.27-1.25h1.36V5.9c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.21-3.33 3.43v1.9H8.3v2.6h2.3V21" fill="currentColor" stroke="none"></path></svg>',
        strava: '<svg viewBox="0 0 24 24" width="30" height="50" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6,21 11,9 14,15 17,3"></polyline></svg>',
        instagram: '<svg viewBox="0 0 24 24" width="30" height="50" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"></circle></svg>'
    };

    // Scoped styles for the footer, injected once so css.css does not need to change
    const footerStyles = `
        html,
        body {
            min-height: 100%;
        }
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        body > main,
        body > section:not(.site-footer),
        .hero-intro {
            flex: 1 0 auto;
        }
        .site-footer {
            background-color: #1E293B;
            color: #E2E8F0;
            font-family: montserrat, sans-serif;
            padding: 8px 55px 8px;
            margin-top: auto;
        }
        .site-footer__social {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 48px;
            margin-bottom: 18px;
        }
        .site-footer__social-link {
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
        }
        .site-footer__social-link:hover,
        .site-footer__social-link:focus {
            color: #D48C11;
        }
        .site-footer__social-link:focus {
            outline: 3px solid #ffcc00;
            outline-offset: 3px;
        }
        .site-footer__main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: flex-start;
            gap: 25px;
            margin-bottom: 10px;
        }
        .site-footer__hours {
            justify-self: center;
            margin-left: 0;
        }
        .site-footer__hours-title {
            margin: 0 0 5px;
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            display: inline-block;
            padding-bottom: 4px;
            border-bottom: 3px solid #D48C11;
        }
        .site-footer__hours-list {
            list-style: none;
            margin: 6px 0 0;
            padding: 0;
        }
        .site-footer__hours-list li {
            display: flex;
            gap: 16px;
            font-size: 12px;
            padding: 1px 0;
        }
        .site-footer__day {
            font-weight: 700;
            color: #ffffff;
            width: 90px;
        }
        .site-footer__time {
            color: #CBD5E1;
        }
        .site-footer__map {
            position: relative;
            width: 360px;
            max-width: 100%;
            height: 175px;
            border-radius: 4px;
            overflow: hidden;
            flex-shrink: 0;
            justify-self: center;
            grid-column: 3;
            margin-right: 0;
        }
        .site-footer__map-frame {
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
        }
        .site-footer__map-link {
            position: absolute;
            inset: 0;
        }
        .site-footer__map-link:focus {
            outline: 3px solid #ffcc00;
            outline-offset: -3px;
        }
        .site-footer__links {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
            padding: 8px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .site-footer__links a {
            color: #ffffff;
            text-decoration: none;
            font-size: 12px;
        }
        .site-footer__links a:hover,
        .site-footer__links a:focus {
            color: #D48C11;
            text-decoration: underline;
        }
        .site-footer__project,
        .site-footer__support {
            text-align: center;
            font-size: 11px;
            color: #94A3B8;
            margin: 3px 0;
        }
        @media (max-width: 800px) {
            .site-footer {
                padding: 18px 20px 12px;
                margin-top: auto;
            }
            .site-footer__main {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .site-footer__hours {
                margin-left: 0;
            }
            .site-footer__hours-list li {
                justify-content: center;
            }
            .site-footer__map {
                width: 100%;
                max-width: 360px;
                height: 175px;
                margin-right: 0;
            }
            .site-footer__links {
                justify-content: center;
                text-align: center;
            }
        }
    `;

    function buildHoursList() {
        return openingHours
            .map(function (entry) {
                return '<li><span class="site-footer__day">' + entry.day + '</span><span class="site-footer__time">' + entry.time + "</span></li>";
            })
            .join("");
    }

    function buildFooterMarkup() {
        return (
            '<footer class="site-footer">' +
                '<div class="site-footer__social" aria-label="Social media links">' +
                    '<a class="site-footer__social-link" href="' + socialLinks.facebook + '" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">' + icons.facebook + "</a>" +
                    '<a class="site-footer__social-link" href="' + socialLinks.strava + '" target="_blank" rel="noopener noreferrer" aria-label="Visit our Strava club">' + icons.strava + "</a>" +
                    '<a class="site-footer__social-link" href="' + socialLinks.instagram + '" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">' + icons.instagram + "</a>" +
                "</div>" +
                '<div class="site-footer__main">' +
                    '<div class="site-footer__hours">' +
                        '<h2 class="site-footer__hours-title">Opening Hours</h2>' +
                        '<ul class="site-footer__hours-list">' + buildHoursList() + "</ul>" +
                    "</div>" +
                    '<div class="site-footer__map">' +
                        '<iframe class="site-footer__map-frame" src="' + mapEmbedSrc + '" title="Map showing Cill Barra Sports and Community Centre" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
                        '<a class="site-footer__map-link" href="' + directionsUrl + '" target="_blank" rel="noopener noreferrer" aria-label="Get directions to Cill Barra Sports and Community Centre from your current location"></a>' +
                    "</div>" +
                "</div>" +
                '<nav class="site-footer__links" aria-label="Footer navigation">' +
                    '<a href="ContactUs.html">Contact Us</a>' +
                    '<a href="TermsAndConditions.html">Terms and Conditions</a>' +
                    '<a href="PrivacyPolicy.html">Privacy Policy</a>' +
                    '<a href="Jobs.html">Jobs</a>' +
                "</nav>" +
                '<p class="site-footer__project">A project of Waterford L.E.D.C. Limited. RCN 20052553</p>' +
                '<p class="site-footer__support">This project is supported by the Department of Rural and Community Development and Pobal throughout the Community Services Programme</p>' +
            "</footer>"
        );
    }

    function injectStylesOnce() {
        if (document.getElementById("site-footer-styles")) {
            return;
        }
        const styleTag = document.createElement("style");
        styleTag.id = "site-footer-styles";
        styleTag.textContent = footerStyles;
        document.head.appendChild(styleTag);
    }

    function renderFooter() {
        injectStylesOnce();

        const mountPoint = document.getElementById("site-footer");
        const footerHtml = buildFooterMarkup();

        if (mountPoint) {
            mountPoint.innerHTML = footerHtml;
        } else {
            document.body.insertAdjacentHTML("beforeend", footerHtml);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderFooter);
    } else {
        renderFooter();
    }
})();
