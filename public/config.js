const loadDevBundle = false;
const isDev = window.location.origin.includes('localhost');

const appendScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
}

if (isDev) {
    loadDevBundle && appendScript('https://agarminty.ucoz.net/game/bundle.js');
    window.isDev = true;
} else {
    appendScript('https://sentinelix-source-agarix.glitch.me/bundle.js');
    appendScript('https://www.google.com/recaptcha/api.js');
}