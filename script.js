const exchangeRates = {
    USD: { EUR: 0.84, GBP: 0.75, JPY: 109.57, AUD: 1.36, CAD: 1.25, CHF: 0.91, CNY: 6.37, SEK: 8.62, NZD: 1.43 },
    EUR: { USD: 1.19, GBP: 0.89, JPY: 130.53, AUD: 1.62, CAD: 1.49, CHF: 1.08, CNY: 7.55, SEK: 10.24, NZD: 1.70 },
    GBP: { USD: 1.34, EUR: 1.12, JPY: 147.33, AUD: 1.82, CAD: 1.67, CHF: 1.21, CNY: 8.50, SEK: 11.50, NZD: 1.91 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, AUD: 0.012, CAD: 0.011, CHF: 0.0082, CNY: 0.057, SEK: 0.078, NZD: 0.013 },
    AUD: { USD: 0.74, EUR: 0.62, GBP: 0.55, JPY: 81.43, CAD: 0.92, CHF: 0.67, CNY: 4.69, SEK: 6.32, NZD: 1.05 },
    CAD: { USD: 0.80, EUR: 0.67, GBP: 0.60, JPY: 88.85, AUD: 1.09, CHF: 0.73, CNY: 5.11, SEK: 6.85, NZD: 1.14 },
    CHF: { USD: 1.10, EUR: 0.93, GBP: 0.83, JPY: 119.89, AUD: 1.49, CAD: 1.37, CNY: 7.00, SEK: 9.40, NZD: 1.55 },
    CNY: { USD: 0.16, EUR: 0.13, GBP: 0.12, JPY: 17.13, AUD: 0.21, CAD: 0.20, CHF: 0.14, SEK: 1.34, NZD: 0.22 },
    SEK: { USD: 0.12, EUR: 0.098, GBP: 0.087, JPY: 12.83, AUD: 0.16, CAD: 0.15, CHF: 0.11, CNY: 0.75, NZD: 0.16 },
    NZD: { USD: 0.70, EUR: 0.59, GBP: 0.52, JPY: 78.41, AUD: 0.95, CAD: 0.88, CHF: 0.65, CNY: 4.58, SEK: 6.40 }
    // Add more exchange rates as needed
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
