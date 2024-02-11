const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
  // Store the event object for later use
  deferredPrompt = event;
  // Update UI to show the install button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user's response
  const { outcome } = await deferredPrompt.userChoice;
  // Log the user's choice
  console.log(`User response to the install prompt: ${outcome}`);
  deferredPrompt = null;
  // Hide the install button
  butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
});
