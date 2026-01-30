// Initialize the application
function initApp() {

    // document.title = "♖ ♖ ♖♖♖ exvvnn ♖♖♖ ♖ ♖";
    document.body.style.backgroundColor = "#23465E";
    document.title = "🚧 Under Construction. 🏗️";


    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = `
            <img src="./assets/UnderConstruction.png" alt="Under Construction" class="header-img">
        `;
    }
}

// Start the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

export { initApp };