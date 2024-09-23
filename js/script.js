
//FAQ Blog
document.getElementById("faq-blog").addEventListener('click', function () {
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
