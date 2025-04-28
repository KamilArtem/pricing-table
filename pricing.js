// pricing.js

function updatePrices(planType = 'monthly', currency = 'usd') {
    if (typeof pricingObject === 'undefined') {
        console.error('pricingObject not found!');
        return;
    }

    document.querySelectorAll('[data-plan]').forEach(function(el) {
        const plan = el.getAttribute('data-plan'); // 'basic', 'pro', 'enterprise'
        const price = pricingObject[planType][plan][currency];
        const symbol = pricingObject.currency[currency];

        if (typeof price === 'number') {
            el.textContent = symbol + price;
        } else {
            el.textContent = price;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updatePrices('monthly', 'usd'); // Default on load
});

// If you have buttons to switch pricing plans
const monthlyBtn = document.getElementById('switch-to-monthly');
const yearlyBtn = document.getElementById('switch-to-yearly');
const successBtn = document.getElementById('switch-to-success');

if (monthlyBtn) {
    monthlyBtn.addEventListener('click', function() {
        updatePrices('monthly', 'usd');
    });
}
if (yearlyBtn) {
    yearlyBtn.addEventListener('click', function() {
        updatePrices('yearly', 'usd');
    });
}
if (successBtn) {
    successBtn.addEventListener('click', function() {
        updatePrices('successFee', 'usd');
    });
}
