/* Adding file for service worker */
if ('serviceWorker' in navigator) {
  window.addEventListener('load',() => {
    navigator.serviceWorker.register('/serviceWorker.js').then((registration) => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch((err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });

  // Install - adding event listener for installing sw
  self.addEventListener('install', (event) => {
    // perform actions required on installing
  });

}
