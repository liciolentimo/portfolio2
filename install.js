let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
evt.srcElement.setAttribute('hidden', true);
deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}

    window.addEventListener('appinstalled', logAppInstalled);

    function logAppInstalled(evt){
        console.log('Licio Lentimo App was installed.', evt);
    }