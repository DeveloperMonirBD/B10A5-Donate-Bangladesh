//FAQ Blog
document.getElementById("faq-blog").addEventListener("click", function () {
    document.getElementById("faq-section").classList.remove("hidden");
    document.getElementById("card-section").classList.add("hidden");
});

//history tab functionality :
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

historyTab.addEventListener("click", function () {
    historyTab.classList.add("text-black", "bg-lime-400", "hover:bg-lime-500");
    historyTab.classList.remove(
        "text-gray-600",
        "border-gray-300",
        "hover:border-gray-300"
    );

    donationTab.classList.remove(
        "text-black",
        "bg-lime-400",
        "hover:bg-lime-500",
        "border-lime-300",
        "hover:border-lime-300"
    );
    donationTab.classList.add(
        "text-gray-600",
        "border-gray-300",
        "hover:border-gray-300"
    );
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("faq-section").classList.add("hidden");
});

donationTab.addEventListener("click", function () {
    donationTab.classList.add("text-black", "bg-lime-400", "hover:bg-lime-500");
    donationTab.classList.remove(
        "text-gray-600",
        "border-gray-300",
        "hover:border-gray-300"
    );

    historyTab.classList.remove(
        "text-black",
        "bg-lime-400",
        "hover:bg-lime-500",
        "border-lime-300",
        "hover:border-lime-300"
    );
    historyTab.classList.add(
        "text-gray-600",
        "border-gray-300",
        "hover:border-gray-300"
    );
    document.getElementById("card-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("faq-section").classList.add("hidden");
});

// donation card-1 functionality :
document
    .getElementById("first-donation-btn")
    .addEventListener("click", function () {
        const firstDonationInput = parseFloat(
            document.getElementById("firstDonationInput").value
        );
        document.getElementById("firstDonationInput").value = "";

        const firstCardBdt = parseFloat(
            document.getElementById("first-card-bdt").innerText
        );
        const firstExpenseDonation = firstCardBdt + firstDonationInput;

        document.getElementById("first-card-bdt").innerText =
            firstExpenseDonation.toFixed(2);

        //nav btn functionality:
        const navBdt = parseFloat(document.getElementById("Nav-bdt").innerText);

        let netBalance = navBdt - firstDonationInput;
        document.getElementById("Nav-bdt").innerText = netBalance.toFixed(2);

        if (netBalance < 0) {
            alert("Your current balance is : 0");
        }

        // popup alert
        const openPopUp = document.getElementById("popup");
        openPopUp.classList.remove("hidden");
        document.getElementById("close-popup").addEventListener('click', function () {
            const openPopUp = document.getElementById("popup");
            openPopUp.classList.add("hidden");
        });

        // validation:
        const errorElement = document.getElementById("first-donation-error");
        if (firstDonationInput <= 0 || isNaN(firstDonationInput)) {
            errorElement.classList.remove("hidden");
            showError("first-donation-error");
            return;
        } else {
            errorElement.classList.add("hidden");
            hideError("first-donation-error");
        }

    });
