// pricing.js — Clean Final Version (KamilArtem)

// Update prices dynamically
function updatePrices(planType = 'monthly', currency = 'usd') {
    if (typeof pricingObject === 'undefined') {
        console.error('pricingObject not found!');
        return;
    }

    document.querySelectorAll('[data-plan]').forEach(function(el) {
        const plan = el.getAttribute('data-plan');
        const price = pricingObject[planType][plan][currency];
        const symbol = pricingObject.currency[currency];

        if (typeof price === 'number') {
            el.innerText = symbol + price;
        } else {
            el.innerText = price;
        }
    });
}

// Update period label (/month, /year, or empty)
function updatePeriodLabel(planType) {
    document.querySelectorAll('.price-time').forEach(function(label) {
        if (!label) return;

        if (planType === 'monthly') {
            label.innerText = '/month';
        } else if (planType === 'yearly') {
            label.innerText = '/year';
        } else if (planType === 'successFee') {
            label.innerText = ''; // Empty for success fee
        }
    });
}

// When page loads, set default values
document.addEventListener('DOMContentLoaded', function() {
    updatePrices('monthly', 'usd'); 
    updatePeriodLabel('monthly');  
});

// Handle button clicks
const monthlyBtn = document.getElementById('switch-to-monthly');
const yearlyBtn = document.getElementById('switch-to-yearly');
const successBtn = document.getElementById('switch-to-success');

if (monthlyBtn) {
    monthlyBtn.addEventListener('click', function() {
        updatePrices('monthly', 'usd');
        updatePeriodLabel('monthly');
    });
}
if (yearlyBtn) {
    yearlyBtn.addEventListener('click', function() {
        updatePrices('yearly', 'usd');
        updatePeriodLabel('yearly');
    });
}
if (successBtn) {
    successBtn.addEventListener('click', function() {
        updatePrices('successFee', 'usd');
        updatePeriodLabel('successFee');
    });
}
