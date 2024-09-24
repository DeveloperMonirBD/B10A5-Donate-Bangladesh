//FAQ Blog
document.getElementById('faq-blog').addEventListener('click', function () {
    document.getElementById('card-section').classList.toggle('hidden');
    document.getElementById('faq-section').classList.toggle('hidden');
});

//history tab functionality :
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function () {
    historyTab.classList.add('text-black', 'bg-lime-400', 'hover:bg-lime-500');
    historyTab.classList.remove('text-gray-600', 'border-gray-300', 'hover:border-gray-300');

    donationTab.classList.remove('text-black', 'bg-lime-400', 'hover:bg-lime-500', 'border-lime-300', 'hover:border-lime-300');
    donationTab.classList.add('text-gray-600', 'border-gray-300', 'hover:border-gray-300');
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('faq-section').classList.add('hidden');
});

donationTab.addEventListener('click', function () {
    donationTab.classList.add('text-black', 'bg-lime-400', 'hover:bg-lime-500');
    donationTab.classList.remove('text-gray-600', 'border-gray-300', 'hover:border-gray-300');

    historyTab.classList.remove('text-black', 'bg-lime-400', 'hover:bg-lime-500', 'border-lime-300', 'hover:border-lime-300');
    historyTab.classList.add('text-gray-600', 'border-gray-300', 'hover:border-gray-300');
    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('faq-section').classList.add('hidden');
});

// donation card functionality :
function handleDonation(cardSelector, donationInputSelector, navSelector, popupSelector, closePopupSelector, historyListSelector, errorSelector, donateTitleSelector) {
    const donationInput = parseFloat(document.querySelector(donationInputSelector).value);
    document.querySelector(donationInputSelector).value = '';

    const cardBdt = parseFloat(document.querySelector(cardSelector).innerText);
    const expenseDonation = cardBdt + donationInput;

    document.querySelector(cardSelector).innerText = expenseDonation.toFixed(2);

    // nav btn functionality:
    const navBdt = parseFloat(document.querySelector(navSelector).innerText);
    let netBalance = navBdt - donationInput;

    // net balance validation
    if (netBalance < 0) {
        alert(' ⚠️ Insufficient Balance, Please Add Money First!');
        return;
    }

    document.querySelector(navSelector).innerText = netBalance.toFixed(2);

    // popup alert
    const openPopUp = document.querySelector(popupSelector);
    openPopUp.classList.remove('hidden');
    openPopUp.classList.add('flex');
    document.querySelector(closePopupSelector).addEventListener('click', function () {
        openPopUp.classList.remove('flex');
        openPopUp.classList.add('hidden');
    });

    // expense history:
    const donation = document.querySelector(cardSelector).innerText;
    const balance = parseFloat(document.querySelector(navSelector).innerText);
    const donateTitle = document.querySelector(donateTitleSelector).innerText;

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-4 space-y-3 rounded-md border shadow-md';

    historyItem.innerHTML = `
        <p class="text-xs font-bold text-gray-500">${donation} ${donateTitle}</p>
        <p class="text-xs text-gray-500">Net Balance: ${balance.toFixed(2)}</p>
        <p class="text-xs text-gray-500">${new Date()}</p>
    `;

    const historyContainer = document.querySelector(historyListSelector);
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    console.log(historyContainer);

    // validation:
    const errorElement = document.querySelector(errorSelector);
    if (donationInput <= 0 || isNaN(donationInput)) {
        errorElement.classList.remove('hidden');
        showError(errorSelector);
        return;
    } else {
        errorElement.classList.add('hidden');
        hideError(errorSelector);
    }
}

// Add event listener to the button
// for 1st card :
document.getElementById('first-donation-btn').addEventListener('click', function () {
    handleDonation('#first-card-bdt', '#firstDonationInput', '#Nav-bdt', '#popup', '#close-popup', '#history-list', '#first-donation-error', '#donate-title');
});

// for 1st card :
document.getElementById('second-donation-btn').addEventListener('click', function () {
    handleDonation('#second-card-bdt', '#secondDonationInput', '#Nav-bdt', '#secondPopup', '#second-close-popup', '#history-list', '#second-donation-error', '#second-donate-title');
});

// for 1st card :
document.getElementById('third-donation-btn').addEventListener('click', function () {
    handleDonation('#third-card-bdt', '#third-donation-input', '#Nav-bdt', '#third-popup', '#third-close-popup', '#history-list', '#third-donation-error', '#third-donate-title');
});
