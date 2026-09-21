// // Initialize the application
// function initApp() {
//     document.body.style.backgroundColor = "#23465E";
//     document.title = "🚧 Under Construction. 🏗️";

//     const app = document.getElementById("app");
//     if (app) {
//         app.innerHTML = `
//             <img src="./assets/UnderConstruction.png" alt="Under Construction" class="header-img">
//         `;
//     }
// }

// // Start the app when the DOM is fully loaded
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initApp);
// } else {
//     initApp();
// }

// export { initApp };

const contactUrl = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=evanmjulius@gmail.com";

function initApp() {
    document.title = "EDEV - Digital maker";

    const app = document.getElementById("app");
    if (!app) return;

    app.innerHTML = `
        <header class="site-header">
            <a class="brand" href="#top" aria-label="EDEV home"><span class="brand-mark">E</span><span>EDEV<span class="brand-dot">.</span></span></a>
            <nav class="site-nav" aria-label="Main navigation">
                <a href="#work">Selected work</a><a href="#about">About</a>
                <a class="nav-contact" href="${contactUrl}" target="_blank" rel="noopener">Let's talk <span aria-hidden="true">&nearr;</span></a>
            </nav>
        </header>
        <main id="top">
            <section class="hero" aria-labelledby="hero-title">
                <div class="hero-copy">
                    <p class="eyebrow"><span class="status-dot"></span> Available for select projects</p>
                    <h1 id="hero-title">I make digital spaces <em>feel alive.</em></h1>
                    <p class="hero-intro">Independent designer and developer building thoughtful identities, expressive websites, and tiny worlds worth getting lost in.</p>
                    <div class="hero-actions"><a class="button button-primary" href="#work">See what I make <span aria-hidden="true">&darr;</span></a><a class="text-link" href="${contactUrl}" target="_blank" rel="noopener">Start a conversation <span aria-hidden="true">&nearr;</span></a></div>
                </div>
                <div class="hero-note" aria-label="Current location"><span class="note-line"></span><p>Currently making<br><strong>good things on the internet.</strong></p></div>
            </section>
            <section class="city-scene" aria-label="Pixel city illustration"><img src="./assets/8bit-Cityscape.png" alt="A pixel-art city at night"><div class="scene-caption"><span>01</span> A little optimism, rendered daily.</div></section>
            <section class="work-section" id="work" aria-labelledby="work-title">
                <div class="section-heading"><p class="eyebrow">The good stuff</p><h2 id="work-title">A few things<br><em>in my orbit.</em></h2></div>
                <div class="work-list">
                    <a class="work-item" href="#contact"><span class="work-number">01</span><span class="work-name">Web experiences</span><span class="work-detail">Design + build</span><span class="work-arrow">&nearr;</span></a>
                    <a class="work-item" href="#contact"><span class="work-number">02</span><span class="work-name">Visual identities</span><span class="work-detail">Direction + systems</span><span class="work-arrow">&nearr;</span></a>
                    <a class="work-item" href="#contact"><span class="work-number">03</span><span class="work-name">Experiments</span><span class="work-detail">Code + curiosity</span><span class="work-arrow">&nearr;</span></a>
                </div>
            </section>
            <section class="about-section" id="about" aria-labelledby="about-title"><p class="eyebrow">A bit about me</p><div class="about-grid"><h2 id="about-title">Small team energy.<br><em>Big feeling.</em></h2><p>I like the space where sharp thinking meets a little weirdness. I work with people who care about the details and want to make something that could only be theirs.</p></div></section>
            <section class="contact-section" id="contact" aria-labelledby="contact-title">
                <p class="eyebrow">Have a good one?</p>
                <div class="contact-grid">
                    <div><h2 id="contact-title">Let's make<br><em>something memorable.</em></h2><a class="contact-link" href="${contactUrl}" target="_blank" rel="noopener">hello@exvvnn.dev <span aria-hidden="true">&nearr;</span></a></div>
                    <div class="contact-form"><p>Have a project in mind? Gmail will open with <strong>hello@exvvnn.dev</strong> ready as the recipient.</p><a class="button form-submit" href="${contactUrl}" target="_blank" rel="noopener">Open Gmail compose <span aria-hidden="true">&nearr;</span></a></div>
                </div>
            </section>
        </main>
        <footer class="site-footer"><span>&copy; 2026 EDEV</span><span>Made with intention, somewhere online.</span><a href="#top">Back to top &uarr;</a></footer>
    `;

}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initApp);
else initApp();

export { initApp };