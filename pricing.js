// pricing.js — Final version

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
            el.textContent = symbol + price;
        } else {
            el.textContent = price;
        }
    });
}

// NEW FUNCTION to update period label
function updatePeriodLabel(planType) {
    document.querySelectorAll('[wf-text-monthly]').forEach(function(label) {
        const monthlyText = label.getAttribute('wf-text-monthly');
        const yearlyText = label.getAttribute('wf-text-yearly');

        if (planType === 'monthly') {
            label.textContent = monthlyText;
        } else if (planType === 'yearly') {
            label.textContent = yearlyText;
        } else if (planType === 'successFee') {
            label.textContent = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updatePrices('monthly', 'usd'); 
    updatePeriodLabel('monthly');  // << Make sure default text appears
});

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
