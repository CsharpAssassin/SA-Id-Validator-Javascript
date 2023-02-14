if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('Service worker registered successfully:', registration);
            })
            .catch(function (error) {
                console.log('Service worker registration failed:', error);
            });
    });
}
