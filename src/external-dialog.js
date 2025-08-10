function createExternalDialog() {
    var consentStyle = document.createElement('style');
    consentStyle.textContent = `
        #consent-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9998;
        }
    `;
    document.head.appendChild(consentStyle);

    // Create and append the consent container div if it doesn't exist yet
    if (!document.getElementById('consent-container')) {
    var consentDiv = document.createElement('div');
    consentDiv.id = "consent-container";
    document.body.appendChild(consentDiv);
    }
    return ConsentModule.create("consent-container", {
        "logo": "img/logo.png",
        "qrCode": "",
        "title": "BrightSDK Web Sample App",
        "benefitText": "To support the app",
        "acceptButton": "",
        "declineButton": "",
        "acceptButtonText": "Accept",
        "declineButtonText": "Decline",
        "backgroundColor": "#FBEFCF",
        "accentColor": "#D36B2E",
        "acceptTextColor": "#FFF",
        "declineTextColor": "#9D9B9B",
        "borderColor": "#AA99EC",
        "outlineColor": "#9DA9E8",
        "onShow": () => {/* callback to execute on dialog display */},
        "onClose": () => {/* callback to execute on dialog close */},
        "onAccept": () => { BrightSDK.enable(true); },
        "onDecline": () => { BrightSDK.disable(); },
    });
};