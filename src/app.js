// Initialize the application
function initApp() {
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