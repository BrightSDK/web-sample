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
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        }

        #consent-container .consent-dialog {
        backdrop-filter: blur(15px) !important;
        border-radius: 20px !important;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        max-width: 450px !important;
        margin: 20px !important;
        }

        #consent-container .consent-dialog h2 {
        font-weight: bold !important;
        color: #2c3e50 !important;
        }

        #consent-container .consent-dialog p {
        color: #555 !important;
        font-size: 1.1em !important;
        }

        #consent-container .consent-dialog .consent-buttons button {
        border-radius: 25px !important;
        padding: 12px 24px !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        backdrop-filter: blur(10px) !important;
        }

        #consent-container .consent-dialog .consent-buttons button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
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
        "title": "🌐 BrightSDK Consent",
        "benefitText": "Help improve our app by enabling BrightSDK features",
        "acceptButton": "",
        "declineButton": "",
        "acceptButtonText": "Accept & Continue",
        "declineButtonText": "Decline",
        "backgroundColor": "rgba(255, 255, 255, 0.95)",
        "accentColor": "#667eea",
        "acceptTextColor": "#FFF",
        "declineTextColor": "#666",
        "borderColor": "rgba(102, 126, 234, 0.3)",
        "outlineColor": "rgba(102, 126, 234, 0.5)",
        "onShow": () => {/* callback to execute on dialog display */},
        "onClose": () => {/* callback to execute on dialog close */},
        "onAccept": () => { BrightSDK.enable(true); },
        "onDecline": () => { BrightSDK.disable(); },
    });
};