window.onload = function() {
  const button = document.getElementById('premiumButton');
  const label = document.getElementById('label');
  const premiumSwitch = document.getElementById('premiumSwitch');
  let isPremium = false;

  function updateUI() {
    premiumSwitch.checked = isPremium;
    label.textContent = isPremium
      ? 'When enabled, you get premium access'
      : 'Enable to gain premium access';
    const wrapper = premiumSwitch.parentElement;
    if(isPremium) {
      wrapper.classList.add('is-checked');
    } else {
      wrapper.classList.remove('is-checked');
    }
  }

  const dialog = createExternalDialog();

  button.addEventListener('click', () => { dialog.show(); });

  // Toggle premium state with the switch
  premiumSwitch.addEventListener('change', (e) => {
    if (premiumSwitch.checked)
      dialog.show();
    else
      BrightSDK.disable();
  });

  // Initialize UI
  updateUI();

  BrightSDK.init({
    lang: 'en',
    app_name: 'BrightSDK Web Sample App',
    app_logo: 'img/logo.png',
    skip_consent: true,
    iframe: false,
    debug: true,
    verbose: true,
    on_status_change: value=>{
      isPremium = value;
      updateUI();
    },
  }).then(function() {
    if (!isPremium)
      dialog.show();
  });

  // Upgrade DOM for dynamically inserted MDL elements
  if (window.componentHandler) {
    componentHandler.upgradeDom();
  }

  // Handle RC input
  document.addEventListener('keydown', function(event) {
    if (
      event.key === 'Enter' ||
      event.key === 'OK' ||
      event.code === 'Enter' ||
      event.keyCode === 13
    ) {
      dialog.show();
      event.preventDefault();
      return false;
    }
  });

};