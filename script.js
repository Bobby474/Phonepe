document.addEventListener("DOMContentLoaded", function () {
    const makePaymentBtn = document.getElementById("makePaymentBtn");
    const paymentStatus = document.getElementById("paymentStatus");

    makePaymentBtn.addEventListener("click", () => {
        paymentStatus.innerHTML = "<div id='processingStatus'>Processing...</div>";

        makePayment()
            .then(() => {
                paymentStatus.innerHTML = "<div class='success'>Payment Successful!</div>";
            })
            .catch(() => {
                paymentStatus.innerHTML = "<div class='failure'>Payment Failed. Please try again.</div>";
            });
    });
});

function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() < 0.8;
            if (isSuccess) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}
